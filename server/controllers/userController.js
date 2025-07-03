import Job from "../models/Job.js"
import JobApplication from "../models/JobApplication.js"
import User from "../models/User.js"
import { v2 as cloudinary } from "cloudinary"
import { users } from "@clerk/clerk-sdk-node";

// Get User Data
export const getUserData = async (req, res) => {
    const userId = typeof req.auth === 'function' ? req.auth().userId : req.auth.userId;
    try {
        let user = await User.findById(userId);
        if (!user) {
            // Fetch Clerk user info
            const clerkUser = await users.getUser(userId);
            if (!clerkUser) {
                return res.json({ success: false, message: 'User Not Found in Clerk' });
            }
            // Check for existing user by email
            user = await User.findOne({ email: clerkUser.emailAddresses[0]?.emailAddress });
            if (!user) {
                // Create user in MongoDB
                user = await User.create({
                    _id: clerkUser.id,
                    name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim(),
                    email: clerkUser.emailAddresses[0]?.emailAddress || '',
                    image: clerkUser.imageUrl || '',
                    resume: ''
                });
            }
        }
        res.json({ success: true, user });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


// Apply For Job
export const applyForJob = async (req, res) => {

    const { jobId } = req.body

    const userId = typeof req.auth === 'function' ? req.auth().userId : req.auth.userId;

    try {

        const isAlreadyApplied = await JobApplication.find({ jobId, userId })

        if (isAlreadyApplied.length > 0) {
            return res.json({ success: false, message: 'Already Applied' })
        }

        const jobData = await Job.findById(jobId)

        if (!jobData) {
            return res.json({ success: false, message: 'Job Not Found' })
        }



        // Ensure companyId is always an ObjectId
        const companyId = typeof jobData.companyId === 'object' && jobData.companyId._id
            ? jobData.companyId._id
            : jobData.companyId;

        await JobApplication.create({
            companyId,
            userId,
            jobId,
            date: Date.now()
        })

        res.json({ success: true, message: 'Applied Successfully' })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

// Get User Applied Applications Data
export const getUserJobApplications = async (req, res) => {

    try {

        const userId = typeof req.auth === 'function' ? req.auth().userId : req.auth.userId;

        const applications = await JobApplication.find({ userId })
            .populate('companyId', 'name email image')
            .populate('jobId', 'title description location category level salary')
            .exec()

        if (!applications) {
            return res.json({ success: false, message: 'No job applications found for this user.' })
        }

        return res.json({ success: true, applications })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

// Update User Resume
export const updateUserResume = async (req, res) => {
    try {
        const userId = typeof req.auth === 'function' ? req.auth().userId : req.auth.userId;
        const resumeFile = req.file;
        let userData = await User.findById(userId);
        // If user not found by ID, try to find by email from Clerk (if available)
        if (!userData && req.body.email) {
            userData = await User.findOne({ email: req.body.email });
        }
        if (!userData) {
            return res.json({ success: false, message: 'User not found' });
        }
        if (resumeFile) {
            const resumeUpload = await cloudinary.uploader.upload(resumeFile.path, { resource_type: "auto" });
            userData.resume = resumeUpload.secure_url;
        }
        await userData.save();
        return res.json({ success: true, message: 'Resume Updated' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
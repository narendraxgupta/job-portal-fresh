// Script to fix JobApplication.companyId for all applications
// Run this with: node server/scripts/fixJobApplications.js

import mongoose from 'mongoose';
import Job from '../models/Job.js';
import JobApplication from '../models/JobApplication.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const MONGO_URI = process.env.MONGO_URI;

async function fixJobApplications() {
  await mongoose.connect(MONGO_URI);
  const applications = await JobApplication.find({});
  let fixed = 0;
  for (const app of applications) {
    // Find the job for this application
    const job = await Job.findById(app.jobId);
    if (job && (!app.companyId || app.companyId.toString() !== job.companyId.toString())) {
      app.companyId = job.companyId;
      await app.save();
      fixed++;
    }
  }
  console.log(`Fixed ${fixed} JobApplication documents.`);
  await mongoose.disconnect();
}

fixJobApplications().catch(e => {
  console.error(e);
  process.exit(1);
});

# 💼 Full Stack Job Portal

A feature-rich job portal built with **MERN stack** — MongoDB, Express, React, Node.js — enabling job seekers and recruiters to connect seamlessly. Integrated with **Clerk** for authentication and **Sentry** for performance monitoring and error tracking. Deployed on **Vercel**.

---

## ✨ Features

### 👨‍💻 Job Seekers
- Search and filter job listings
- Apply to jobs online
- Upload resume to profile
- Secure authentication with **Clerk**

### 🧑‍💼 Recruiters
- Create and manage job postings
- View applications and resumes
- Accept or reject applicants
- Secure recruiter dashboard

### ⚙️ Additional Features
- 🔐 Clerk Authentication
- 🧵 Tailwind CSS for UI
- 📈 Sentry integration for error and performance monitoring
- ☁️ Serverless backend deployed on Vercel

---

## 🏗️ Tech Stack

| Technology     | Usage                         |
|----------------|-------------------------------|
| **React**      | Frontend (Vite-based)         |
| **Node.js**    | Backend runtime               |
| **Express.js** | Backend API routes            |
| **MongoDB**    | Database                      |
| **Clerk**      | Authentication (Job Seekers)  |
| **Tailwind CSS** | UI styling                 |
| **Sentry**     | Monitoring & error tracking   |
| **Vercel**     | Deployment                    |

---

## 📁 Project Structure

```
job-portal/
├── client/     # React frontend
│   ├── public/
│   ├── src/
│   └── ...     
├── server/     # Express backend (optional structure)
├── How_To_Run_Project.pdf  # Step-by-step setup guide
```

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)
- Clerk & Sentry accounts

---

### 🔧 Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal
   ```

2. **Install Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Set Environment Variables**
   - Create `.env` in `client/`
   - Add values such as:
     ```
     VITE_CLERK_PUBLISHABLE_KEY=your_key
     VITE_SENTRY_DSN=your_sentry_dsn
     ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

> Refer to `How_To_Run_Project.pdf` for a detailed setup guide.

---

## 🚀 Deployment

- **Frontend** is deployed on **Vercel**
- Add `.env` values in the Vercel dashboard
- Customize `vercel.json` for advanced routing if needed

---

## 🛡️ Monitoring & Error Tracking

- **Sentry** is integrated for:
  - Performance monitoring
  - Error tracing
  - MongoDB query analysis

---

## 📸 Screenshots / Demo

> _Add demo URL or UI screenshots here_

---

## 📝 License

This project is licensed under the [MIT License](LICENSE)

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork, open issues, or submit pull requests.

---

## 🙋‍♂️ Author & Credits

- Built by [Your Name](https://github.com/yourusername)
- Powered by Clerk, MongoDB, Sentry, and Vercel

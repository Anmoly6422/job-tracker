# 🚀 Job Tracker

> A modern, production-ready full-stack job application management platform built with Next.js 15, React 19, TypeScript, and MongoDB. Organize applications with an intuitive drag-and-drop Kanban board, track interviews, visualize your job search through analytics, and manage every stage of the hiring process from a single, responsive dashboard.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Overview

Managing dozens of job applications through spreadsheets or notes can quickly become overwhelming. **Job Tracker** provides a centralized platform where users can organize applications, monitor interview progress, analyze job search performance, and stay on top of every opportunity.

Built with a modern full-stack architecture, Job Tracker emphasizes performance, scalability, and an intuitive user experience.

---

## ✨ Features

### 🔐 Secure Authentication
- User authentication with Better Auth
- Protected routes
- Persistent sessions
- Personalized workspace

### 📋 Interactive Kanban Board
- Drag-and-drop job cards
- Organize applications by status
- Smooth animations
- Responsive interactions
- Real-time UI updates

### 💼 Job Application Management
- Create new applications
- Edit application details
- Delete applications
- Track company information
- Store job links
- Save salary details
- Add personal notes

### 📅 Interview Management
- Schedule interview dates
- Track interview rounds
- Monitor upcoming interviews

### 📊 Analytics Dashboard
- Total applications
- Status distribution
- Job search progress
- Interactive charts
- Performance insights

### 🎨 Modern User Experience
- Fully responsive design
- Mobile-friendly interface
- Dark mode support
- Clean and accessible UI
- Professional dashboard

### ⚡ Optimized Performance
- Server Components
- Server Actions
- Optimized database queries
- Fast page loads
- Efficient rendering

---

# 🛠 Tech Stack

## Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- DnD Kit
- Framer Motion
- Lucide Icons

## Backend

- Next.js Server Actions
- MongoDB
- Mongoose

## Authentication

- Better Auth

## Validation

- Zod

## Deployment

- Vercel

---

# 📂 Project Structure

```text
app/
│
├── (auth)
├── dashboard
├── api
│
components/
│
├── ui
├── dashboard
├── kanban
│
lib/
│
├── auth
├── db
├── models
├── actions
│
hooks/
types/
public/
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/Anmoly6422/job-tracker.git
```

## Navigate to the project

```bash
cd job-tracker
```

## Install dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
MONGODB_URI=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=
```

> Replace the values above with your own credentials.

---

## Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

# 📸 Screenshots

> Add screenshots or GIFs here.

| Dashboard | Kanban Board |
|-----------|--------------|
| Image | Image |

| Analytics | Mobile View |
|-----------|-------------|
| Image | Image |

---

# 🌟 Key Highlights

- Modern App Router architecture
- Secure authentication
- Drag-and-drop Kanban workflow
- Interactive analytics dashboard
- Responsive UI
- Mobile-first design
- Type-safe development with TypeScript
- Clean and reusable component architecture
- Production-ready codebase

---

# 💡 Future Improvements

- AI-powered resume analysis
- Resume management
- Cover letter storage
- Calendar integration
- Email reminders
- Application deadline notifications
- Company wishlist
- Resume matching
- CSV/PDF export
- Multi-board support
- Team collaboration

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to the branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 🌐 Live Demo

**Demo:** https://your-vercel-url.vercel.app

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

### Anmol Yadav

- GitHub: https://github.com/Anmoly6422
- LinkedIn: *(Add your LinkedIn profile here)*

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future improvements.

---

<p align="center">
  Built with ❤️ using Next.js, React, TypeScript, MongoDB, Tailwind CSS, and Better Auth.
</p>

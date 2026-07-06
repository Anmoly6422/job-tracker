# 💼 Job Application Tracker

A modern, full-stack **Job Application Tracker** designed to help job seekers organize, manage, and monitor every stage of their job search. With an intuitive Kanban board, analytics dashboard, and responsive interface, users can efficiently track applications from submission to offer.

🌐 **Live Demo:** https://job-application-tracker-five-lime.vercel.app/

---

# ✨ Features

* 📋 Create, edit, and delete job applications
* 📌 Organize applications using a **Kanban Board**
* 🎯 Track application status (Applied, Interview, Offer, Rejected, etc.)
* 🔄 Drag-and-drop support for changing application stages
* 📊 Dashboard with job search analytics
* 🔍 Search and filter applications
* 📝 Store company details, job links, salary, notes, and deadlines
* 👤 Secure user authentication
* ☁️ Persistent cloud database
* 📱 Fully responsive design for desktop, tablet, and mobile
* 🌙 Clean, modern, and user-friendly interface

---

# 🛠️ Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* DnD Kit

### Backend

* Next.js Server Actions
* Next.js API Routes

### Database

* MongoDB
* Mongoose

### Authentication

* Auth.js (NextAuth)

### Deployment

* Vercel

---

# 📂 Project Structure

```text
job-application-tracker/
│
├── app/
├── components/
├── hooks/
├── lib/
├── models/
├── public/
├── styles/
├── types/
├── middleware.ts
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/Anmoly6422/job-tracker.git
```

## 2. Navigate into the project

```bash
cd job-tracker
```

## 3. Install dependencies

```bash
npm install
```

## 4. Create a `.env.local` file

```env
MONGODB_URI=your_mongodb_connection_string

AUTH_SECRET=your_auth_secret

AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> Update the environment variables according to your authentication provider and project configuration.

## 5. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

# 📊 Application Workflow

```text
Add Job
    │
    ▼
Applied
    │
    ▼
Interview
    │
    ▼
Offer
    │
    ▼
Accepted / Rejected
```

---

# 📱 Responsive Design

The application is optimized for:

* 💻 Desktop
* 💼 Laptop
* 📱 Mobile
* 📟 Tablet

---

# ⚡ Performance

* Server-side rendering with Next.js
* Fast page navigation
* Optimized database queries
* Responsive layouts
* Modern UI with smooth animations
* Secure authentication
* Optimized production deployment

---

# 🎯 Future Enhancements

* 📅 Interview scheduling calendar
* 📧 Email reminders for follow-ups
* 📈 Advanced analytics and charts
* 📎 Resume and cover letter management
* 🔔 Push notifications
* 🌐 Company profile integration
* 🤖 AI-powered job recommendations

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

---

# ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub. It helps support the project and encourages future improvements.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Anmol Yadav**

GitHub: https://github.com/Anmoly6422

LinkedIn: https://www.linkedin.com/in/your-linkedin

---

> Simplifying your job search, one application at a time. 🚀

# 💻 CodeVault
**The Ultimate Snippet Management Engine for Modern Developers.**

CodeVault is a high-performance, full-stack web application designed to help developers archive, categorize, and retrieve code snippets instantly. No more digging through old projects or Slack messages—store your "aha!" moments in one secure, beautiful vault.

🚀 **Live Site:** [https://code-vault-zeta.vercel.app/](https://code-vault-zeta.vercel.app/)

---

## ⚡ Core Features

*   **🔒 Secure Auth:** Identity management powered by **Clerk**, featuring social login and session persistence.
*   **📂 Intelligent Organization:** Tag your snippets by language (JavaScript, Python, C++, etc.) for rapid filtering.
*   **📋 Instant Copy:** One-tap clipboard integration with visual success feedback.
*   **🌙 Developer-First UI:** A sleek, dark-mode interface built with **Tailwind CSS** and **Lucide-React** icons.
*   **⚡ Serverless Performance:** Built on **Next.js 16+** with optimized Edge and Serverless functions for near-instant load times.

---

## 🏗️ Technical Architecture

### Frontend
*   **Framework:** Next.js 16 (App Router)
*   **Styling:** Tailwind CSS 
*   **State & Icons:** Lucide-React & React Hooks

### Backend
*   **Auth:** Clerk Authentication
*   **Database:** MongoDB Atlas (NoSQL)
*   **Modeling:** Mongoose ODM
*   **Deployment:** Vercel

---

## 🛠️ Installation & Setup

1. **Clone the Repo**
   ```bash
   git clone https://github.com/m-hamdy/code-vault.git
   cd code-vault
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Dependencies

*   **next** - React framework with server-side rendering
*   **clerk** - Authentication and session management
*   **mongoose** - MongoDB object modeling
*   **tailwindcss** - Utility-first CSS framework
*   **lucide-react** - Icon library

---


## 🚀 Deployment

CodeVault is deployed on **Vercel** with automatic deployments on every push to the main branch.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy with a single click


## 💬 Support & Feedback

Have questions or feature requests? Open an issue on [GitHub Issues](https://github.com/m-hamdy/code-vault/issues).

---

**Made with ❤️ by Developers, for Developers.**

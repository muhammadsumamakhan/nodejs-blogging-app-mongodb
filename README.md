# 📝 Node.js Blogging Application with MongoDB

A full-featured blogging web application built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**. This application provides secure user authentication (JWT & password hashing), blog creation with cover image upload, and interactive commenting features.

---

## 🚀 Features

- 🔐 **User Authentication & Authorization**:
  - Secure registration and login.
  - Passwords hashed using Node.js `crypto` (`HMAC-SHA256` with random salt).
  - Stateless authentication using **JSON Web Tokens (JWT)** stored securely in HTTP cookies (`cookie-parser`).
  - Role-based system (`USER`, `ADMIN`).

- 📰 **Blog Management**:
  - Create new blog posts with formatted text content and cover images.
  - Image uploading handled via **Multer** disk storage.
  - Dynamic individual blog reading pages with author details populated.

- 💬 **Interactive Comments**:
  - Logged-in users can leave comments on any blog.
  - Comments display author names and avatars.

- 🎨 **Responsive UI**:
  - Server-Side Rendering (SSR) using **EJS (Embedded JavaScript)** templates.
  - Styled with **Bootstrap 5** for mobile and desktop responsiveness.
  - Modular UI partials (`head`, `nav`, `footer`, `script`).

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Runtime & Framework** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Template Engine** | EJS (Embedded JavaScript) |
| **Styling** | Bootstrap 5, Custom CSS |
| **Authentication** | JWT (`jsonwebtoken`), `crypto` (HMAC-SHA256), `cookie-parser` |
| **File Uploads** | Multer |
| **Environment Config** | dotenv |
| **Dev Tool** | Nodemon |

---

## 📁 Project Structure

```text
nodejs-blogging-app-mongodb/
├── controllers/          # Request handlers & business logic
│   ├── blog.controller.js
│   └── user.controller.js
├── database/             # MongoDB connection configuration
│   └── db.js
├── middleware/           # Custom middlewares (e.g., JWT cookie checker)
│   └── authentication.js
├── models/               # Mongoose database schemas
│   ├── blog.js
│   ├── comment.js
│   └── user.js
├── public/               # Static assets
│   ├── images/           # Default assets (e.g., default user avatar)
│   └── uploads/          # User-uploaded blog cover images
├── routes/               # Express routing
│   ├── blog.js
│   └── user.js
├── services/             # Helper services (e.g., JWT token sign/verify)
│   └── authentication.js
├── views/                # EJS templates
│   ├── partials/         # Reusable template components (nav, head, etc.)
│   ├── addBlog.ejs
│   ├── blog.ejs
│   ├── home.ejs
│   ├── signin.ejs
│   └── signup.ejs
├── .env.example          # Environment variables template
├── .gitignore            # Git ignored files & folders
├── app.js                # Application entry point
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

Follow these instructions to get a local copy up and running.

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally or a MongoDB Atlas connection URI

### 2. Clone the Repository

```bash
git clone https://github.com/muhammadsumamakhan/nodejs-blogging-app-mongodb.git
cd nodejs-blogging-app-mongodb
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the root directory by copying the `.env.example`:

```bash
# On Windows (PowerShell)
Copy-Item .env.example .env

# On Mac/Linux
cp .env.example .env
```

Configure your `.env` variables:

```env
PORT=5001
MONGO_URL=mongodb://127.0.0.1:27017/Blogging-App
```

### 5. Run the Application

#### Development Mode (with auto-reload):
```bash
npm run dev
```

#### Production Mode:
```bash
npm start
```

Open your browser and navigate to:  
👉 **`http://localhost:5001`**

---

## 🛣️ Routes Overview

### User Routes (`/user`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/user/signup` | Render signup page | Public |
| `POST` | `/user/signup` | Register a new user | Public |
| `GET` | `/user/signin` | Render signin page | Public |
| `POST` | `/user/signin` | Authenticate user & set JWT cookie | Public |
| `GET` | `/user/signout` | Clear auth cookie & logout | Authenticated |

### Blog Routes (`/blog`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/` | Home page (List of blogs) | Authenticated |
| `GET` | `/blog/add-new-blog` | Render form to create blog | Authenticated |
| `POST` | `/blog` | Create a blog post (with cover image) | Authenticated |
| `GET` | `/blog/:id` | View blog detail & comments | Authenticated |
| `POST` | `/blog/comment/:blogId` | Post a comment on a blog | Authenticated |

---

## 🔒 Security Practices

- **Hashed Passwords**: User passwords are never saved in plain text. A unique 16-byte random salt is generated per user and hashed with `HMAC-SHA256`.
- **JWT Cookies**: Authentication tokens are passed via cookies and validated per request via middleware.
- **Environment Isolation**: Sensitive credentials (`MONGO_URL`, secret keys, ports) are stored in `.env` and kept out of version control.

---

## 👨‍💻 Author

**Muhammad Sumama Khan**
- GitHub: [@muhammadsumamakhan](https://github.com/muhammadsumamakhan)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

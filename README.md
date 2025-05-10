# 🔴 Live Stream App

A real-time video streaming application with room creation, video/audio controls, chat, and invitation system. Built with React, WebRTC, and modern frontend tools.

## 🚀 Features

- 🎥 Live video/audio streaming
- 🗨️ Real-time chat in rooms
- 🧑‍🤝‍🧑 Room creation and joining
- 📧 Invite users via email
- 📦 Dockerized deployment-ready

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Lucide React
- **Backend**: Node.js / Express (or your choice)
- **Video**: WebRTC, MediaStream
- **Chat**: WebSocket or Socket.IO
- **Email**: Nodemailer / Resend / SendGrid (based on config)
- **Auth**: JWT or Clerk/Auth.js (optional)
- **Deployment**: Docker, Vercel, or your own server

---

## 📦 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/live-stream-app.git
cd live-stream-app
```

## Install dependencies
npm install
# or
yarn

##  Start the dev server
npm run dev
# or
yarn dev


## . Environment Variables
Create a .env.local file:

-- NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
-- EMAIL_API_KEY=your-key-here
-- EMAIL_SENDER=no-reply@yourapp.com



## 📧 Sending Email Invitations
Room owners can invite guests by email. Example:

Subject: You're invited to join a Live Room!

Message: Click the link below to join:
Join Room

----

## 🧪 Todo
 -- [✔]Add stream recording

 -- [✔]Add viewer metrics

 -- [✔]Add admin panel

 --[[✔] Add moderation tools



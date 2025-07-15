# 🚀 AI Career Agent

A full-stack AI-powered career coaching application built with Next.js that helps professionals navigate their career journey with intelligent guidance and personalized recommendations.

## ✨ Features

### 🤖 AI Career Coach Chat
- Interactive Q&A sessions with an AI career counselor
- Personalized career advice and guidance
- Real-time responses powered by Gemini API

### 📄 AI Resume Analyzer
- Intelligent resume analysis and feedback
- Optimization suggestions for better job matching
- Industry-specific recommendations

### 🗺️ AI Roadmap Generator
- Personalized career path planning
- Skill development recommendations
- Timeline-based learning plans

### 💼 AI Cover Letter Generator (Coming Soon)
- Tailored cover letters for specific job applications
- Industry and role-specific customization
- Professional formatting and tone optimization

## 🔧 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** | Full-stack React framework |
| **React** | Interactive UI development |
| **Clerk** | Authentication and user management |
| **Neon** | Serverless Postgres database |
| **Inngest** | Background jobs & serverless workflows |
| **Tailwind CSS** | Modern, responsive styling |
| **Gemini API** | AI-powered natural language processing |
| **AgentKit** | AI agent workflow management |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account
- Neon database account
- Google Cloud account (for Gemini API)
- Inngest account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dasundu/AI_Career_Agent.git
   cd AI_Career_Agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Neon Database
   DATABASE_URL=your_neon_database_url

   # Gemini API
   GEMINI_API_KEY=your_gemini_api_key

   # Inngest
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   # or
   yarn db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ai-career-agent/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── dashboard/         # Main dashboard
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── agents/           # AI agent components
│   └── layout/           # Layout components
├── lib/                   # Utility functions
│   ├── db/               # Database configuration
│   ├── ai/               # AI service integrations
│   └── utils.ts          # Helper functions
├── inngest/              # Background job functions
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🔐 Authentication

This app uses **Clerk** for authentication, providing:
- Email/password authentication
- Social login options
- User management
- Session handling
- Protected routes

## 💾 Database

**Neon** serves as the serverless Postgres database with:
- Auto-scaling capabilities
- Branching for development
- Connection pooling
- Backup and recovery

## 🤖 AI Integration

The application leverages **Gemini API** for:
- Natural language processing
- Career advice generation
- Resume analysis
- Cover letter creation
- Roadmap planning

## ⚡ Background Jobs

**Inngest** handles asynchronous workflows:
- Resume processing
- Roadmap generation
- Email notifications
- Data synchronization

## 🎨 Styling

**Tailwind CSS** provides:
- Utility-first CSS framework
- Responsive design
- Dark mode support
- Custom component styling

## 📦 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** with automatic builds on git push

```bash
npm run build
npm start
```

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🔧 Configuration

### Database Setup

1. Create a Neon database
2. Add the connection string to your environment variables
3. Run migrations to set up tables

### API Keys

Obtain the following API keys:
- **Clerk**: Authentication keys from Clerk dashboard
- **Gemini API**: Google Cloud Console
- **Inngest**: Event and signing keys from Inngest dashboard

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Clerk](https://clerk.com/) for seamless authentication
- [Neon](https://neon.tech/) for serverless Postgres
- [Inngest](https://inngest.com/) for workflow management
- [Google Gemini](https://ai.google.dev/) for AI capabilities

## 📞 Support

If you have any questions or need help, please:

- Email: dasunathauda99@gmail.com

---

**Perfect for:** Job seekers, career changers, and professionals looking for AI-powered career guidance, resume optimization, and personalized skill development roadmaps! 🚀

Made with ❤️ by [Dasun Athauda](https://github.com/dasundu)

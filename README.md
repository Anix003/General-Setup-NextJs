# General Setup - Next.js with CSS

A production-ready Next.js 16 project template with Tailwind CSS 4, featuring a well-organized folder structure, comprehensive code quality tools, and best practices for scalable application development.

## 📁 Project Structure

```
├── app/                      # Next.js app directory
├── assets/                   # Static assets
│   ├── fonts/               # Custom fonts (bilmond, quera)
│   ├── icons/               # Icon files
│   ├── images/              # Image assets (home, shared)
│   ├── javascripts/         # JavaScript utilities
│   ├── json/                # JSON data files
│   ├── media/               # Audio and video files
│   └── stylesheets/         # CSS and SCSS files
├── components/              # React components
│   ├── layouts/            # Layout components
│   ├── sections/           # Page sections
│   ├── shared/             # Shared components (buttons, navbar, toasts, tooltips, utils)
│   └── ui/                 # UI components
├── context/                 # React context providers
├── data/                    # Data files (js, json)
├── hooks/                   # Custom React hooks
├── lib/                     # Library code and utilities
├── public/                  # Public static files
├── utils/                   # Utility functions
│   ├── services/           # API services
│   └── store/              # State management
└── wrappers/               # HOCs and wrappers
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Anix003/General-Setup-NextJs.git

# Navigate to project directory
cd General-Setup-NextJs

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Built With

- [Next.js 16.1.1](https://nextjs.org) - React framework with App Router
- [React 19.2.3](https://reactjs.org) - UI library
- [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- [@tailwindcss/postcss](https://tailwindcss.com/docs/using-postcss) - PostCSS integration

## 📝 Code Quality & Developer Tools

This project includes a complete development workflow setup:

- **ESLint** - Code linting with Next.js and Prettier integration
- **Prettier** - Code formatting with Tailwind CSS plugin
- **Husky** - Git hooks for automated quality checks
- **Commitlint** - Conventional commit message enforcement
- **Lint-staged** - Run linters on staged files before commit

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## ✨ Features

- ✅ Next.js 16 with App Router
- ✅ React 19 with latest features
- ✅ Tailwind CSS 4 for styling
- ✅ Pre-configured ESLint & Prettier
- ✅ Git hooks with Husky
- ✅ Conventional commits with Commitlint
- ✅ Organized folder structure
- ✅ Custom fonts support (Bilmond, Quera)
- ✅ Reusable component library
- ✅ Service layer for API calls
- ✅ State management setup
- ✅ Custom React hooks

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Anix003**

- GitHub: [@Anix003](https://github.com/Anix003)

# Homepage Demo - Professional Landing Page

A modern, responsive homepage built with Next.js 15 and Tailwind CSS, featuring a clean design optimized for conversion and user engagement.

## 🚀 Features

- **Modern Design**: Clean, professional landing page with hero section
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast loading
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component Architecture**: Modular component structure for maintainability
- **Content Management**: JSON-based content configuration for easy updates

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Development**: ESLint, Turbopack
- **Runtime**: React 19.1.0

## 📁 Project Structure

```
src/
├── @assets/          # Static assets (images, icons)
├── @components/      # Reusable UI components
│   ├── common/       # Shared components (Navbar, PromoBanner)
│   ├── Homepage/     # Homepage-specific components
│   ├── layout/       # Layout components
│   └── ui/          # Basic UI components (Button, etc.)
├── @contents/       # Content configuration (JSON files)
├── @hooks/          # Custom React hooks
├── @services/       # API and service functions
├── @stores/         # State management
├── @types/          # TypeScript type definitions
├── @utils/          # Utility functions
├── app/             # Next.js app directory
└── features/        # Feature-based components
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TanjilaShamima/homepage-demo.git
   cd homepage-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Content Updates

The homepage content is managed through JSON files in `src/@contents/`. You can easily update:

- Hero section text and features
- Call-to-action buttons
- Promotional banners
- Legal text and copyright information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors and themes in `tailwind.config.js`
- Component styles in individual component files
- Global styles in `src/app/globals.css`

## 🏗️ Component Architecture

The project follows a modular component architecture:

- **Layout Components**: Handle page structure and navigation
- **Feature Components**: Organize functionality by feature
- **UI Components**: Reusable basic components
- **Content Components**: Display dynamic content from JSON

## 📱 Responsive Design

The homepage is fully responsive and optimized for multiple breakpoints:

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop Small**: 1024px - 1279px
- **Desktop Medium**: 1280px - 1439px
- **Desktop Large**: 1440px - 1919px
- **Desktop Extra Large**: 1920px+

The design adapts seamlessly across all device sizes, ensuring optimal user experience on smartphones, tablets, and desktop computers.

## 🔧 Development

### Code Quality

- ESLint configuration for code quality
- TypeScript for type safety
- Prettier for code formatting

### Performance

- Next.js 15 with Turbopack for fast development
- Optimized images and assets
- Efficient component rendering

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 Author

**Tanjila Akter**
- Email: tanjila.cse.diu@gmail.com
- Website: https://tanjila-shamima.web.app/
- GitHub: https://github.com/TanjilaShamima/homepage-demo

## 🤝 Contributing

This is a demo project. For questions or feedback, please contact the author.

---

**Built with ❤️ using Next.js and Tailwind CSS**

# 🎓 College Explore - College Discovery Platform

A modern, interactive web application designed to help students explore and discover educational institutions across India. This platform provides comprehensive information about top colleges in various fields, rankings, placements, and student reviews.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.7-06B6D4?logo=tailwindcss)
![React Router](https://img.shields.io/badge/React%20Router-7.6.0-F44250)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [Available Scripts](#-available-scripts)
- [Project Pages](#-project-pages)
- [Components](#-components)
- [Data Structure](#-data-structure)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **College Exploration**: Browse through top colleges across different categories:
  - 🏗️ Engineering Colleges
  - 🏥 Medical Colleges
  - 💼 Management Colleges
  - 📚 Arts & Humanities Colleges

- **Rankings & Ratings**: View comprehensive college rankings with:
  - Overall rankings
  - Placement statistics
  - Academic excellence
  - Student reviews

- **College Comparison**: Compare multiple colleges side-by-side to make informed decisions

- **Placement Information**: Explore placement statistics and top-recruiting companies

- **Student Reviews**: Read authentic student reviews and experiences

- **Interactive UI**: 
  - Smooth animations with Framer Motion
  - Responsive design for all devices
  - College sliders for easy browsing
  - Goal-based college selection

- **College Advertisements**: Featured college information and links

---

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI library with latest features
- **Vite 6.3.5** - Lightning-fast build tool with HMR
- **React Router DOM 7.6.0** - Client-side routing

### Styling & Animation
- **Tailwind CSS 4.1.7** - Utility-first CSS framework
- **Framer Motion 12.12.1** - Smooth animations and transitions
- **React Icons 5.5.0** - Icon library

### Carousel
- **React Slick 0.30.3** - Carousel component
- **Slick Carousel 1.8.1** - Carousel library

### Development Tools
- **ESLint 9.25.0** - Code quality and consistency
- **PostCSS 8.5.3** - CSS transformation
- **Autoprefixer 10.4.21** - Vendor prefixes for CSS

---

## 📁 Project Structure

```
Collage-Explore-main/
├── public/                           # Static files
├── src/
│   ├── assets/                       # Static assets (images, fonts)
│   ├── components/                   # Reusable UI components
│   │   ├── CollegeAdBanner.jsx       # College advertisement banner
│   │   ├── Collegecard.jsx          # Individual college card
│   │   ├── CollegeList.jsx          # College list display
│   │   ├── CollegeRankingCard.jsx   # Ranking card component
│   │   ├── CollegeSlider.jsx        # Carousel slider for colleges
│   │   ├── GoalSelector.jsx         # Category/goal selection
│   │   ├── MultiCollegeBanner.jsx   # Multi-college banner
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── ScrollToTop.jsx           # Scroll to top button
│   │   └── TopCollegesList.jsx      # Display top colleges
│   ├── data/                         # College data files
│   │   ├── College.jsx              # College data structure
│   │   ├── artsHumanitiesColleges.js # Arts colleges data
│   │   ├── engineeringColleges.jsx  # Engineering colleges data
│   │   ├── managementColleges.jsx   # Management colleges data
│   │   ├── medicalColleges.jsx      # Medical colleges data
│   │   └── rankings.js              # Rankings data
│   ├── pages/                        # Page components
│   │   ├── Home.jsx                 # Home page
│   │   ├── TopColleges.jsx          # Top colleges listing page
│   │   ├── TopAcademics.jsx         # Academic excellence page
│   │   ├── TopPlacements.jsx        # Placement statistics page
│   │   ├── CategoryPage.jsx         # Category-specific page
│   │   ├── CollegeRankingPage.jsx   # Rankings page
│   │   ├── CollegeComparison.jsx    # College comparison page
│   │   ├── StudentReviews.jsx       # Student reviews page
│   │   ├── CourseCollegesPage.jsx   # Course-specific colleges
│   │   └── ArtsHumanitiesPage.jsx   # Arts colleges page
│   ├── App.jsx                       # Main app component with routing
│   ├── main.jsx                      # App entry point
│   └── index.css                     # Global styles
├── index.html                        # HTML template
├── package.json                      # Dependencies and scripts
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint configuration
└── README.md                         # This file
```

---

## ⚙️ Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Collage-Explore.git
   cd Collage-Explore-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

---

## 🚀 Running the Project

### Development Mode
Start the development server with Hot Module Reloading (HMR):
```bash
npm run dev
```
The application will be available at `http://localhost:5583` (or the next available port).

### Production Build
Create an optimized production build:
```bash
npm run build
```
This generates a `dist/` folder with optimized files for deployment.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Check code quality with ESLint:
```bash
npm run lint
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📄 Project Pages

### Home Page (`/`)
- Featured college slider
- Goal selector with category options
- Top colleges list
- College advertisement banners
- College ranking showcase
- College comparison section
- Student reviews section

### Top Colleges (`/top-colleges`)
- Comprehensive list of top-ranked colleges
- Detailed college information cards
- College rankings and statistics

### Top Academics (`/top-academics`)
- Colleges ranked by academic excellence
- Academic programs and specializations
- Faculty information

### Top Placements (`/top-placements`)
- Placement statistics and trends
- Top recruiting companies
- Package information
- Placement guarantee details

### College Rankings (`/colleges/:category`)
- Colleges filtered by category
- Category options:
  - Engineering
  - Medical
  - Management
  - Arts & Humanities
- Detailed ranking information

### College Comparison (`/colleges/comparison`)
- Side-by-side college comparison
- Multiple selection support
- Key metrics comparison

### Student Reviews
- Authentic student feedback
- Rating and reviews
- Experience sharing

---

## 🧩 Components

### Major Components:

- **Navbar** - Navigation menu with links to all pages
- **CollegeSlider** - Carousel for browsing colleges
- **GoalSelector** - Category selection interface
- **Collegecard** - Individual college information card
- **CollegeList** - List view of multiple colleges
- **CollegeRankingCard** - Ranking card with stats
- **CollegeAdBanner** - Promotional college banner
- **MultiCollegeBanner** - Multi-college hero banner
- **TopCollegesList** - Featured top colleges section
- **ScrollToTop** - Scroll to top utility button

---

## 📊 Data Structure

### College Object
```javascript
{
  name: "College Name",
  website: "https://www.college.edu",
  image: "https://image-url.jpg",
  ranking: 1,
  topPackage: "45 LPA",
  city: "City Name",
  type: "Government/Private",
  // Additional fields as needed
}
```

### Data Files:
- **engineeringColleges.jsx** - Engineering institutions data
- **medicalColleges.jsx** - Medical colleges data
- **managementColleges.jsx** - B-schools and management colleges
- **artsHumanitiesColleges.js** - Arts colleges data
- **rankings.js** - Overall rankings data

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)
- React plugin for JSX support
- Tailwind CSS integration
- Development server settings

### Tailwind CSS
- Configured with Vite plugin
- Utility-first styling approach
- Custom color schemes and animations

### ESLint Configuration
- React best practices
- React Hooks linting
- Code consistency checks

---

## 🌐 Routing Structure

```
/                    → Home page
/top-colleges        → All top colleges
/top-academics       → Academic rankings
/top-placements      → Placement statistics
/colleges/:category  → Colleges by category (engineering, medical, management, arts)
```

---

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px and above)
- 💻 Tablets (768px and above)
- 🖥️ Desktop (1024px and above)

---

## 🎨 Features Highlights

- **Smooth Animations** - All transitions powered by Framer Motion
- **Dark Mode Ready** - Easily configurable for dark theme
- **Fast Performance** - Optimized with Vite and code splitting
- **SEO Friendly** - Semantic HTML and proper meta tags
- **Accessibility** - ARIA labels and keyboard navigation support

---

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

---

## 📧 Contact & Support

For issues, questions, or suggestions:
- 📧 Email: support@collegeexplore.com
- 🐛 Report Issues: [GitHub Issues](#)
- 💬 Discussions: [GitHub Discussions](#)

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- React and Vite communities for excellent tools
- Tailwind CSS for amazing utility-first CSS
- Framer Motion for smooth animations
- All contributors and users

---

## 📈 Project Status

🟢 **Active Development** - Features and improvements are regularly added.

---

**Last Updated:** March 2026  
**Version:** 1.0.0

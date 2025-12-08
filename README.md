# Namaste React - Food Delivery App 🍔

A modern, feature-rich food delivery application built with React 18, TypeScript, and Tailwind CSS. This project demonstrates best practices in React development including custom hooks, lazy loading, dynamic routing, and responsive design.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

### 🔍 Smart Search & Filtering
- **Real-time Search**: Instantly find restaurants by name with debouncing
- **Rating Filter**: Filter restaurants with 4.0+ star ratings
- **Dynamic Updates**: Live filtering without page reloads
- **Search History**: Recent searches stored locally

### 🏪 Restaurant Browsing
- **Card Layout**: Beautiful restaurant cards with images
- **Key Information**: Display ratings, cuisines, and delivery times
- **Responsive Grid**: Adapts to different screen sizes

### 🍕 Restaurant Details
- **Menu Pages**: View detailed restaurant information
- **Menu Items**: Browse complete menu with item details
- **Dynamic Routes**: Clean URLs for each restaurant

### 🎨 Modern UI/UX
- **Tailwind CSS**: Clean, utility-first styling
- **Shimmer Effects**: Elegant loading states
- **Pink Theme**: Eye-catching color scheme
- **Responsive Design**: Mobile-friendly interface

### ⚡ Performance Optimizations
- **Lazy Loading**: Code-splitting for faster initial load
- **Custom Hooks**: Reusable logic for better performance
- **Efficient Rendering**: Optimized component updates

### 🌐 Additional Features
- **Online Status Indicator**: Real-time connectivity monitoring
- **Error Handling**: Comprehensive error boundaries
- **React Router**: Smooth client-side navigation
- **TypeScript**: Type-safe development

## 🛠️ Tech Stack

### Core Technologies
- **React 18.2.0** - Modern React with hooks and Suspense
- **TypeScript 5.0** - Type-safe JavaScript development
- **Tailwind CSS v3** - Utility-first CSS framework for rapid UI development

### Routing & State
- **React Router DOM v6.30** - Client-side routing
- **React Hooks** - useState, useEffect, useParams, custom hooks

### Build Tools
- **Parcel v2.10** - Zero-config bundler
- **PostCSS** - CSS processing
- **@tailwindcss/postcss** - Tailwind CSS integration

### Development
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd "Namaste react"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:1234
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 📁 Project Structure

```
Namaste react/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Body.tsx                # Main restaurant list
│   │   ├── RestraurentsContainers.tsx  # Restaurant cards
│   │   ├── RestraurentsMenu.tsx    # Restaurant detail page
│   │   ├── shimmer.tsx             # Loading shimmer effect
│   │   ├── About.tsx               # About page
│   │   ├── Contact.tsx             # Contact page
│   │   ├── Error.tsx               # Error boundary
│   │   ├── User.tsx                # Functional component demo
│   │   ├── UserClass.tsx           # Class component demo
│   │   └── Grocery.tsx             # Lazy-loaded component
│   ├── utils/
│   │   ├── constants.tsx           # App constants
│   │   ├── useRestrauntsMenu.tsx   # Custom hook for menu data
│   │   └── useOnlineStatus.tsx     # Custom hook for online status
│   └── App.tsx                     # Main app with routing
├── style.css                       # Global styles with Tailwind
├── index.html                      # HTML entry point
├── tailwind.config.tsx             # Tailwind configuration
├── .postcssrc                      # PostCSS configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🎯 Key Concepts Demonstrated

### React Fundamentals
- ✅ Functional Components
- ✅ Class Components (with lifecycle methods)
- ✅ Props and State Management
- ✅ Event Handling
- ✅ Conditional Rendering

### Advanced React
- ✅ Custom Hooks (`useRestrauntsMenu`, `useOnlineStatus`)
- ✅ React Router (Dynamic Routes, Nested Routes)
- ✅ Lazy Loading with `React.lazy()` and `Suspense`
- ✅ Error Boundaries
- ✅ Component Lifecycle (Class Components)

### Modern Development
- ✅ TypeScript Integration
- ✅ Tailwind CSS Utility Classes
- ✅ API Integration
- ✅ Parcel Bundler
- ✅ Code Splitting

## 🌐 API Integration

The app uses the **FoodFire API** for restaurant data:

- **Restaurant List**: `https://foodfire.onrender.com/api/restaurants`
- **Restaurant Menu**: `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId={resId}`

## 🎨 Tailwind CSS Setup

This project uses **Tailwind CSS v4** with the new `@tailwindcss/postcss` plugin:

### Configuration Files
- `tailwind.config.tsx` - Content paths and theme configuration
- `.postcssrc` - PostCSS plugin setup
- `style.css` - Tailwind directives and custom CSS

### Key Tailwind Features Used
- Flexbox utilities (`flex`, `justify-between`, `items-center`)
- Spacing (`p-4`, `m-4`, `gap-6`)
- Colors (`bg-pink-200`, `hover:bg-pink-300`)
- Shadows (`shadow-lg`)
- Borders (`border`, `rounded`)
- Responsive design utilities

## 📝 Available Scripts

```json
{
  "start": "parcel index.html",
  "build": "parcel build index.html",
  "test": "jest"
}
```

## 🐛 Known Issues & Solutions

### Tailwind Classes Not Working
- Ensure `.postcssrc` has `@tailwindcss/postcss` plugin
- Clear Parcel cache: `rm -rf .parcel-cache dist`
- Restart dev server

### Logo Size Issues
- Remove inline styles that override Tailwind classes
- Use Tailwind utilities like `w-12 h-12`

### API Errors
- Check browser console for detailed error messages
- Verify network connectivity
- API might be slow on first request (hosted on free tier)

## 🔮 Future Enhancements

- [x] Shopping cart functionality (in progress)
- [x] User authentication (planned)
- [ ] Order placement
- [ ] Payment integration
- [ ] Restaurant reviews and ratings
- [ ] Favorites/Wishlist
- [ ] Filter by cuisine type
- [ ] Sort by delivery time/rating
- [ ] Dark mode
- [ ] Progressive Web App (PWA)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Deven Puri**
- GitHub: [@Deven-puri](https://github.com/Deven-puri)
- Project: [Food-Villa](https://github.com/Deven-puri/Food-Villa)

Built with ❤️ as part of the Namaste React learning journey.

## 🙏 Acknowledgments

- **Namaste React Course** - For the excellent React training
- **FoodFire API** - For providing restaurant data
- **React Team** - For the amazing library
- **Tailwind CSS Team** - For the utility-first CSS framework

---

**Happy Coding! 
# Development Progress

This project was developed progressively from November to December 2025.

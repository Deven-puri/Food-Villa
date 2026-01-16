# Namaste React - Food Delivery App 🍔
# https://food-villa-lovat.vercel.app/

Hey there! Welcome to my food delivery app project. I built this while learning React, and it's been quite a journey! This isn't just another tutorial project - I've packed it with real-world features like Redux state management, comprehensive testing, and a fully responsive design that works great on mobile.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)
![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9-764ABC?style=flat&logo=redux)
![Jest](https://img.shields.io/badge/Jest-Testing-C21325?style=flat&logo=jest)

## ✨ What Makes This Project Special

###  Smart Search & Filtering
I've implemented a really smooth search experience - you can find any restaurant instantly, and there's even a filter to show only the top-rated places (4.0+ stars). Everything updates in real-time without any annoying page reloads!

###  Shopping Cart with Redux
This was a game-changer for me! I integrated Redux Toolkit to manage the cart state, so you can add items from different restaurants, see your cart count in the header, and clear everything with one click. It's all type-safe with TypeScript too.

###  Tested & Reliable
I wrote comprehensive tests using Jest and React Testing Library. There are 19 passing tests covering all major components - Contact, Header, Body, Cart, About, and more. This ensures everything works as expected!

###  Restaurant Browsing
The restaurant cards look great and show all the important info - ratings, cuisines, delivery times. I designed them to work on any screen size, from mobile phones to large desktops.

###  Detailed Menu Pages
Each restaurant has its own page with an accordion-style menu. You can expand categories to see items, and there's an "Add" button right next to each dish to quickly add it to your cart.

###  Responsive Design That Actually Works
I spent time making sure this app looks good on mobile devices. The header adapts to smaller screens, the navigation is touch-friendly, and everything scales properly. Try resizing your browser - it's pretty cool!

###  Performance Optimizations
- **Lazy Loading**: The Grocery component loads only when you need it
- **Custom Hooks**: I created reusable hooks for fetching restaurant data and checking online status
- **Efficient Rendering**: Components only re-render when necessary

###  Other Cool Features
- **Online Status Indicator**: Shows if you're connected to the internet
- **Error Handling**: Custom error pages when something goes wrong
- **Clean URLs**: Using React Router for smooth navigation between pages
- **TypeScript**: Caught so many bugs before they became problems!

##  Tech Stack

### Core Technologies
- **React 18.2.0** - Using modern hooks, Suspense, and functional components
- **TypeScript 5.0** - Because I like catching errors before they happen!
- **Tailwind CSS v3** - Makes styling so much faster with utility classes

### State Management & Routing
- **Redux Toolkit** - Managing cart state across the entire app
- **react-redux** - Connecting Redux store to React components
- **React Router DOM v6.30** - Handling all the navigation between pages
- **Custom Hooks** - Built my own hooks for restaurant data and online status

### Testing
- **Jest** - Test runner with great developer experience
- **@testing-library/react** - Testing components the way users interact with them
- **@testing-library/jest-dom** - Extra matchers for better assertions
- **Babel Presets** - For transpiling JSX and TypeScript in tests

### Build Tools
- **Parcel v2.10** - Zero-config bundler (so easy to use!)
- **PostCSS** - CSS processing
- **@tailwindcss/postcss** - Integrates Tailwind with the build process

### Development Tools
- **ESLint** - Keeps my code clean and consistent
- **TypeScript Compiler** - Type checking everything

### Redux Toolkit Setup (What I Learned)
1. Installed `@reduxjs/toolkit` and `react-redux`
2. Created a store using `configureStore`
3. Built a `cartSlice` with actions: `addItem`, `removeItem`, and `clearCart`
4. Connected the store to my app with the `Provider` component
5. Used `useDispatch` to trigger actions and `useSelector` to read state
6. Made the cart work across all components!

## 🚀 Getting Started

Want to run this project locally? It's super easy!

### Prerequisites
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. **Clone this repository**
```bash
git clone https://github.com/Deven-puri/Food-Villa.git
cd "Namaste react"
```

2. **Install all the dependencies**
```bash
npm install
```
This will install React, Redux, Tailwind, Jest, and everything else needed.

3. **Start the development server**
```bash
npm start
```
Parcel will start the server and open your browser automatically!

4. **Check it out**
```
http://localhost:1234
```

### Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder. You can deploy this to any static hosting service like Netlify, Vercel, or GitHub Pages.

### Running Tests

I wrote tests for all the major components. To run them:

```bash
npm test
```

You should see all 19 tests passing! ✅

## 📁 Project Structure

Here's how I organized everything:

```
Namaste react/
├── src/
│   ├── components/
│   │   ├── Header.tsx                    # Navigation bar with cart count
│   │   ├── Body.tsx                      # Main page with restaurant list
│   │   ├── RestraurentsContainers.tsx    # Individual restaurant cards
│   │   ├── RestraurentsMenu.tsx          # Restaurant detail page with menu
│   │   ├── RestraurentsCategories.tsx    # Accordion menu categories with Add buttons
│   │   ├── Cart.tsx                      # Shopping cart page (Redux connected)
│   │   ├── shimmer.tsx                   # Shimmer loading effect
│   │   ├── About.tsx                     # About page (responsive design)
│   │   ├── Contact.tsx                   # Contact form (responsive)
│   │   ├── Error.tsx                     # Error page
│   │   ├── User.tsx                      # Functional component example
│   │   ├── UserClass.tsx                 # Class component example
│   │   ├── Grocery.tsx                   # Lazy-loaded grocery component
│   │   └── __test__/                     # All component tests live here
│   │       ├── Cart.test.tsx
│   │       ├── Header.test.tsx
│   │       ├── About.test.tsx
│   │       ├── Contact.test.tsx
│   │       ├── Body.test.tsx
│   │       └── Grocery.test.tsx
│   ├── utils/
│   │   ├── constants.tsx                 # API URLs and constants
│   │   ├── useRestrauntsMenu.tsx         # Custom hook for fetching menu data
│   │   ├── useOnlineStatus.tsx           # Custom hook for online/offline status
│   │   ├── CartSlice.tsx                 # Redux slice for cart management
│   │   ├── appStore.tsx                  # Redux store configuration
│   │   └── UserContext.tsx               # React Context for user data
│   └── App.tsx                           # Main app with routes and Redux Provider
├── style.css                             # Tailwind directives and global styles
├── index.html                            # HTML entry point
├── tailwind.config.tsx                   # Tailwind configuration
├── .postcssrc                            # PostCSS configuration
├── .babelrc                              # Babel configuration for tests
├── jest.config.ts                        # Jest testing configuration
├── package.json                          # Dependencies and scripts
└── README.md                             # You are here!
```

## 🎯 What I Learned Building This

### React Fundamentals (The Basics)
-  **Functional Components** - Everything is a function component (modern React way)
-  **Class Components** - Still using them in UserClass to understand lifecycle methods
-  **Props and State** - Passing data down and managing local state with useState
-  **Event Handling** - Click handlers, form inputs, and user interactions
-  **Conditional Rendering** - Showing/hiding elements based on state

### Advanced React (The Fun Stuff)
-  **Custom Hooks** - Built `useRestrauntsMenu` and `useOnlineStatus` from scratch
-  **React Router** - Dynamic routes for each restaurant, nested routes for menus
-  **Lazy Loading** - Code splitting with `React.lazy()` and `Suspense`
-  **Context API** - UserContext for sharing user data across components
-  **Redux Toolkit** - State management for the shopping cart
-  **Error Boundaries** - Catching errors gracefully

### Testing (Making Sure It Works)
-  **Unit Testing** - Testing individual components in isolation
-  **Integration Testing** - Testing how components work together
-  **Jest & React Testing Library** - Writing tests that actually make sense
-  **Mocking** - Mocking fetch calls and Redux store in tests
-  **Test Coverage** - 65% statement coverage and growing!

### Modern Development Practices
-  **TypeScript** - Type safety everywhere
-  **Tailwind CSS** - Utility-first styling (so much faster than writing CSS!)
-  **API Integration** - Fetching real restaurant data
-  **Responsive Design** - Works on mobile, tablet, and desktop
-  **Code Splitting** - Smaller bundles, faster load times

##  API Integration

I'm using the **FoodFire API** for all the restaurant data. It's pretty cool - it gives me real restaurant info, menus, ratings, and images!

**Endpoints I'm using:**
- **Restaurant List**: `https://foodfire.onrender.com/api/restaurants`
- **Restaurant Menu**: `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId={resId}`

**Note:** The API is hosted on a free tier, so the first request might take a few seconds to wake up the server. Be patient! 

##  Tailwind CSS Setup

Styling this app was a breeze with **Tailwind CSS v3**! Here's how I set it up:

### Configuration Files
- `tailwind.config.js` - Tells Tailwind where to look for classes
- `.postcssrc` - Connects PostCSS with Tailwind
- `style.css` - The main file with Tailwind directives

### My Favorite Tailwind Features I Used
- **Flexbox utilities** - `flex`, `justify-between`, `items-center` (makes layouts so easy!)
- **Spacing** - `p-4`, `m-4`, `gap-6` (consistent spacing everywhere)
- **Colors** - `bg-pink-200`, `hover:bg-pink-300` (that pink theme 💗)
- **Sizing** - `w-12`, `h-12` (precise control over dimensions)
- **Shadows** - `shadow-lg` (adds depth to cards)
- **Borders** - `border`, `rounded` (smooth, rounded corners)
- **Responsive Design** - `sm:`, `md:`, `lg:` breakpoints (mobile-first approach!)
- **Hover Effects** - `hover:bg-pink-300` (interactive UI elements)

## 📝 Available Scripts

Here are the npm scripts you can use:

```bash
# Start the development server (with hot reload)
npm start

# Build for production (optimized bundle)
npm run build

# Run all tests
npm test

# Run tests in watch mode (great for development)
npm test -- --watch
```

## 🐛 Troubleshooting

Ran into issues? Here are some problems I encountered and how I fixed them:

### Tailwind Classes Not Working?
1. Make sure `.postcssrc` has the `@tailwindcss/postcss` plugin
2. Clear Parcel's cache: `rm -rf .parcel-cache dist`
3. Restart the dev server with `npm start`

### Logo or Images Too Big/Small?
- Remove any inline styles that might override Tailwind
- Use Tailwind utilities like `w-12 h-12` instead

### Testing Setup (This took me a while!)
Here's what I learned about testing React apps:

**Types of Testing:**
- **Unit Testing** - Testing components in isolation (what I mostly did)
- **Integration Testing** - Testing how multiple components work together
- **End to End Testing** - Testing the entire app flow (using tools like Puppeteer)

**My Testing Setup Process:**
1. Installed Jest with `npm init jest@latest`
2. Installed `@testing-library/react` and `@testing-library/jest-dom`
3. Installed Babel presets for JSX/TypeScript support
4. Created `.babelrc` with the right presets
5. Configured `jest.config.ts` with jsdom environment
6. Started writing tests! 🎉

### API Not Loading?
- Check the browser console for error messages
- Make sure you're connected to the internet
- The API might take 10-15 seconds on the first request (it's on a free hosting tier)
- If it keeps failing, the API server might be down

### Tests Failing?
- Make sure you've mocked any external API calls
- Check that fetch is mocked for components that use it
- Wrap components in the right providers (Redux Provider, BrowserRouter, etc.)

## 🔮 Future Enhancements

I have some exciting ideas for what's next:

**Completed:**
- [x] Redux state management for cart
- [x] Comprehensive testing suite
- [x] Fully responsive design
- [x] Empty cart state handling

**Coming Soon:**
- [ ] User authentication (login/signup)
- [ ] Order placement functionality
- [ ] Payment integration (maybe Stripe?)
- [ ] User reviews and ratings system
- [ ] Favorites/Wishlist feature
- [ ] Filter by cuisine type
- [ ] Sort by delivery time/rating/cost
- [ ] Dark mode toggle 🌙
- [ ] Convert to Progressive Web App (PWA)
- [ ] Add more tests (aiming for 80%+ coverage)
- [ ] Order history page
- [ ] Real-time order tracking

## 🤝 Contributing

Found a bug? Have a cool feature idea? Feel free to:
1. Fork this repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

I'd love to see what you come up with!

## update:
- changed the navbar size
- remove the unused 
- responsive navbar
- updated cart 
- updated search

## 👨‍💻 About Me

**Deven Puri**

I built this project while learning React, and it's been an incredible journey! From struggling with basic components to implementing Redux and writing tests - I've learned so much.

- 📧 Email: devenpuri03@gmail.com
- 📱 Phone: 9858909858
- 🐙 GitHub: [@Deven-puri](https://github.com/Deven-puri)
- 📍 Location: Delhi, India

Feel free to reach out if you have questions or just want to chat about React!

**Built with ❤️ and lots of ☕ as part of the Namaste React learning journey.**

## 🙏 Acknowledgments

Big thanks to:

- **Akshay Saini & Namaste React** - For the amazing React course that made all this possible and for understanding react in such a easy way

---


**Happy Coding! 🚀**

*If you found this project helpful, give it a ⭐ on GitHub!*

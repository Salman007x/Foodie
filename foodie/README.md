# 🍔 Foodie - Modern Food Delivery App

A modern, responsive food delivery application built with React. Order delicious meals from the best restaurants and get them delivered straight to your doorstep.

![React](https://img.shields.io/badge/React-19.2.3-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

## ✨ Features

- 🎨 **Modern UI/UX**: Beautiful gradient designs with smooth animations
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🔍 **Smart Search**: Filter and search through menu items instantly
- 🛒 **Shopping Cart**: Add items to cart with quantity management
- ♿ **Accessible**: Built with ARIA labels and keyboard navigation support
- 🚀 **Performance Optimized**: Lazy loading and code splitting for faster load times
- 💾 **Persistent Cart**: Cart data saved to localStorage
- 🎭 **Error Boundaries**: Graceful error handling with user-friendly messages

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/foodie.git
cd foodie
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Runs ESLint to check code quality and identify potential issues.

### `npm run format`

Formats code using Prettier for consistent code style.

## 🏗️ Project Structure

```
foodie/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Card.js          # Reusable food item card
│   │   ├── Footer.js        # Footer component
│   │   ├── Navbar.js        # Navigation bar
│   │   └── Dummy.js         # Placeholder component
│   ├── screens/
│   │   ├── Home.js          # Home page with hero slider
│   │   ├── Login.js         # Login/Signup page
│   │   ├── Menu.js          # Menu page with filters
│   │   └── About.js         # About page
│   ├── context/
│   │   └── CartContext.js   # Shopping cart state management
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   ├── useDebounce.js
│   │   └── useWindowSize.js
│   ├── constants/
│   │   ├── config.js        # App configuration
│   │   └── menuData.js      # Menu items data
│   ├── App.js               # Main app component with routing
│   ├── App.css              # Global styles
│   ├── index.js             # App entry point
│   └── index.css            # Global CSS
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Context API** - State management
- **PropTypes** - Type checking
- **LocalStorage** - Persistent cart storage
- **CSS3** - Modern styling with gradients and animations

## 🎨 Features in Detail

### Shopping Cart
- Add items with custom quantities
- Update quantities dynamically
- Remove items
- Persistent storage using localStorage
- Real-time total calculation

### Menu System
- Category-based filtering
- Real-time search functionality
- Responsive grid layout
- High-quality food images

### Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML structure

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Author

Your Name - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons and emojis for visual enhancement
- React community for amazing tools and libraries

---

Made with ❤️ using React

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

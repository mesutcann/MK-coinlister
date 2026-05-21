# CoinList - Cryptocurrency Dashboard

A professional cryptocurrency dashboard built with React and Tailwind CSS. Track real-time crypto prices, read the latest news, and manage your personal watchlist.
ccc
![CoinList](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- **Real-Time Market Data**: Track live cryptocurrency prices, market caps, and 24-hour changes
- **Crypto News**: Stay updated with the latest news from trusted cryptocurrency sources
- **Watchlist Management**: Create and manage your personal watchlist of favorite cryptocurrencies
- **Exchange Information**: Browse and explore top cryptocurrency exchanges
- **Dark Mode**: Beautiful dark/light theme toggle with persistent preferences
- **User Authentication**: Login/Signup functionality with profile management
- **Responsive Design**: Fully responsive UI that works on all devices
- **Search & Filter**: Advanced search and filtering options for coins
- **Pagination**: Efficient pagination for large datasets
c
## 📋 Table of Contents
................
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory**:
   ```bash
   cd coinlist-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   
   The `.env` file is already created with API keys. If you need to update them:
   ```env
   REACT_APP_COINGECKO_API_KEY=your_coingecko_api_key
   REACT_APP_NEWS_API_KEY=your_news_api_key
   ```

## ⚙️ Configuration

### API Keys

The project uses two APIs:

1. **CoinGecko API**: For cryptocurrency market data
   - Already configured in `.env`
   - Free tier available at [CoinGecko](https://www.coingecko.com/en/api)

2. **NewsAPI**: For cryptocurrency news
   - Already configured in `.env`
   - Free tier available at [NewsAPI](https://newsapi.org/)

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with:
- Dark mode support (class-based)
- Custom color palette
- Responsive breakpoints

## 🚀 Running the App

### Development Mode

Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Production Build

Create an optimized production build:

```bash
npm run build
```
xxxxxxxxxxxxxxxxx
The build folder will contain the production-ready files.

### Run Tests

Execute the test suite:

```bash
npm test
```

## 📁 Project Structure

```
coinlist-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── api/
│   │   ├── coingecko.js       # CoinGecko API integration
│   │   └── newsapi.js          # NewsAPI integration
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer component
│   │   ├── CoinTable.jsx       # Cryptocurrency table
│   │   ├── NewsCard.jsx        # News article card
│   │   └── ThemeToggle.jsx     # Theme switcher
│   ├── context/
│   │   ├── ThemeContext.jsx    # Theme state management
│   │   ├── WatchlistContext.jsx # Watchlist state
│   │   └── UserContext.jsx     # User authentication state
│   ├── pages/
│   │   ├── Home.jsx            # Home page with coin table
│   │   ├── News.jsx            # News page
│   │   ├── About.jsx           # About page
│   │   ├── Exchange.jsx        # Exchanges page
│   │   ├── Subscribe.jsx       # Newsletter subscription
│   │   ├── Login.jsx           # Login page
│   │   ├── Signup.jsx          # Signup page
│   │   ├── Watchlist.jsx       # User watchlist
│   │   └── UserProfile.jsx     # User profile & settings
│   ├── tests/
│   │   ├── CoinTable.test.jsx
│   │   ├── NewsCard.test.jsx
│   │   └── ThemeToggle.test.jsx
│   ├── App.jsx                 # Main app component
│   ├── index.js                # Entry point
│   ├── index.css               # Global styles
│   └── setupTests.js           # Test configuration
├── .env                        # Environment variables
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App (one-way operation) |

## 🛠️ Technologies Used

### Frontend
- **React 18.2.0** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### State Management
- **React Context API** - Global state management for:
  - Theme (light/dark mode)
  - Watchlist
  - User authentication

### APIs
- **CoinGecko API** - Cryptocurrency market data
- **NewsAPI** - Cryptocurrency news articles

### Testing
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

### Development Tools
- **Create React App** - Build tooling
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🔌 API Integration

### CoinGecko API

The app uses the following CoinGecko endpoints:

- `/coins/markets` - Get market data for cryptocurrencies
- `/coins/{id}` - Get detailed coin information
- `/exchanges` - Get list of exchanges
- `/search` - Search for coins
- `/search/trending` - Get trending coins

### NewsAPI

The app uses the following NewsAPI endpoints:

- `/everything` - Get all crypto-related news
- `/top-headlines` - Get top crypto headlines

## 🧪 Testing

The project includes comprehensive tests for key components:

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Files

- `CoinTable.test.jsx` - Tests for coin table component
- `NewsCard.test.jsx` - Tests for news card component
- `ThemeToggle.test.jsx` - Tests for theme toggle functionality

## 🎨 Features in Detail

### Home Page
- Displays top 50 cryptocurrencies with pagination
- Search functionality to find specific coins
- Filter buttons for sorting by market cap, price, volume, and 24h change
- Top news section with latest crypto news
- Add/remove coins to watchlist

### News Page
- Displays cryptocurrency news articles
- Pagination for browsing multiple pages
- Click on any article to read the full story
- Responsive card layout

### Watchlist
- View all your saved cryptocurrencies
- Real-time price updates
- Remove coins from watchlist
- Clear all watchlist items

### Exchange Page
- Browse top cryptocurrency exchanges
- View trust scores and trading volumes
- Filter and search exchanges
- Direct links to exchange websites

### User Profile
- Edit profile information
- View account statistics
- Manage watchlist
- Theme preferences
- Logout functionality

### Theme Toggle
- Switch between light and dark modes
- Preferences saved to localStorage
- Smooth transitions between themes

## 🔒 Authentication

The app includes a mock authentication system using localStorage. In a production environment, you would replace this with a real backend API.

Features:
- Login with email/password
- Signup with name, email, and password
- Form validation
- Protected routes
- User profile management

## 📱 Responsive Design

The app is fully responsive and works seamlessly on:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🚀 Deployment

To deploy the app:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static hosting service

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ by the CoinList Team

## 🙏 Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for providing cryptocurrency data
- [NewsAPI](https://newsapi.org/) for news articles
- [Tailwind CSS](https://tailwindcss.com/) for the amazing CSS framework
- [React](https://reactjs.org/) for the powerful UI library

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us via email
- Check the documentation

---

**Happy Coding! 🚀**

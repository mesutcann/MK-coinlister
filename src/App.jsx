import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { WatchlistProvider } from "./context/WatchlistContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Exchange from "./pages/Exchange";
import Subscribe from "./pages/Subscribe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Watchlist from "./pages/Watchlist";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <WatchlistProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/exchange" element={<Exchange />} />
                  <Route path="/subscribe" element={<Subscribe />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/watchlist" element={<Watchlist />} />
                  <Route path="/profile" element={<UserProfile />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </WatchlistProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

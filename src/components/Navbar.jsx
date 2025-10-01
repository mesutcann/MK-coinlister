import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useContext(UserContext);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => {
    return `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path)
        ? "bg-primary-600 text-white"
        : "text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-gray-700"
    }`;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">₿</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              CoinList
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/news" className={linkClass("/news")}>
              News
            </Link>
            <Link to="/exchange" className={linkClass("/exchange")}>
              Exchange
            </Link>
            <Link to="/watchlist" className={linkClass("/watchlist")}>
              Watchlist
            </Link>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link to="/subscribe" className={linkClass("/subscribe")}>
              Subscribe
            </Link>
          </div>

          {/* Right side - Auth & Theme */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/profile"
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                    <span className="hidden sm:inline">
                      {user?.name || "Profile"}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-3 space-y-1">
          <Link to="/" className={`block ${linkClass("/")}`}>
            Home
          </Link>
          <Link to="/news" className={`block ${linkClass("/news")}`}>
            News
          </Link>
          <Link to="/exchange" className={`block ${linkClass("/exchange")}`}>
            Exchange
          </Link>
          <Link to="/watchlist" className={`block ${linkClass("/watchlist")}`}>
            Watchlist
          </Link>
          <Link to="/about" className={`block ${linkClass("/about")}`}>
            About
          </Link>
          <Link to="/subscribe" className={`block ${linkClass("/subscribe")}`}>
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}

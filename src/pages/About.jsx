export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About CoinList
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your professional cryptocurrency dashboard
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
          {/* About Me Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              About the Project
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              CoinList is a modern, professional cryptocurrency dashboard designed to help users 
              track real-time cryptocurrency prices, read the latest crypto news, and manage their 
              personal watchlists. Built with a focus on user experience and performance, CoinList 
              provides a seamless way to stay informed about the ever-changing crypto market.
            </p>
          </section>

          {/* Purpose Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Project Purpose
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The purpose of CoinList is to provide cryptocurrency enthusiasts, traders, and 
              investors with a centralized platform where they can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Monitor real-time cryptocurrency prices and market data</li>
              <li>Stay updated with the latest crypto news from trusted sources</li>
              <li>Create and manage personalized watchlists</li>
              <li>Access information about major cryptocurrency exchanges</li>
              <li>Enjoy a beautiful, responsive interface with dark mode support</li>
            </ul>
          </section>

          {/* Technologies Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies Used
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Frontend
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• React 18</li>
                  <li>• React Router v6</li>
                  <li>• React Context API</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  APIs & Data
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• CoinGecko API</li>
                  <li>• NewsAPI</li>
                  <li>• Axios</li>
                  <li>• LocalStorage</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Testing
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Jest</li>
                  <li>• React Testing Library</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Features
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Dark Mode</li>
                  <li>• Responsive Design</li>
                  <li>• Real-time Data</li>
                  <li>• Watchlist Management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-600 text-white">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Real-Time Market Data
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Track live prices, market caps, and 24-hour changes for top cryptocurrencies
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-600 text-white">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Latest Crypto News
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Stay informed with curated news articles from top cryptocurrency sources
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-600 text-white">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Personal Watchlist
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Create and manage your own watchlist to track your favorite cryptocurrencies
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Links Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Connect With Us
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

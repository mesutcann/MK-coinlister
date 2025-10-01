import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCoins } from "../api/coingecko";
import { fetchTopHeadlines } from "../api/newsapi";
import CoinTable from "../components/CoinTable";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsLoading, setNewsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("market_cap");

  useEffect(() => {
    loadCoins();
    loadNews();
  }, [currentPage]);

  useEffect(() => {
    filterAndSortCoins();
  }, [coins, searchQuery, sortBy]);

  const loadCoins = async () => {
    try {
      setLoading(true);
      const data = await fetchCoins(currentPage, 50);
      setCoins(data);
    } catch (error) {
      console.error("Failed to load coins:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadNews = async () => {
    try {
      setNewsLoading(true);
      const data = await fetchTopHeadlines(6);
      setNews(data.articles || []);
    } catch (error) {
      console.error("Failed to load news:", error);
    } finally {
      setNewsLoading(false);
    }
  };

  const filterAndSortCoins = () => {
    let filtered = [...coins];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return b.current_price - a.current_price;
        case "market_cap":
          return b.market_cap - a.market_cap;
        case "volume":
          return b.total_volume - a.total_volume;
        case "change":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        default:
          return 0;
      }
    });

    setFilteredCoins(filtered);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cryptocurrency Market Overview
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Track real-time prices, market caps, and 24h changes for top cryptocurrencies
          </p>
        </div>

        {/* Top News Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Latest Crypto News
            </h2>
            <button
              onClick={() => navigate("/news")}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              All News
            </button>
          </div>
          {newsLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(0, 3).map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          )}
        </div>

        {/* Coin Table Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Top Cryptocurrencies
          </h2>

          {/* Search and Filter Controls */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search coins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sort Buttons */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSortBy("market_cap")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  sortBy === "market_cap"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Market Cap
              </button>
              <button
                onClick={() => setSortBy("price")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  sortBy === "price"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Price
              </button>
              <button
                onClick={() => setSortBy("volume")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  sortBy === "volume"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Volume
              </button>
              <button
                onClick={() => setSortBy("change")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  sortBy === "change"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                24h Change
              </button>
            </div>
          </div>

          {/* Coin Table */}
          <CoinTable coins={filteredCoins} loading={loading} />

          {/* Pagination */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-900 dark:text-white font-medium">
              Page {currentPage}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>

        {/* Bottom News Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            More Crypto News
          </h2>
          {newsLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(3, 6).map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

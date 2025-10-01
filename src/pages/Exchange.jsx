import { useState, useEffect } from "react";
import { fetchExchanges } from "../api/coingecko";

export default function Exchange() {
  const [exchanges, setExchanges] = useState([]);
  const [filteredExchanges, setFilteredExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadExchanges();
  }, [currentPage]);

  useEffect(() => {
    filterExchanges();
  }, [exchanges, searchQuery]);

  const loadExchanges = async () => {
    try {
      setLoading(true);
      const data = await fetchExchanges(currentPage, 50);
      setExchanges(data);
    } catch (error) {
      console.error("Failed to load exchanges:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterExchanges = () => {
    if (searchQuery) {
      const filtered = exchanges.filter((exchange) =>
        exchange.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredExchanges(filtered);
    } else {
      setFilteredExchanges(exchanges);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatNumber = (num) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cryptocurrency Exchanges
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore top cryptocurrency exchanges and their trading volumes
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search exchanges..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <>
            {/* Exchanges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredExchanges.map((exchange) => (
                <div
                  key={exchange.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  {/* Exchange Header */}
                  <div className="flex items-center mb-4">
                    <img
                      src={exchange.image}
                      alt={exchange.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exchange.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Rank #{exchange.trust_score_rank || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Exchange Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        24h Volume (BTC)
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {exchange.trade_volume_24h_btc
                          ? exchange.trade_volume_24h_btc.toFixed(2)
                          : "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Trust Score
                      </span>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(10)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < (exchange.trust_score || 0)
                                  ? "text-yellow-400"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Year Established
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {exchange.year_established || "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Country
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {exchange.country || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Visit Exchange Button */}
                  {exchange.url && (
                    <a
                      href={exchange.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block w-full text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                    >
                      Visit Exchange
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
              >
                Previous
              </button>
              <span className="text-gray-900 dark:text-white font-medium">
                Page {currentPage}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && filteredExchanges.length === 0 && (
          <div className="text-center py-20">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              No exchanges found
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Try adjusting your search query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

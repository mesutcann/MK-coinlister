import { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (coin) => {
    setWatchlist(prev => {
      const exists = prev.find(item => item.id === coin.id);
      if (exists) return prev;
      return [...prev, coin];
    });
  };

  const removeFromWatchlist = (coinId) => {
    setWatchlist(prev => prev.filter(coin => coin.id !== coinId));
  };

  const isInWatchlist = (coinId) => {
    return watchlist.some(coin => coin.id === coinId);
  };

  const clearWatchlist = () => {
    setWatchlist([]);
  };

  return (
    <WatchlistContext.Provider value={{ 
      watchlist, 
      addToWatchlist, 
      removeFromWatchlist, 
      isInWatchlist,
      clearWatchlist 
    }}>
      {children}
    </WatchlistContext.Provider>
  );
}

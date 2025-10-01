import { render, screen, fireEvent } from '@testing-library/react';
import { WatchlistContext } from '../context/WatchlistContext';
import CoinTable from '../components/CoinTable';

const mockCoins = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'btc',
    image: 'https://example.com/bitcoin.png',
    current_price: 50000,
    market_cap_rank: 1,
    market_cap: 1000000000000,
    total_volume: 50000000000,
    price_change_percentage_24h: 5.5,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'eth',
    image: 'https://example.com/ethereum.png',
    current_price: 3000,
    market_cap_rank: 2,
    market_cap: 500000000000,
    total_volume: 25000000000,
    price_change_percentage_24h: -2.3,
  },
];

const mockWatchlistContext = {
  addToWatchlist: jest.fn(),
  removeFromWatchlist: jest.fn(),
  isInWatchlist: jest.fn(() => false),
};

describe('CoinTable', () => {
  test('renders loading state', () => {
    render(
      <WatchlistContext.Provider value={mockWatchlistContext}>
        <CoinTable coins={[]} loading={true} />
      </WatchlistContext.Provider>
    );
    expect(screen.getByRole('status', { hidden: true })).toBeInTheDocument();
  });

  test('renders coin data correctly', () => {
    render(
      <WatchlistContext.Provider value={mockWatchlistContext}>
        <CoinTable coins={mockCoins} loading={false} />
      </WatchlistContext.Provider>
    );
    
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('ETH')).toBeInTheDocument();
  });

  test('handles watchlist toggle', () => {
    render(
      <WatchlistContext.Provider value={mockWatchlistContext}>
        <CoinTable coins={mockCoins} loading={false} />
      </WatchlistContext.Provider>
    );
    
    const watchlistButtons = screen.getAllByRole('button');
    fireEvent.click(watchlistButtons[0]);
    
    expect(mockWatchlistContext.addToWatchlist).toHaveBeenCalled();
  });

  test('displays price change with correct styling', () => {
    render(
      <WatchlistContext.Provider value={mockWatchlistContext}>
        <CoinTable coins={mockCoins} loading={false} />
      </WatchlistContext.Provider>
    );
    
    const positiveChange = screen.getByText(/5.50%/);
    const negativeChange = screen.getByText(/2.30%/);
    
    expect(positiveChange).toBeInTheDocument();
    expect(negativeChange).toBeInTheDocument();
  });
});

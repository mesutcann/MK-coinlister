import { render, screen, fireEvent } from '@testing-library/react';
import NewsCard from '../components/NewsCard';

const mockArticle = {
  title: 'Bitcoin Reaches New Heights',
  description: 'Bitcoin has reached a new all-time high today.',
  url: 'https://example.com/article',
  urlToImage: 'https://example.com/image.jpg',
  publishedAt: '2024-01-15T10:00:00Z',
  source: {
    name: 'Crypto News',
  },
};

describe('NewsCard', () => {
  test('renders article information correctly', () => {
    render(<NewsCard article={mockArticle} />);
    
    expect(screen.getByText('Bitcoin Reaches New Heights')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin has reached a new all-time high today.')).toBeInTheDocument();
    expect(screen.getByText('Crypto News')).toBeInTheDocument();
  });

  test('displays image when urlToImage is provided', () => {
    render(<NewsCard article={mockArticle} />);
    
    const image = screen.getByAltText('Bitcoin Reaches New Heights');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockArticle.urlToImage);
  });

  test('handles missing image gracefully', () => {
    const articleWithoutImage = { ...mockArticle, urlToImage: null };
    render(<NewsCard article={articleWithoutImage} />);
    
    expect(screen.queryByAltText('Bitcoin Reaches New Heights')).not.toBeInTheDocument();
  });

  test('opens article URL when clicked', () => {
    window.open = jest.fn();
    render(<NewsCard article={mockArticle} />);
    
    const card = screen.getByText('Bitcoin Reaches New Heights').closest('div').parentElement;
    fireEvent.click(card);
    
    expect(window.open).toHaveBeenCalledWith(
      mockArticle.url,
      '_blank',
      'noopener,noreferrer'
    );
  });

  test('formats date correctly', () => {
    render(<NewsCard article={mockArticle} />);
    
    expect(screen.getByText(/Jan/)).toBeInTheDocument();
  });
});

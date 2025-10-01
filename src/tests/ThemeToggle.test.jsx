import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

describe('ThemeToggle', () => {
  test('renders light mode button when theme is light', () => {
    const mockToggleTheme = jest.fn();
    const mockContext = {
      theme: 'light',
      toggleTheme: mockToggleTheme,
    };

    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    );

    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  test('renders dark mode button when theme is dark', () => {
    const mockToggleTheme = jest.fn();
    const mockContext = {
      theme: 'dark',
      toggleTheme: mockToggleTheme,
    };

    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    );

    expect(screen.getByText('Light')).toBeInTheDocument();
  });

  test('calls toggleTheme when button is clicked', () => {
    const mockToggleTheme = jest.fn();
    const mockContext = {
      theme: 'light',
      toggleTheme: mockToggleTheme,
    };

    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  test('has correct aria-label', () => {
    const mockContext = {
      theme: 'light',
      toggleTheme: jest.fn(),
    };

    render(
      <ThemeContext.Provider value={mockContext}>
        <ThemeToggle />
      </ThemeContext.Provider>
    );

    const button = screen.getByLabelText('Toggle theme');
    expect(button).toBeInTheDocument();
  });
});

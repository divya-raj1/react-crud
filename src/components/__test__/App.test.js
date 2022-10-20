import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../login/Login';

// Test case for Login inital render.

test('renders login link', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>);
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
});

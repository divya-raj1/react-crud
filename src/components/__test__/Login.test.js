import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../login/Login';

// Test cases for email, name and button render respectively.

test('User email should be rendered', () => {
    render(<BrowserRouter><Login/></BrowserRouter>);
    const emailInput = screen.getByPlaceholderText(/user@example.com/i);
    expect(emailInput).toBeInTheDocument();
});

test('Password should be rendered', () => {
    render(<BrowserRouter><Login/></BrowserRouter>);
    const nameInput = screen.getByPlaceholderText(/abc123/i);
    expect(nameInput).toBeInTheDocument();
});

test('Button should be rendered', () => {
    render(<BrowserRouter><Login/></BrowserRouter>);
    const buttonInput = screen.getByRole(/button/i);
    expect(buttonInput).toBeInTheDocument();
});
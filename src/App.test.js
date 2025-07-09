import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('Portfolio App', () => {
  test('renders hero title and subtitle', () => {
    render(<App />);
    expect(screen.getByText(/Hi, I'm Trey/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Full-stack developer crafting seamless React apps/i)
    ).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('renders all three project cards', () => {
    render(<App />);
    expect(screen.getByText(/Airline Reservation System/i)).toBeInTheDocument();
    expect(screen.getByText(/E-Commerce Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Conway's Game of Life/i)).toBeInTheDocument();
  });

  test('renders contact form and updates values on change', () => {
    render(<App />);

    const subjectInput = screen.getByPlaceholderText(/Who are you?/i);
    const messageTextarea = screen.getByPlaceholderText(/Write your message here.../i);

    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test Message' } });

    expect(subjectInput).toHaveValue('Test Subject');
    expect(messageTextarea).toHaveValue('Test Message');
  });

  test('contact form has submit button', () => {
    render(<App />);
    const button = screen.getByText(/Send Email/i);
    expect(button).toBeInTheDocument();
  });
});

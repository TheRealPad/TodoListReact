import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('Button create', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const linkElement = screen.getByText(/Create/i);
  expect(linkElement).toBeInTheDocument();
});

test('User name', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const linkElement = screen.getByText(/Pierre/i);
  expect(linkElement).toBeInTheDocument();
});

test('Button add todo', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const linkElement = screen.getByText(/Add/i);
  expect(linkElement).toBeInTheDocument();
});

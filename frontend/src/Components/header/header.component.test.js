import React from 'react'
import { render, screen } from '@testing-library/react';
import Header from './header.component';
import { MemoryRouter } from 'react-router-dom';

test('Create new todo', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  const linkElement1 = screen.getByText(/Add Todo/i);
  const linkElement2 = screen.getByText(/Pierre/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
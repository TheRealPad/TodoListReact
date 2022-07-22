import React from 'react'
import { render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';
import { MemoryRouter } from 'react-router-dom';

test('Edit todo with values', () => {
  render(<MemoryRouter><TodoForm /></MemoryRouter>);
  const linkElement1 = screen.getByText(/Task/i);
  const linkElement2 = screen.getByText(/Description/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
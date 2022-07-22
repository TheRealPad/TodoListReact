import React from 'react'
import { render, screen } from '@testing-library/react';
import CreateTodo from './create-todo.component';
import { MemoryRouter } from 'react-router-dom';

test('Create new todo', () => {
  render(<MemoryRouter><CreateTodo /></MemoryRouter>);
  const linkElement1 = screen.getByText(/New Todo/i);
  const linkElement2 = screen.getByText(/Home/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
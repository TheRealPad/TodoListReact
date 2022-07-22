import React from 'react'
import { render, screen } from '@testing-library/react';
import TodoList from './todo-list.component';
import { MemoryRouter } from 'react-router-dom';

test('Create new todo', () => {
  render(<MemoryRouter><TodoList /></MemoryRouter>);
  const linkElement = screen.getByText(/Create/i);
  expect(linkElement).toBeInTheDocument();
});
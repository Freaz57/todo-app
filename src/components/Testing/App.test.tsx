import { render, screen, fireEvent } from '@testing-library/react';
import App from "../App/App";

test('adds a new task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.submit(inputElement);
  const taskElement = screen.getByText(/New Task/i);
  expect(taskElement).toBeInTheDocument();
});

test('toggles task completion', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.submit(inputElement);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test('deletes a task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.submit(inputElement);
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);
  const taskElement = screen.queryByText(/New Task/i);
  expect(taskElement).not.toBeInTheDocument();
});

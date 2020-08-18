import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('expects addContactButton to be in App component', () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button");
  expect(addContactButton).toBeInTheDocument();
});

test('expects AddDrawer not to be in App component on render', () => {
  const { queryByTestId } = render(<App />);
  const addContactDrawer = queryByTestId("add-contact-drawer");
  expect(addContactDrawer).not.toBeInTheDocument();
});

test('expects AddDrawer to be in App component on button click', () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button");
  fireEvent.click(addContactButton);
  const addContactDrawer = queryByTestId("add-contact-drawer");
  expect(addContactDrawer).toBeInTheDocument();
});
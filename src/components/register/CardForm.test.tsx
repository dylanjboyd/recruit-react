import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderInRouter } from '../../test-utils';
import userEvent from '@testing-library/user-event';

test('submitting with missing card number shows error', async () => {
  // Arrange
  renderInRouter('/');
  userEvent.type(screen.getByLabelText('CVC'), '11');
  userEvent.type(screen.getByLabelText('Expiry'), '11/1111');

  // Act
  fireEvent.click(screen.getByLabelText('submit'));

  // Assert
  await waitFor(() => screen.getByText('Card number must be a valid number with at least one digit.'));
});

test('submitting with missing CVC shows error', async () => {
  // Arrange
  renderInRouter('/');
  userEvent.type(screen.getByLabelText('Credit card number'), '11');
  userEvent.type(screen.getByLabelText('Expiry'), '11/1111');

  // Act
  fireEvent.click(screen.getByLabelText('submit'));

  // Assert
  await waitFor(() => screen.getByText('CVC must be a valid number.'));
});
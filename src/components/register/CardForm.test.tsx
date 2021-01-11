import { fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderInRouter } from '../../test-utils';
import userEvent from '@testing-library/user-event';

const CARD_NUMBER_ERROR = 'Card number must be a valid number with at least one digit.';
const EXPIRY_ERROR = 'Expiry date must be valid and complete.';
const CVC_ERROR = 'CVC must be a valid number.';

const getCardNumberInput = () => screen.getByLabelText('Credit card number');
const getCvcInput = () => screen.getByLabelText('CVC');
const getExpiryInput = () => screen.getByLabelText('Expiry');

beforeEach(() => {
  renderInRouter('/');
  userEvent.type(screen.getByLabelText('First name'), 'Hazel');
  fireEvent.click(screen.getByLabelText('save-user'));
});

test('submitting with missing card number shows error', async () => {
  // Arrange
  userEvent.type(getCvcInput(), '11');
  userEvent.type(getExpiryInput(), '11/1111');

  // Act
  fireEvent.click(screen.getByLabelText('submit'));

  // Assert
  await waitFor(() => screen.getByText(CARD_NUMBER_ERROR));
  expect(screen.queryByText(CVC_ERROR)).not.toBeInTheDocument();
  expect(screen.queryByText(EXPIRY_ERROR)).not.toBeInTheDocument();
});

test('submitting with missing CVC shows error', async () => {
  // Arrange
  userEvent.type(getCardNumberInput(), '11');
  userEvent.type(getExpiryInput(), '11/1111');

  // Act
  fireEvent.click(screen.getByLabelText('submit'));

  // Assert
  await waitFor(() => screen.getByText(CVC_ERROR));
  expect(screen.queryByText(CARD_NUMBER_ERROR)).not.toBeInTheDocument();
  expect(screen.queryByText(EXPIRY_ERROR)).not.toBeInTheDocument();
});

test('submitting with missing expiry shows error', async () => {
  // Arrange
  userEvent.type(getCardNumberInput(), '11');
  userEvent.type(getCvcInput(), '11');

  // Act
  fireEvent.click(screen.getByLabelText('submit'));

  // Assert
  await waitFor(() => screen.getByText(EXPIRY_ERROR));
  expect(screen.queryByText(CARD_NUMBER_ERROR)).not.toBeInTheDocument();
  expect(screen.queryByText(CVC_ERROR)).not.toBeInTheDocument();
});
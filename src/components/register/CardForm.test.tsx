import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderInRouter } from '../../test-utils';

const server = setupServer(
  rest.post('/cards', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('menu navigates to register', async () => {
  renderInRouter('/menu');

  fireEvent.click(screen.getByRole('button', { name: 'Go to form' }));

  await waitFor(() => screen.getByRole('dialog'));

  expect(screen.getByRole('heading')).toHaveTextContent('Introduce Yourself');

});
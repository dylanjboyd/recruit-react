import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from './components/App';

export const renderInRouter = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App/>
    </MemoryRouter>
  );
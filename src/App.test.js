import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { testData } from "./data";

jest.mock('./api/fetchShow');

test('renders the data', async () => {
    mockFetchShow.mockResolvedValueOnce(testData);
    render(<App />);
    screen.debug();
    await waitFor(() => {
      expect(screen.getByText(/fetching/i)).toBeInTheDocument();
    });
  });
  
  test('renders the sections from API call', async () => {
    mockFetchShow.mockResolvedValueOnce(testData);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/a love letter/i)).toBeInTheDocument();
    });
  });
  
  test('renders the season list when dropdown is clicked', async () => {
    mockFetchShow.mockResolvedValueOnce(testData);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/a love letter/i)).toBeInTheDocument();
    });
    screen.debug();
    userEvent.click(screen.getByText(/select a season/i));
    userEvent.click(screen.getByText(/season 1/i));
    await waitFor(() => {
      expect(screen.getByText(/chapter one: the vanishing of will byers/i)).toBeInTheDocument();
    });
  });
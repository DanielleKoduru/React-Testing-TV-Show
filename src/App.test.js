import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("App component renders correctly", () => {
    render(<App show={false} />);
});

test("App renders select a season button with data", async () => {
    mockFetchShow.mockResolvedValueOnce(testData);
    const { rerender, getByText } = render(<App />);
    screen.debug();
    await act(async () => {
        await rerender(<App />);
        const dropDown = getByText(/select a season/i);
        userEvent.click(dropDown);
        screen.debug();
    });
};
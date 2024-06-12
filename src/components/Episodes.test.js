import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("renders without errors", () => {
    render(<Episodes episodes={[]} />);
});

test("Episodes render correctly with info", () => {
    const { queryAllByTestId } = render(<Episodes episodes={[]} />);
    const seasonEpisodes = queryAllByTestId(/episode/i);
    expect(seasonEpisodes).toHaveLength(0);
    expect(seasonEpisodes).toEqual([]);
});



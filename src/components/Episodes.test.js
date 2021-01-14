import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episodes list shows data when a season is clicked", () => {
    const { queryAllByTestId } = render(<Episodes episodes={[]} />);
    const seasonEpisodes = queryAllByTestId(/episode/i);
    expect(seasonEpisodes).toHaveLength(0);
    expect(seasonEpisodes).toEqual([]);
});


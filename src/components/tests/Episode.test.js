import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

test("renders without error", () => {
  render(<Episode episode={exampleEpisodeData} />)
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={exampleEpisodeData} />)
  const summary = screen.queryByText(/test summary/i)
  // console.log(summary)
  expect(summary).toHaveTextContent(/test summary/i)
  expect(summary).not.toBe(null)
  expect(summary).toContainHTML("Test Summary")

});

test("renders default image when image is not defined", () => {
  render(<Episode episode={exampleEpisodeData} />)
  const image = screen.queryByRole("img")
  console.log(image.alt)
  // expect(image).
  expect(image.alt).toEqual("https://i.ibb.co/2FsfXqM/stranger-things.png")
});

// ----- EXAMPLE EPISODE TEST OBJECT -----
const exampleEpisodeData = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553946,
  image: null,
  name: "Chapter One: The Vanishing of Will Byers",
  number: 1,
  rating: { average: 8.2 },
  runtime: 49,
  season: 1,
  summary:
    "Test Summary",
  type: "regular",
  url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
};

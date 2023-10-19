import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

test('renders without errors', () => {
    render(<Show show={exampleShow} selectedSeason={"none"} />)
 });

test('renders Loading component when prop show is null', () => {
  render(<Show show={null} selectedSeason={"none"} />)
  const loading = screen.getByTestId("loading-container")
  console.log(loading)
  expect(loading).toBeInTheDocument()
  expect(loading).toBeTruthy()
  expect(loading).toHaveTextContent(/fetching data.../i)
 });

test('renders same number of options seasons are passed in', () => {
  render(<Show show={exampleShow} selectedSeason={"none"} />)
  const seasonCount = screen.getAllByRole("option")
  const seasonOne = screen.getByText(/example 1/i)
  const seasonTwo = screen.getByText(/example 2/i)
  // console.log(seasonOne, ",", seasonTwo)
  // console.log(seasonCount.length) // This is going to include the "NONE", so it SHOULD be 3

  expect(seasonCount).toHaveLength(3) //When 2 seasons are provided, it will be 3
  expect(seasonOne).toHaveTextContent(/example 1/i)
  expect(seasonTwo).toHaveTextContent(/example 2/i)
 });

test('handleSelect is called when an season is selected', () => { });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });


const exampleShow = {
  name: "exampleShow",
  summary: "We created a show all about examples!",
  seasons: [
    {
      id: 0,
      name: "Example 1",
      episodes: []
    },
    {
      id: 1,
      name: "Example 2",
      episodes: []
    }
  ]
}
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

test('renders without errors with no props', async () => { 
  render(<Display />)
  // NO props
});

test('renders Show component when the button is clicked ', async () => { 
  render(<Display displayFun={exampleEpisodeData} />)
  
  const button = screen.getByText(/press to get show data/i)
  // console.log(button)
  fireEvent.click(button)
  const evidenceOfShowComponent = await screen.findByText("Stranger Things")
  console.log(evidenceOfShowComponent.textContent)
  expect(evidenceOfShowComponent).toBeTruthy()
  expect(evidenceOfShowComponent).toHaveTextContent("Stranger Things")
});

test('renders show season options matching your data when the button is clicked', async () => {
  const displayFunc = jest.fn()
  render(<Display displayFun={exampleEpisodeData} displayFunc={displayFunc} />)

  const button = screen.getByText(/press to get show data/i)
  fireEvent.click(button, )
  const options = await screen.findAllByRole("option")
  console.log(options[1].textContent) //Got 6 ~ if we count the empty one, we get 6. Should be correct
  expect(options[1]).toHaveTextContent(/season 1/i)
  expect(options[4]).toHaveTextContent(/season 4/i)
  expect(displayFunc).toHaveBeenCalled()
 });




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
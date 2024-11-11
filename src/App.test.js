
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import { initializeTimes, updateTimes } from './pages/BookingPage';

test("rendering the table booking component", () => {
  render(<BookingPage />);

  const headingElement = screen.getByText("Book A Table");
  expect(headingElement).toBeInTheDocument();

});

// initializeTimes testing
describe('initializeTimes', () => {
  test('should return the correct initial times array', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

// Test for updateTimes
describe('updateTimes', () => {
  test('should return the same state provided when UPDATE_TIMES action is dispatched', () => {
    const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: 'UPDATE_TIMES', payload: { date: '2023-01-01' } };
    const result = updateTimes(currentState, action);

    // Verify that the result is the same as the current state
    expect(result).toEqual(currentState);
  });
});
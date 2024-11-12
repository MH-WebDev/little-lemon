import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import { initializeTimes, updateTimes } from './pages/BookingPage';
import { fetchAPI } from './Api'; // Import fetchAPI for mocking

// Mock fetchAPI globally
jest.mock('./Api', () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]), // Default mock return
}));

describe('initializeTimes', () => {
  test('should return initial times array including times from fetchAPI', () => {
    const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes([]);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  test('should return new times from fetchAPI based on selected date', () => {
    const mockTimes = ["17:30", "18:30", "19:30"];
    const action = { type: 'UPDATE_TIMES', payload: { date: '2023-01-01' } };
    const dateObject = new Date(action.payload.date);

    fetchAPI.mockReturnValue(mockTimes);

    const result = updateTimes([], action);
    expect(fetchAPI).toHaveBeenCalledWith(dateObject);
    expect(result).toEqual(mockTimes);
  });

  test('should return the current state if fetchAPI returns an empty array', () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: 'UPDATE_TIMES', payload: { date: '2023-01-01' } };

    fetchAPI.mockReturnValue([]); // Mock empty response

    const result = updateTimes(currentState, action);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(action.payload.date));
    expect(result).toEqual(currentState);
  });
});

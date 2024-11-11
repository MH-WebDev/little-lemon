import React, { useState, useReducer } from 'react';
import BookingForm from "../components/BookingForm.js";
import food from "../assets/img/restaurantfood.jpg";
import PopUp from '../components/PopUp';
import { fetchAPI } from '../Api.js'


export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false); // Modal state for booking confirmation

  const updateTimes = (availableTimes, { payload }) => {
    const dateObject = new Date(payload.date); // Convert date string to Date object
    const response = fetchAPI(dateObject);
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes, ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const [formValues, setFormValues] = useState({
    numberOfDiners: '',
    bookingDate: '',
    bookingTime: '',
    seatingPreference: [],
    name: '',
    phoneNumber: '',
    email: '',
    specialRequirements: ''
  });

  const handleFormSubmit = (values) => {
    if (step === 1) {
      setStep(step + 1);
    } else {
      // Show the modal when form is completed
      setShowModal(true);
    }
  };

  const updateFormValues = (newValues) => {
    setFormValues(prevValues => ({
      ...prevValues,
      ...newValues
    }));
  };

  return (
    <>
      <div className="grid grid-cols-1 tablet:grid-cols-2 items-center">
        <div className="px-12 tablet:pr-0">
          <h2 className="sub-title">Book A Table</h2>
          <BookingForm
            step={step}
            formValues={formValues}
            setFormValues={updateFormValues}
            handleFormSubmit={handleFormSubmit}
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
        </div>
        <div className="py-12 w-full hidden tablet:block">
          <img src={food} alt="A plate of food being served" className="max-w-auto px-12"/>
        </div>
      </div>

      {/* Conditionally render the PopUp modal */}
      {showModal && <PopUp onClose={() => setShowModal(false)} />}
    </>
  );
}

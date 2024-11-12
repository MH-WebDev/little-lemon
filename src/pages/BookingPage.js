import React, { useState, useReducer } from 'react';
import BookingForm from "../components/BookingForm.js";
import food from "../assets/img/restaurantfood.jpg";
import { fetchAPI, submitAPI } from '../Api.js'
import { useNavigate } from 'react-router-dom';


export default function BookingPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

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

  const submitForm = (values) => {
    const formData = values;
    const success = submitAPI(formData);

    if (success) {
      console.log('Form submitted successfully:', formData);
      navigate('/booking-confirmed');
      // Optionally reset the form or navigate to a confirmation page
    } else {
      console.error('Form submission failed');
      // Handle submission error as needed
    }
  };

  const handleFormSubmit = (values) => {
    if (step === 1) {
      setStep(step + 1);
    } else {
      console.log('Final Form Values:', values);
      submitForm(values);  // Call submitForm to handle submission
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
            submitForm={submitForm}
          />
        </div>
        <div className="py-12 w-full hidden tablet:block">
          <img src={food} alt="A plate of food being served" className="max-w-auto px-12"/>
        </div>
      </div>
    </>
  );
}

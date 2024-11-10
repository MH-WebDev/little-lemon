import React, { useState, useReducer } from 'react';
import BookingForm from "../components/BookingForm";
import food from "../assets/img/restaurantfood.jpg";

export default function BookingPage() {
    const [step, setStep] = useState(1);

  const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // Update times based on the selected date
        // For now, it returns the same times regardless of the date
        return initializeTimes();
      default:
        return state;
    }
  };

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
      console.log('Final Form Values:', values);
    }
  };

  const updateFormValues = (newValues) => {
    setFormValues(prevValues => ({
      ...prevValues,
      ...newValues
    }));
  };
    return(
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
        </>
    )
}
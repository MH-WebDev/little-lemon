import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from './button';

export default function BookingForm({
  step,
  formValues,
  setFormValues,
  handleFormSubmit,
  availableTimes,
  dispatch
}) {
  const validationSchemas = [
    Yup.object({
      numberOfDiners: Yup.number().required('Please select the number of diners').min(1).max(10),
      bookingDate: Yup.date().required('Please select a booking date').min(new Date(), 'Date must be in the future'),
      bookingTime: Yup.string().required('Please select a booking time'),
      seatingPreference: Yup.array().min(1, 'Please select at least one seating preference').required('Please select seating preference')
    }),
    Yup.object({
      name: Yup.string().required('Please enter your name'),
      phoneNumber: Yup.string().required('Please enter your phone number'),
      email: Yup.string().email('Invalid email address').required('Please enter your email address'),
      specialRequirements: Yup.string() // Optional field, no validation needed
    })
  ];

  return (
    <div className="lead-text uppercase" aria-label="Booking Form">
      <Formik
        initialValues={formValues}
        validationSchema={validationSchemas[step - 1]}
        onSubmit={(values) => {
          setFormValues(values);
          handleFormSubmit(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            {step === 1 && (
              <>
                <div className="flex flex-col py-3">
                  <label htmlFor="numberOfDiners" className="pb-2">Number of Diners*</label>
                  <Field as="select" name="numberOfDiners" className="border rounded-lg h-10 text-center">
                    <option value="">Select</option>
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="numberOfDiners" component="div" className="error" />
                </div>
                <div className="flex flex-col py-3">
                  <label htmlFor="bookingDate" className="pb-2">Booking Date*</label>
                  <Field
                    type="date"
                    name="bookingDate"
                    className="border rounded-lg h-10 text-center"
                    onChange={(e) => {
                        const selectedDate = e.target.value;
                        setFieldValue("bookingDate", selectedDate);
                        dispatch({ type: 'UPDATE_TIMES', payload: { date: selectedDate } }); // This should now work correctly
                    }}
                  />
                  <ErrorMessage name="bookingDate" component="div" className="error" />
                </div>
                <div className="flex flex-col py-3">
                  <label htmlFor="bookingTime" className="pb-2">Booking Time*</label>
                  <Field as="select" name="bookingTime" className="border rounded-lg h-10 text-center">
                    <option value="">Select Time</option>
                    {availableTimes.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="bookingTime" component="div" className="error" />
                </div>
                <div className="flex flex-col py-3">
                  <label className="pb-2">Seating Preference</label>
                  <div className="grid grid-cols-2">
                    {['Birthday', 'Anniversary', 'Wedding', 'Other'].map((seating) => (
                      <label key={seating}>
                        <Field type="checkbox" name="seatingPreference" value={seating} className="mx-6" />
                        {seating}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="seatingPreference" component="div" className="error" />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="flex flex-col py-3">
                  <label htmlFor="name" className="pb-2">Name*</label>
                  <Field type="text" name="name" className="border rounded-lg h-10 text-center" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="flex flex-col py-3">
                  <label htmlFor="phoneNumber" className="pb-2">Phone Number*</label>
                  <Field type="text" name="phoneNumber" className="border rounded-lg h-10 text-center" />
                  <ErrorMessage name="phoneNumber" component="div" className="error" />
                </div>
                <div className="flex flex-col py-3">
                  <label htmlFor="email" className="pb-2">Email Address*</label>
                  <Field type="email" name="email" className="border rounded-lg h-10 text-center" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div className="flex flex-col py-3">
                  <label htmlFor="specialRequirements" className="pb-2">Special Requirements (Optional)</label>
                  <Field as="textarea" name="specialRequirements" className="border rounded-lg h-10 text-center" />
                </div>
              </>
            )}

            <div className="text-center py-6">
              <Button buttonType="submit" buttonText={step === 1 ? "Continue" : "Submit"} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
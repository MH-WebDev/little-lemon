import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from  "./pages/BookingPage"
import BookingForm from "./components/BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import * as Yup from 'yup';

// Define validation schema for step 2 form tests
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Name cannot contain special characters or numbers')
    .required('Please enter your name'),
  phoneNumber: Yup.string()
    .matches(/^[\d+\s]*$/, 'Phone number can only contain digits, +, and spaces')
    .required('Please enter your phone number'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email address'),
  specialRequirements: Yup.string()
});

describe("BookingForm validation", () => {
  test("shows error for name with special characters", async () => {
    render(
      <Router>
        <BookingForm
          step={2}
          initialValues={{
            name: '',
            phoneNumber: '',
            email: '',
            specialRequirements: ''
          }}
          validationSchema={validationSchema}
        />
      </Router>
    );

    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: "John$Doe" } });
    fireEvent.blur(nameInput);

    const errorMessage = await screen.findByText(/Name cannot contain special characters or numbers/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows error for phone number with invalid characters", async () => {
    render(
      <Router>
        <BookingForm
          step={2}
          initialValues={{
            name: '',
            phoneNumber: '',
            email: '',
            specialRequirements: ''
          }}
          validationSchema={validationSchema}
        />
      </Router>
    );

    const phoneInput = screen.getByLabelText(/Phone Number/i);
    fireEvent.change(phoneInput, { target: { value: "123-456" } });
    fireEvent.blur(phoneInput);

    const errorMessage = await screen.findByText((content, element) => {
      return content.includes("Phone number can only contain digits, +, and spaces");
    });
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows error for invalid email address", async () => {
    render(
      <Router>
        <BookingForm
          step={2}
          initialValues={{
            name: '',
            phoneNumber: '',
            email: '',
            specialRequirements: ''
          }}
          validationSchema={validationSchema}  // Now validationSchema is used
        />
      </Router>
    );

    const emailInput = screen.getByLabelText(/Email Address/i);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);

    const errorMessage = await screen.findByText(/Invalid email address/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
import logo from "../assets/img/Logo.svg"
import Button from "./button"

export default function FormComplete() {
    return(
        <div>
            <div className="flex flex-col gap-14 justify-center w-1/4 absolute inset-1/4 bg-white drop-shadow-lg p-24 rounded-2xl mx-auto">
                <div className="mx-auto">
                    <img src={logo}></img>
                </div>
                <h2 className="sub-title text-center p-2">Reservation Received!</h2>
                <p className="paragraph text-center max-w-readable mx-auto">Thank you for making a booking request at Little Lemon! You will soon receive an email to confirm your reservation details.</p>
                <Button buttonText="Close"/>
            </div>
        </div>
    )
}
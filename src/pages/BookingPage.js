import BookingForm from "../components/BookingForm"
import food from "../assets/img/restaurantfood.jpg"

export default function BookingPage() {
    return(
        <>
            <div className="grid grid-cols-1 tablet:grid-cols-2 items-center">
                <div className="px-12 tablet:pr-0">
                    <h2 className="sub-title">Book A Table</h2>
                    <BookingForm />
                </div>
                <div className="py-12 w-full hidden tablet:block">
                    <img src={food} alt="A plate of food being served" className="max-w-auto px-12"/>
                </div>
            </div>
        </>
    )
}
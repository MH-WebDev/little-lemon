import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import portrait1 from "../assets/img/ai-header-4.jpg";

const testimonialData = [
    {
        "id": "0",
        "name": "Anonymous",
        "image": "../assets/img/ai-header-4.jpg",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus risus non dui elementum tempus."
    },
    {
        "id": "1",
        "name": "Barry",
        "image": "../assets/img/ai-header-4.jpg",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus risus non dui elementum tempus."
    },
    {
        "id": "2",
        "name": "Evelyn",
        "image": "../assets/img/ai-header-4.jpg",
        "review": "Help i'm trapped in a bowl of soup!"
    },
]

export default function TestimonialCard() {
    return (
        <>
            {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="bg-white shadow-xl rounded-lg w-[250px] mx-auto p-4 hover:scale-105 duration-300 ease-in-out">
                    <div className="flex flex-row gap-3 text-yellow justify-center pb-4">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <div className="flex flex-row justify-between">
                        <img src={portrait1} alt="User Photo" className="w-[100px] rounded-lg"/>
                        <div className="text-center mx-auto">
                            <h3 className="card-title">{testimonial.name}</h3>
                        </div>
                    </div>
                    <div className="pt-4">
                        <p className="paragraph text-center">{testimonial.review}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
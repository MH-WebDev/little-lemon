import { NavLink } from 'react-router-dom'

const specials = [
    {
        "id": 0,
        "name": "Name1",
        "image": "https://i.imgur.com/MMFz2xi.jpeg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "price": "12.99",
    },
    {
        "id": 1,
        "name": "Name2",
        "image": "https://i.imgur.com/z00fJta.jpeg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "price": "11.99",
    },
    {
        "id": 2,
        "name": "Name3",
        "image": "https://i.imgur.com/CJ58fkx.jpeg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "price": "15.99",
    },
]

export default function SpecialsCard() {

    return(
        <>
            {specials.map((special) => (
                <div key={special.id} className="rounded-2xl bg-light-grey w-[350px] mx-auto my-8 shadow-lg hover:scale-105 duration-300 ease-in-out">
                    <div>
                        <img src={special.image} alt={special.name} className="rounded-t-2xl w-[350px] h-[230px] object-cover"/>
                        <div className="flex flex-row justify-between px-3 py-6 align-items">
                            <h2 className="section-category">{special.name}</h2>
                            <p>${special.price}</p>
                        </div>
                        <div className="p-3">
                            <p className="paragraph">{special.description}</p>
                            <NavLink to="/order" className="card-title py-3">Order for delivery</NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
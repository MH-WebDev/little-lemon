import image from '../assets/img/greek salad.jpg'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

const specials = [
    {
        "id": 0,
        "name": "Name1",
        "image": "../assets/img/greek salad.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "price": "12.99",
    },
    {
        "id": 1,
        "name": "Name2",
        "image": "../assets/img/bruchetta.svg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "price": "11.99",
    },
    {
        "id": 2,
        "name": "Name3",
        "image": "../assets/img/greek salad.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "price": "15.99",
    },
]

export default function SpecialsCard() {
    // const [specials, setSpecials] = useState([]);

    // useEffect(() => {
    //     const loadImages = async () => {
    //         const loadedSpecials = await Promise.all(
    //             specialsData.map(async (special) => {
    //                 const image = require(`${special.image}`);
    //                 return {...special, image};
    //             })
    //         );
    //         setSpecials(loadedSpecials);
    //         console.log("Loaded Specials");
    //     };
    //     loadImages();
    //     console.log("Loaded Images");
    // }, []);

    return(
        <>
            {specials.map((special) => (
                <div className="rounded-2xl bg-light-grey w-[350px] mx-auto shadow-lg hover:scale-105 duration-300 ease-in-out">
                    <div key={special.id}>
                        <img src={image} alt={special.name} className="rounded-t-2xl"/>
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
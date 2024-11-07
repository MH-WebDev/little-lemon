export default function Button(props) {
    return (
        <button className="bg-yellow rounded-lg px-24 py-2 section-category drop-shadow-md inline-block hover:scale-110 duration-300 ease-in-out">{props.buttonText}</button>
    );
};
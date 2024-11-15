import TestimonialCard from "./testimonialCard";

export default function Testimonials() {
    return(
    <section className="bg-green p-6">
        <h2 className="sub-title text-white">Testimonials</h2>
        <div className="py-12 flex flex-wrap gap-6 justify-center">
            <TestimonialCard />
        </div>
    </section>
    );
};
import Button from "./button";
import food from "../assets/img/bruchetta.svg"

export default function CallToAction() {
    return(
    <header className="bg-green">
        <div className="grid grid-cols-1 tablet:grid-cols-2 p-6">
            <div className="px-10 order-2">
                <div className="">
                    <h1 className="display-title text-yellow p-0 pt-6 m-0 leading-7">Little Lemon</h1>
                    <h2 className="sub-title text-white p-0 m-0 leading-20">Chicago</h2>
                </div>
                <div className="py-8">
                    <p className="text-white paragraph max-w-readable">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus risus non dui elementum tempus. Pellentesque euismod dolor sit amet diam auctor dignissim. Praesent vehicula ac elit quis fermentum. Integer at finibus justo, non facilisis risus. Nam id risus at velit eleifend laoreet. </p>
                </div>
                <div className="text-center">
                    <Button buttonText="Book a table"/>
                </div>
            </div>
           <div className="mx-auto py-10 tablet:py-0 tablet:order-3 ">
            <img src={food} alt="Delicious food arrangement from Little Lemon" width="500px" className="drop-shadow-lg"/>
           </div>
        </div>
    </header>
    );
};
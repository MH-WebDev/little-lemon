import owners1 from "../assets/img/Mario_and_Adrian_A.jpg";
import owners2 from "../assets/img/Mario_and_Adrian_B.jpg";

export default function About() {
    return(
        <div className="grid grid-cols-2 py-20 items-center">
            <div className="px-10">
                <div className="">
                    <h1 className="display-title text-black p-0 pt-6 m-0 leading-7">Little Lemon</h1>
                    <h2 className="sub-title text-black p-0 m-0 leading-20">Chicago</h2>
                </div>
                <div className="py-8 w-2/3">
                    <p className="text-black paragraph max-w-readable">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus risus non dui elementum tempus. Pellentesque euismod dolor sit amet diam auctor dignissim. Praesent vehicula ac elit quis fermentum. Integer at finibus justo, non facilisis risus. Nam id risus at velit eleifend laoreet. </p>
                </div>
            </div>
            <div className="relative">
                <img src={owners2} alt="Owners Mario and Adrian" width="450px" className="absolute -top-20 -left-28 drop-shadow-lg"/>
                <img src={owners1} alt="Owners Mario and Adrian" width="450px" className="absolute -top-48 left-28 -z-10 drop-shadow-md"/>
            </div>
        </div>
    )
}
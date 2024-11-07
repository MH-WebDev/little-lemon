import Button from "./button"
import SpecialsCard from "./specialsCard"

export default function Specials() {
    return(
        <>
            <div className="flex flex-row justify-between p-6 items-center">
                <h1 className="sub-title">Specials</h1>
                <div>
                <Button buttonText="Online Menu" />
                </div>
            </div>
            <div className="flex flex-wrap gap-6 py-6">
                <SpecialsCard />
            </div>
        </>
    )
}
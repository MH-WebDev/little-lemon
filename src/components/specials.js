import Button from "./button"
import SpecialsCard from "./specialsCard"

export default function Specials() {
    return(
        <div>
            <div className="flex flex-row justify-between p-6 items-center">
                <h1 className="sub-title">Specials</h1>
                <div>
                <Button buttonText="Online Menu" />
                </div>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-0 py-12">
                <SpecialsCard />
            </div>
        </div>
    )
}
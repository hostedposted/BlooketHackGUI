import { h, FunctionalComponent } from "preact"
import { useState } from "preact/hooks"
import { ArgumentFailureError } from "../../swal"

interface ToggleProps {
    name: string
    toggleFunction: ToggleFunction
}

const Toggle: FunctionalComponent<ToggleProps> = ({ name, toggleFunction }) => {
    const [toggled, setToggled] = useState<boolean>(false)

    async function onChange () {
        const newToggled = !toggled
        setToggled(newToggled)
        try {
            await toggleFunction(newToggled)
        } catch (error) {
            if (error instanceof ArgumentFailureError) return
            error("An error occurred while trying to execute this hack. Check the console for more information.")
            throw error
        }
    }

    return (
        <div className="pl-10 group mt-2">
            <input className="checked:group-odd:bg-blue-600 checked:group-even:bg-emerald-600 switch-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-zinc-400 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id={`select-hack-${name}`} checked={toggled} onClick={onChange} />
            <label className="form-check-label inline-block text-gray-800 mr-3" htmlFor={`select-hack-${name}`}>{name}</label>
        </div>
    )
}

export default Toggle

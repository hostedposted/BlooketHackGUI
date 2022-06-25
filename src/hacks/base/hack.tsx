import { FunctionalComponent, h } from "preact"
import { useState } from "preact/hooks"
import { ArgumentFailureError, error as swalError } from "../../swal"

interface HackProps {
    name: string
    description: string
    hackFunction: HackFunction
}

const Hack: FunctionalComponent<HackProps> = ({ name, description, hackFunction }) => {
    const [buttonName, setButtonName] = useState(name)

    async function onClick () {
        try {
            setButtonName("Loading")
            await hackFunction()
            setButtonName(name)
        } catch (error) {
            setButtonName(name)
            if (error instanceof ArgumentFailureError) return
            swalError("An error occurred while trying to execute this hack. Check the console for more information.")
            throw error
        }
    }

    return <button onClick={onClick} title={description} className="capitalize odd:bg-blue-600 even:bg-emerald-600 mt-2 md:mb-0 mr-3 text-white shadow-xl odd:shadow-blue-400 even:shadow-emerald-400 rounded px-4 py-1.5" data-mdb-ripple="true" data-mdb-ripple-color="light">{buttonName}</button>
}

export default Hack

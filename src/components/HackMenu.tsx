import { h, FunctionalComponent, Fragment } from "preact"
import { useState } from "preact/hooks"
import { sortGroups } from "../hacks/base/categories"
import Hack from "../hacks/base/hack"
import Toggle from "../hacks/base/toggle"
import { groupBy } from "../utils/groupBy"
import MenuToggler from "./MenuToggler"

interface HackMenuProps {
    hacks?: HackData[]
}

const HackMenu: FunctionalComponent<HackMenuProps> = ({ hacks = [] }) => {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <Fragment>
            <MenuToggler toggled={visible} onToggle={() => setVisible(!visible)} />
            <div className={`p-7 absolute w-full left-0 transition-all ease-in-out duration-500 h-[40vh] overflow-y-scroll bg-gray-200 bg-opacity-90 z-[100] ${visible ? "top-0" : "-top-[40vh]"}`}>
                <h1 className="text-5xl font-bold text-center">Blooket Cheat menu</h1>
                {sortGroups(groupBy(hacks, hack => hack.category)).map(([category, hacks]) => (
                    <Fragment key={category}>
                        <h2 className="text-center text-3xl font-bold my-2 md:text-left ">{category}</h2>
                        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start md:flex-wrap">
                            {hacks.map(hack => (
                                hack.type === "hack"
                                // @ts-ignore
                                    ? <Hack key={hack.name} name={hack.name} description={hack.description} hackFunction={hack.onClick} />
                                    : <Toggle key={hack.name} name={hack.name} toggleFunction={hack.onClick} />
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>
        </Fragment>
    )
}

export default HackMenu

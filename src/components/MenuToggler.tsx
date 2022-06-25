import { h, FunctionalComponent } from "preact"
import { IconContext } from "react-icons"
import { BsArrowUp, BsArrowDown } from "react-icons/bs"

interface MenuTogglerProps {
    toggled: boolean
    onToggle: () => void
}

const MenuToggler: FunctionalComponent<MenuTogglerProps> = ({ toggled, onToggle }) => {
    const Icon = toggled ? BsArrowUp : BsArrowDown

    return (
        <button className="bg-gray-200 bg-opacity-90 absolute z-10" onClick={onToggle} id="menu-toggler">
            <IconContext.Provider value={{ size: "30px", color: "black" }}>
                <Icon />
            </IconContext.Provider>
        </button>
    )
}

export default MenuToggler

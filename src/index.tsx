import { h, render } from "preact"
import HackMenu from "./components/HackMenu"
import { BLOOKET_GUI_CHEAT_MENU_ID } from "./constants"
import { hackRegistry } from "./hacks/base/registry"
import "tw-elements/dist/src/js/mdb/ripple.js"
import "sweetalert2/src/sweetalert2.scss"
import "./styles/global.scss"

document.querySelectorAll(`#${BLOOKET_GUI_CHEAT_MENU_ID}, #menu-toggler`).forEach(element => {
    element.remove()
})

export const menuElement = document.createElement("div")
menuElement.id = BLOOKET_GUI_CHEAT_MENU_ID
document.body?.prepend(menuElement)

render(<HackMenu hacks={hackRegistry} />, menuElement)

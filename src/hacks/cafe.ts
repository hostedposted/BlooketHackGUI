import { success, InputTypes, error } from "../swal"
import { CafeStateNode } from "../types/CafeStateNode"
import { getReactHandler, inGame } from "../utils/hackHelperFunctions"
import { Category } from "./base/categories"
import { withCategory } from "./base/registry"

const gameChecker = () => {
    if (inGame("cafe")) return
    error("You are not in the Cafe game. This hack only works in the Cafe game.")
}

withCategory(Category.CAFE, ({ hack /* , toggle */ }) => {
    hack("Max Level Items", "Sets all items in your cafe to level 5.", async () => {
        gameChecker()
        const data = getReactHandler<CafeStateNode>().stateNode.state.items
        if (data) {
            for (let i = 0; i < Object.keys(data).length; i++) {
                data[Object.keys(data)[i]] = 5
            }
            success("All items have been set to level 5.")
        } else {
            error("You have to be in the shop")
        }
    })
    hack("Get Food", "Get x amount of every food item.", async () => {
        gameChecker()
        const { stateNode } = getReactHandler<CafeStateNode>()
        const amount = await InputTypes.integer("Amount of food to get", 0, Infinity)
        if (stateNode.state.foods) {
            stateNode.state.foods.forEach(element => {
                element.stock = amount
            })
            success(`All food items have been set to ${amount}.`)
            setTimeout(() => {
                stateNode.forceUpdate()
            }, 500)
        }
    })
    hack("Set Cash", "Set your cash to a certain amount.", async () => {
        gameChecker()
        const { stateNode } = getReactHandler<CafeStateNode>()
        const amount = await InputTypes.integer("How much cash would you like?", 0, Infinity)
        stateNode.state.cafeCash = amount
        success(`Your cash has been set to ${amount}.`)
        setTimeout(() => {
            stateNode.forceUpdate()
        }, 500)
    })
})

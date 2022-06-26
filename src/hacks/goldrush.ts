import { success, InputTypes, error } from "../swal"
import { GoldRushStateNode } from "../types/GoldRushStateNode"
import { getReactHandler, inGame } from "../utils/hackHelperFunctions"
import { Category } from "./base/categories"
import { withCategory } from "./base/registry"

const gameChecker = () => {
    if (inGame("gold")) return
    error("You are not in the Gold Rush game. This hack only works in the Gold Rush game.")
}

withCategory(Category.GOLDRUSH, ({ hack /* , toggle */ }) => {
    hack("Set Cash", "Set your cash to a certain amount.", async () => {
        gameChecker()
        const { stateNode } = getReactHandler<GoldRushStateNode>()
        const amount = await InputTypes.integer("How much cash would you like?", 0, Infinity)
        stateNode.state.gold = amount
        success(`Your cash has been set to ${amount}.`)
        setTimeout(() => {
            stateNode.forceUpdate()
        }, 500)
    })
    hack("Set Everyone Else's Gold", "Set the gold of everyone but you to a specific amount", async () => {
        const gold = await InputTypes.integer("How much gold would you like to set everyone else to?", 0, Infinity)
        const { memoizedProps, stateNode } = getReactHandler<GoldRushStateNode>()

        const cache = {
            "": (_0x4a7e0e, _0x682a94, _0x5de38b) => {
                _0x682a94.cache = _0x5de38b.c
            }
        }

        const users = Object.keys((await Object.values<any>(window.webpackJsonp.push([[], cache, [[""]]]).cache)
            .find(
                (_0x39fd82) =>
                    _0x39fd82?.exports?.a?.put
            )
            .exports.a.put("https://fb.blooket.com/c/firebase/join", {
                id: stateNode.props.client.hostId,
                name: "Invisible".concat(((Math.random() * 65535) | 0).toString())
            })).data.host.c).filter(e => e !== memoizedProps.client.name)

        users.forEach(user => {
            memoizedProps.firebase.setVal({
                id: memoizedProps.client.hostId,
                path: `c/${memoizedProps.client.name}`,
                val: {
                    b: memoizedProps.client.blook,
                    g: stateNode.state.gold,
                    tat: `${user}:swap:${gold}`
                }
            })
        })

        success(`Everyone but you has been set to ${gold} gold.`)
    })
})

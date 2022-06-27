import { success, InputTypes, error } from "../swal"
import { encodeValues, getBlooks, getName, getReactHandler, getValues, inLobby, sellBlook } from "../utils/hackHelperFunctions"
import { Category } from "./base/categories"
import { withCategory } from "./base/registry"

withCategory(Category.GLOBAL, ({ hack, toggle }) => {
    hack("Add Tokens", "Add any amount of tokens from 0 to 500.", async () => {
        const { blooketBuild, secret } = getValues()
        const name = await getName()

        await fetch("https://api.blooket.com/api/users/add-rewards", {
            method: "PUT",
            credentials: "include",
            body: await encodeValues({
                addedTokens: await InputTypes.integer("Enter the amount of tokens to add.", 0, 499),
                addedXp: await InputTypes.integer("Enter the amount of XP to add.", 0, 300),
                name
            }, secret),
            headers: {
                "content-type": "application/json",
                "X-Blooket-Build": blooketBuild
            }
        })

        success("Max coins and max xp added to your account. Refresh the page to see the changes.")
    })
    hack("Sell Dupes", "Sell all duplicate items in your inventory.", async () => {
        const { blooketBuild, secret } = getValues()
        const name = await getName()

        const amounts = await getBlooks()
        for (const blook in amounts) {
            if (amounts[blook] > 1) {
                console.log(`Selling ${amounts[blook] - 1} ${blook}`)
                const sold = await sellBlook(blook, (amounts[blook] - 1), name, blooketBuild, secret)
                if (!sold.ok) throw new Error("Failed to sell blook")
            }
        }

        success("All duplicate items sold. Refresh the page to see the changes.")
    })
    hack("Get All Blooks Temporarily", "If you are on the lobby you will be able to use all of the blooks.", async () => {
        if (!inLobby()) {
            error("You don't seem to be on the blooks page. Join a game, and then use this hack while waiting in the lobby.")
            return
        }

        const reactHandler = getReactHandler()

        reactHandler.stateNode.setState({
            lockedBlooks: []
        })

        reactHandler.alternate.stateNode.setState({
            lockedBlooks: []
        })

        success("All blooks are now available.")
    })
    let autoAnswerQuestionsInterval
    toggle("Auto Answer Questions", (toggleState) => {
        if (toggleState) {
            autoAnswerQuestionsInterval = setInterval(() => {
                const { question } = getReactHandler().stateNode.state
                try {
                    question.correctAnswers = question.answers
                } catch {}
            })
            success("Every answer will now be correct.")
        } else {
            clearInterval(autoAnswerQuestionsInterval)
            success("Every answer will not be correct anymore.")
        }
    })
    const originalOpen = XMLHttpRequest.prototype.open
    toggle("Anti-Ban", (toggleState) => {
        if (toggleState) {
            XMLHttpRequest.prototype.open = (...args) => {
                if (!args[1].includes("suspend")) {
                    originalOpen.apply(this, args)
                }
            }
            success("Anti-Ban is now enabled.")
        } else {
            XMLHttpRequest.prototype.open = originalOpen
            success("Anti-Ban is now disabled.")
        }
    })
    hack("Remove Player", "Remove any player even if you are not the host.", async () => {
        const { stateNode } = getReactHandler()

        const cache = {
            "": (_0x4a7e0e, _0x682a94, _0x5de38b) => {
                _0x682a94.cache = _0x5de38b.c
            }
        }
        const users = (await Object.values<any>(window.webpackJsonp.push([[], cache, [[""]]]).cache)
            .find(
                (_0x39fd82) =>
                    _0x39fd82?.exports?.a?.put
            )
            .exports.a.put("https://fb.blooket.com/c/firebase/join", {
                id: stateNode.props.client.hostId,
                name: "Invisible".concat(((Math.random() * 65535) | 0).toString())
            })).data.host.c

        const selectedUser = Object.keys(users)[await InputTypes.select("Select a user to remove.", Object.keys(users))]

        function definePropertiesOnObject (objectToAddDefineTo, propertyname, value?) {
            const data: any = {}
            return (
                (data.value = value),
                (data.enumerable = true),
                (data.configurable = true),
                (data.writable = true),
                (propertyname in objectToAddDefineTo
                    ? Object.defineProperty(objectToAddDefineTo, propertyname, data)
                    : (objectToAddDefineTo[propertyname] = value),
                objectToAddDefineTo)
            )
        }

        if (stateNode.state.player) {
            stateNode.state.userToBlock = selectedUser
            let players = JSON.parse(JSON.stringify(stateNode.state.players))
            const playerIndex = players
                .map((player) => {
                    return player.name
                })
                .indexOf(selectedUser)

            let length = players.length

            if (playerIndex !== -1) {
                length = players[playerIndex].place
                players.splice(playerIndex, 1)
            }

            players = players.map((player) => {
                return definePropertiesOnObject(
                    definePropertiesOnObject({}, player),
                    {},
                    {
                        place: player.place > length
                            ? player.place - 1
                            : player.place
                    }
                )
            })

            stateNode.setState({
                players,
                userToBlock: ""
            })
        }

        stateNode.props.firebase.setVal(
            {
                id: stateNode.props.client.hostId,
                path: "bu/".concat(selectedUser),
                val: 1
            },
            () => {
                stateNode.props.firebase.removeVal(
                    stateNode.props.client.hostId,
                    "c/".concat(selectedUser)
                )
            }
        )

        success("Removed player.")
    })
    hack("End Game", "End the game.", async () => {
        const cache = {
            "": (_0x2a89db, _0x148f59, _0x158810) => {
                _0x148f59.cache = _0x158810.c
            }
        }
        Object.values<any>(window.webpackJsonp.push([[], cache, [[""]]]).cache)
            .find(
                (value) =>
                    value.exports &&
                value.exports.c &&
                value.exports.c.prototype.removeHost &&
                value.exports.c.prototype.removeHost
            )
            .exports.c.prototype.removeHost(
                JSON.parse(Object.values(sessionStorage)[0]).uid.split(":")[0]
            )

        success("The game has been ended.")
    })
})

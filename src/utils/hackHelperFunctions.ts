export const getValues = (): {
    blooketBuild: string
    secret: string
} => {
    try {
        // Yes I know this is gibberish, but it's just a way to get the values
        const value = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\("(.+?)"\)/.test(e.toString())).toString()
        return ({
            blooketBuild: value.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
            secret: value.match(/\(new TextEncoder\)\.encode\("(.+?)"\)/)[1]
        })
    } catch {
        throw new Error("Could not fetch auth details")
    }
}

export const encodeValues = async (body: object, secret: string) => {
    const d = window.crypto.getRandomValues(new Uint8Array(12))
    return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: d
    }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder()).encode(secret)), {
        name: "AES-GCM"
    }, !1, ["encrypt"]), (new TextEncoder()).encode(JSON.stringify(body))))).map(e => String.fromCharCode(e)).join(""))
}

export const getName = async () => (await (await fetch("https://api.blooket.com/api/users", {
    credentials: "include"
})).json()).name

export const getBlooks = async () => (await (await fetch("https://api.blooket.com/api/users", {
    credentials: "include"
})).json()).unlocks

export const sellBlook = async (blookName: string, quantity: number, playerName: string, blooketBuild: string, secret: string) =>
    await fetch(
        "https://api.blooket.com/api/users/sellblook", {
            method: "PUT",
            credentials: "include",
            headers: {
                "content-type": "application/json",
                "X-Blooket-Build": blooketBuild
            },
            body: await encodeValues({
                name: playerName,
                blook: blookName,
                numSold: quantity
            }, secret)
        }
    )

export const inLobby = () => document.location.pathname.split("/").includes("lobby")

export const inGame = (game: "dino" | "gold" | "hack" | "fish" | "rush" | "royale" | "defense" | "cafe" | "factory" | "racing" | "classic") => document.location.pathname.split("/").includes(game)

export const getReactHandler = <T = any, >(): { stateNode: T, [key: string]: any } => Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner

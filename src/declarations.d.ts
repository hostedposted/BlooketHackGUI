import { Category } from "./hacks/base/categories"

/* eslint-disable no-unused-vars */
declare global {
    type HackFunction = () => Promise<void> | void
    type ToggleFunction = (toggleState: boolean) => Promise<void> | void
    interface HackData {
        name: string
        description?: string
        onClick: HackFunction | ToggleFunction
        type: "hack" | "toggle"
        category: Category
    }
    interface Window {
        webpackJsonp: any;
    }
}

declare module "*.scss"

export {}

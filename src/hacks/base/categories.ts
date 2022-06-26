export enum Category {
    GLOBAL = "Global Hacks",
    CAFE = "Cafe Hacks",
    GOLDRUSH = "Gold Rush Hacks",
}

export const sortGroups = (groups: [Category, HackData[]][]): [Category, HackData[]][] => {
    const map = new Map<Category, HackData[]>()
    for (const key in Category) {
        const value = Category[key]
        const groupItem = groups.find(item => item[0] === value)
        if (groupItem) {
            map.set(groupItem[0], groupItem[1])
        }
    }
    return Array.from(map)
}

export const groupBy = <K, V> (list: Array<V>, keyGetter: (input: V) => K): [K, V[]][] => {
    const map = new Map<K, Array<V>>()
    list.forEach(item => {
        const key = keyGetter(item)
        const collection = map.get(key)
        if (!collection) {
            map.set(key, [item])
        } else {
            collection.push(item)
        }
    })
    return Array.from(map)
}

export function loadFromStorage(key, store = window.localStorage) {
    try {
        return JSON.parse(store.getItem(key))
    } catch {
        return null
    }
}
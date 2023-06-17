export function removeFromStorage(key, store = window.localStorage) {
    store.removeItem(key)
}
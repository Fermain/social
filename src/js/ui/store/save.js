export function saveToStorage(key, data, store = window.localStorage) {
    store.setItem(key, JSON.stringify(data))
}
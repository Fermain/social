import { extractQuery, routeByURL } from "../../router.js";
import * as store from "../store/index.js";

export function onBookmark({ target }) {
    const query = extractQuery(location.hash);
    const id = query.params.get("id");
    const bookmarks = store.load("bookmarks") || [];
    const bookmarkExists = bookmarks.includes(id);
    let updatedBookmarks = [];

    if (bookmarkExists) {
        updatedBookmarks = bookmarks.filter(bookmark => bookmark !== id)
    } else {
        updatedBookmarks = [
            ...bookmarks,
            id
        ]
    }

    target.classList.toggle("active", !bookmarkExists)

    store.save("bookmarks", updatedBookmarks);

    // Rehydrate!
    routeByURL(location.href)
}
import { onBookmark } from "../events/onBookmark.js";
import { trySetEvent } from "../utilities/index.js";

export function bookmarkListener() {
    trySetEvent("button.bookmark", "click", onBookmark)
}
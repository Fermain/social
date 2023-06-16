import { onComment } from "../events/onComment.js";
import { trySetEvent } from "../utilities/index.js";

export function commentListener() {
    trySetEvent("form.comment", "submit", onComment)
}
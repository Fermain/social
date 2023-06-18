import { getTemplate, loadTemplate } from "../../template.js";
import { react, bookmark } from "../listeners/index.js";
import * as store from "../store/index.js";

const standardReactions = ['👍', '👎', '➕', '❤️', '😱', '⚠️'];

export function prepareReactions(reactions = []) {
    return [
        ...reactions.map(reaction => ({
            ...reaction,
            className: "btn-outline-primary"
        })),
        ...standardReactions.filter(symbol => !reactions.map(reaction => reaction.symbol).includes(symbol)).map(symbol => ({
            symbol,
            count: 0,
            className: symbol !== "⚠️" ? "btn-outline-secondary" : "btn-danger"
        }))
    ]
}

export async function loadReactions(reactions = [], postData = { id: 0 }) {
    const { id } = postData;
    const reactionMenu = await loadTemplate("reaction/menu", {}, ".reactions", true);
    const bookmarkButton = await getTemplate("bookmark/button");
    bookmarkButton.classList.toggle("active", (store.load("bookmarks") || []).includes(String(id)));
    reactionMenu.append(bookmarkButton);

    const items = prepareReactions(reactions);
    const reactionButtons = await Promise.all(items.map(reaction => getTemplate("reaction/button", reaction)));
    reactionMenu.append(...reactionButtons)
    react();
    bookmark();
}
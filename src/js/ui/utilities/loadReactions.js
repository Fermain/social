import { getTemplate, loadTemplate } from "../../template.js";
import { react, bookmark } from "../listeners/index.js";
import * as store from "../store/index.js";

export async function loadReactions(reactions = [], postData = { id: 0 }) {
    const { id } = postData;
    const reactionMenu = await loadTemplate("reaction/menu", {}, ".reactions", true);
    const bookmarkButton = await getTemplate("bookmark/button");
    bookmarkButton.classList.toggle("active", store.load("bookmarks").includes(String(id)));
    reactionMenu.append(bookmarkButton);

    const reactionButtons = await Promise.all(reactions.map(reaction => getTemplate("reaction/button", reaction)));
    reactionMenu.append(...reactionButtons)
    react();
    bookmark();
}
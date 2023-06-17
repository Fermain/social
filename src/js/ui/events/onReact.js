import { reactToPost } from "../../api/post/react.js";
import { routeByURL } from "../../router.js";
import { errorDialog } from "../dialog/error.js";

export async function onReact({ target } = new MouseEvent()) {
    const post = target.closest(".post[id]");
    const symbol = target.dataset.symbol || "👍";
    if (!post) throw new Error("Could not find a post ID to react to");

    try {
        await reactToPost(post.id, symbol);
        routeByURL(location.href)
    } catch (error) {
        errorDialog(error);
    }
}
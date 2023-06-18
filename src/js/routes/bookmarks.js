import { loadTemplate, getTemplateWithPromise } from "../template.js";
import * as store from "../ui/store/index.js";
import { getPost } from "../api/post/get.js";
import { authGuard } from "../router.js";
import { errorDialog } from "../ui/dialog/error.js";

export async function bookmarksRoute() {
    authGuard();
    const page = await loadTemplate("bookmark/page");
    const bookmarks = store.load("bookmarks");
    try {
        const posts = await Promise.all(bookmarks.map(bookmark => {
            return getTemplateWithPromise("post/thumbnail", getPost(bookmark))
        }));
        page.append(...posts);
    } catch (err) {
        errorDialog(err)
    }
}
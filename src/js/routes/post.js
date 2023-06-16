import { get } from "../api/post/index.js";
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";
import { postDelete, react } from "../ui/listeners/index.js";
import { loadComments } from "../ui/utilities/index.js";

export async function postRoute(id) {
    authGuard();

    const postData = await get(id);

    const post = await loadTemplate("post/page", postData);

    postDelete();
    react();
    loadComments(post, postData)
}
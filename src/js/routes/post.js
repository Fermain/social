import { get } from "../api/post/index.js";
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";
import { postDelete } from "../ui/listeners/index.js";
import { loadComments, loadReactions } from "../ui/utilities/index.js";

export async function postRoute(id) {
    authGuard();

    const postData = await get(id);

    const post = await loadTemplate("post/page", postData);

    postDelete();
    await loadReactions(postData.reactions, postData);
    await loadComments(post, postData);
}
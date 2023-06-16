import { loadTemplate } from "../../template.js";
import { commentListener } from "../listeners/commentListener.js";

export async function loadComments(element = new HTMLElement(), postData = {}) {
    const { comments, author, id } = postData;

    const commentSection = element.querySelector(".comments");

    if (commentSection) {
        await Promise.all(comments.map(comment => {
            return loadTemplate("comment/thumbnail", {
                ...comment,
                author,
            }, ".comments-list", false);
        }))
    }

    await loadTemplate("comment/form", {
        author,
        postId: id
    }, ".comment-form", false);

    commentListener()
}
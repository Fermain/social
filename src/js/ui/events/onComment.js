import { commentOnPost } from "../../api/post/comment.js";
import { loadTemplate } from "../../template.js";
import { errorDialog } from "../dialog/error.js";
import { buttonLoader, formHandler } from "../utilities/index.js";

export async function onComment(event = new SubmitEvent()) {
    const { replyToId, body } = formHandler(event);
    const id = event.target.dataset.post;
    const submit = event.target.querySelector("button[type=submit]");
    const { resetButton } = buttonLoader(submit, "Commenting...");

    try {
        const comment = await commentOnPost(id, body, replyToId)
        loadTemplate("comment/thumbnail", comment, ".comments-list", false)
        event.target.reset()
    } catch (err) {
        errorDialog(err)
    } finally {
        resetButton()
    }
}
import { get } from "../api/post/index.js";
import { loadTemplate } from "../template.js";
import { onNewTag } from "../ui/events/onNewTag.js";
import { newTag, postForm } from "../ui/listeners/index.js";

export async function createEditPostRoute(id) {
  const postData = id ? await get(id) : { tags: [] };

  const form = await loadTemplate("post/form", postData);

  newTag();
  postForm();

  // Not a final implementation
  // I intend to implement <templates> soon
  postData.tags.reverse().forEach((tag, index) => {
    if (index) {
      onNewTag(
        {
          target: document.querySelector(".tags button"),
        },
        tag
      );
    } else {
      document.querySelector(".tags .tag input").value = tag.trim();
    }
  });

  new SimpleMDE({
    element: form.querySelector("textarea[name=body]"),
    forceSync: true,
  });

  document.title = "Create/Edit post | Live Social";
}

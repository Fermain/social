import { getProfile } from "../../api/profile/get.js";
import { me } from "../../api/utilities/index.js"
import { DEFAULT_PROFILE_PARAMS } from "../../constants.js";
import { authGuard } from "../../router.js";
import { loadTemplate } from "../../template.js";

export async function profilePageRoute(name) {
    authGuard()

    const user = name ? await getProfile(name) : me();

    loadTemplate("profile/page", user)

    const { posts } = await getProfile(user.name, {
        ...DEFAULT_PROFILE_PARAMS,
        _posts: true
    });

    posts.map(post => ({ ...post, author: { ...post.author, ...user }})).forEach(post => {
        loadTemplate("post/list", { ...post }, ".posts", false);
    })
}
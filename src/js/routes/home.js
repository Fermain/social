import { listPosts } from "../api/post/list.js";
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";

export async function homeRoute() {
    loadTemplate("home");
    authGuard("You must be logged into to view your feed.")
    const posts = await listPosts();
    
    posts.filter(post => Boolean(post.title)).forEach(post => {
        loadTemplate("post/list", { ...post}, ".posts", false);
    })
}
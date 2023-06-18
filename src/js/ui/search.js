import { listPosts } from "../api/post/list.js";

export async function search(query = "") {
    const posts = await listPosts({
        limit: 100,
        _author: true
    });

    return searchPosts(query, posts);
}

export function searchPosts(query, posts) {
    function criteria(post = {
        title: "",
        tags: [""],
        body: ""
    }) {
        query = query ? query.toLocaleLowerCase() : "";
        const titleMatches = post.title.toLocaleLowerCase().includes(query);
        const tagsMatch = post.tags.map(tag => tag.toLocaleLowerCase()).includes(query);
        const bodyMatches = post.body && post.body.toLocaleLowerCase().includes(query);
        return titleMatches || tagsMatch || bodyMatches;
    }

    return posts.filter(criteria)
}


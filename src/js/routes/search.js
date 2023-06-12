import { loadTemplate } from "../template.js";
import { search } from "../ui/search.js";

export async function searchRoute(query) {
    const template = "search";
    await loadTemplate(template, { query });
    const results = await search(query);
    results.map(post => {
        loadTemplate("post/thumbnail", { ...post }, ".results", false)
    })
    document.querySelector(".search .spinner-grow").classList.add("d-none");
}
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";
import { search } from "../ui/search.js";

export async function searchRoute(query) {
  const template = "search";
  await loadTemplate(template, { query });
  authGuard("You must be logged in to search posts");
  const results = await search(query);
  if (results.length) {
    results.map((post) => {
      loadTemplate("post/thumbnail", { ...post }, ".results", false);
    });
  } else {
    loadTemplate(
      "alert/warning",
      { message: `No results found for ${query}.` },
      ".search .results",
      true
    );
  }
  document.querySelector(".search .spinner-grow").classList.add("d-none");

  document.title = "Search | Live Social";
}

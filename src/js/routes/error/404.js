import { loadTemplate } from "../../template.js";

export async function notFoundRoute() {
    await loadTemplate("error/404");
}
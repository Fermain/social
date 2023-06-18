import { loadTemplate } from "../../template.js";
import { clearChildren } from "./clearChildren.js";

export async function loader() {
    await loadTemplate("progress", {}, ".notifications")
    return {
        removeLoader: () => {
            const parent = document.querySelector(".notifications");
            clearChildren(parent);
        }
    }
}
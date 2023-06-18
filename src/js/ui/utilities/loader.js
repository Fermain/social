import { loadTemplate } from "../../template.js";
import { clearChildren } from "./clearChildren.js";

export async function loader() {
    const parent = document.querySelector(".notifications");
    clearChildren(parent);

    await loadTemplate("progress", {
        percent: 100
    }, ".notifications")
    return {
        removeLoader: async () => {
            clearChildren(parent);
            await loadTemplate("progress", {
                percent: 0
            }, ".notifications")
        }
    }
}
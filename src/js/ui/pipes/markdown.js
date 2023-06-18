import { marked } from "../../../../node_modules/marked/lib/marked.esm.js";

export function markdownPipe(input = "") {
    return marked(input, {
        mangle: false,
        headerIds: false
    });
}
import { clearChildren } from "./ui/utilities/clearChildren.js";
import { parse } from "./ui/utilities/parse.js";

export async function loadTemplate(name = "notFound", variables = {}, selector = "main", replace = true) {
    const target = document.querySelector(selector);
    if (!target) throw new Error("Target not found in the document");

    const html = await getTemplate(name, variables);

    if (replace) {
        clearChildren(target)
    }

    target.append(html)
    return html
}

export function replaceTemplateVariables(template = "", variables = {}) {
    return template.replace(/\{\{([\w.]+)\}\}/g, function (m, key) {
        return key.split('.').reduce((o, k) => (o || {})[k], variables) || "";
    });
}

export async function getTemplate(name = "notFound", variables = {}) {
    const response = await fetch(`/src/html/${name}.html`);
    const template = await response.text();
    const html = parse(replaceTemplateVariables(template, { ...variables }));
    return html
}

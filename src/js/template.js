import { clearChildren } from "./ui/utilities/clearChildren.js";
import { parse } from "./ui/utilities/parse.js";
import * as pipes from "./ui/pipes/index.js";

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

export function replaceTemplateVariables(template = "", templateVariables = {}) {
    return template.replace(/\{\{([\w.|\w]+)\}\}/g, (match, key) => {
        const [variablePath, pipe] = key.split('|');
        const pathParts = variablePath.split('.');
        const rawValue = pathParts.reduce((obj, pathPart) => (obj || {})[pathPart], templateVariables);

        if (pipe && typeof pipes[pipe] === 'function') {
            return pipes[pipe](rawValue);
        }

        return rawValue || "";
    });
}

export async function getTemplate(name = "notFound", variables = {}) {
    const response = await fetch(`/src/html/${name}.html`);
    const template = await response.text();
    const html = parse(replaceTemplateVariables(template, { ...variables }));
    return html
}

export async function getTemplateWithPromise(name = "notFound", promise = new Promise()) {
    const data = await promise || {};
    return getTemplate(name, data);
}
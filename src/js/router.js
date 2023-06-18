import * as routes from "./routes/index.js";
import { ui } from "./ui/index.js";

export async function router() {
    await updateRoute()
    window.addEventListener("hashchange", ({ newURL }) => routeByURL(newURL));
}

export function authGuard(message = "You must be logged in to view this page.") {
    if (!localStorage.token) {
        alert(message);
        redirect("#/login")
    }
}

export async function updateRoute() {
    await routeByURL(window.location.href);
}

export async function redirect(path = "") {
    path = path.charAt(0) === "#" ? path : `#${path}`;
    window.history.pushState("", undefined, path)
    await updateRoute()
}

export function stripHash(input = "") {
    return input.replace(/#/gm, "")
}

export function extractQuery(input = "") {
    const [hash, search] = input.split("?")
    return {
        hash: stripHash(hash),
        params: new URLSearchParams(search)
    }
}

export async function routeByURL(url) {
    url = new URL(url);
    const { hash, params } = extractQuery(url.hash)
    route(hash, params);
}

export async function route(location, params = new URLSearchParams()) {
    switch (location.toLocaleLowerCase()) {
        case "/":
        case "":
            await routes.home()
            break;
        case "/feed":
            await routes.feed()
            break;
        case "/login":
            await routes.login()
            break;
        case "/register":
            await routes.register()
            break;
        case "/profile":
            await routes.profile.page(params.get("name"))
            break;
        case "/profile/edit":
            await routes.profile.edit(params.get("name"))
            break;
        case "/search":
            await routes.search(params.get("query"))
            break;
        case "/post":
            await routes.post(params.get("id"))
            break;
        case "/post/edit":
        case "/post/create":
            await routes.createEditPost(params.get("id"))
            break;
        case "/bookmarks":
            await routes.bookmarks();
            break;
        default:
            await routes.notFound()
    }

    ui()
}
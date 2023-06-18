import { extractQuery } from "../../router.js";

export function activeNav() {
    const nav = document.querySelector("nav.nav-custom");
    const { hash } = extractQuery(location.hash);

    if (nav) {
        nav.querySelectorAll('.nav-link').forEach(link => {
            console.log(link.href);
            if (link.href) {
                const url = new URL(link.href);
                link.classList.toggle("active", hash === url.pathname)
            }
        })
    }
}
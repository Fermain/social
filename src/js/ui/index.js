import * as listeners from "./listeners/index.js";
import { activeNav, authVisibility, highlighting, ownerVisibility } from "./utilities/index.js";

export function ui() {
    authVisibility();
    ownerVisibility();
    highlighting();
    activeNav();
    listeners.navigate();
    listeners.logout();
    listeners.search();
}
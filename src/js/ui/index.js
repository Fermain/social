import * as listeners from "./listeners/index.js";
import { authVisibility, highlighting, ownerVisibility } from "./utilities/index.js";

export function ui() {
    authVisibility();
    ownerVisibility();
    highlighting()
    listeners.navigate();
    listeners.logout();
    listeners.search();
}
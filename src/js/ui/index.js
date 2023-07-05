import * as listeners from "./listeners/index.js";
import {
  authVisibility,
  highlighting,
  ownerVisibility,
  profileVisibility,
} from "./utilities/index.js";

export function ui() {
  authVisibility();
  ownerVisibility();
  profileVisibility();
  highlighting();
  listeners.navigate();
  listeners.logout();
  listeners.search();
}

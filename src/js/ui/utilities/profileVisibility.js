import { me } from "../../api/utilities/index.js";

export function profileVisibility() {
  const user = me();
  document.querySelectorAll("[data-profile-owner]").forEach((element) => {
    const owner = element.closest("[data-profile]").dataset.profile;

    if (owner) {
      if (element.dataset.profileOwner === String(user.name === owner)) {
        element.classList.add("active");
      }
    }
  });
}

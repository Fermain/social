import { getProfile } from "../../api/profile/get.js";
import { me } from "../../api/utilities/me.js";
import { authGuard } from "../../router.js";
import { loadTemplate } from "../../template.js";
import { profileForm } from "../../ui/listeners/index.js";

export async function profileEditRoute(name) {
  authGuard();

  const user = name ? await getProfile(name) : me();

  document.title = "Edit profile | Live Social";

  await loadTemplate("profile/form", user);

  profileForm();
}

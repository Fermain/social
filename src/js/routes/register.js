import { loadTemplate } from "../template.js";
import { register } from "../ui/listeners/index.js";

export async function registerRoute() {
  const template = "register";
  await loadTemplate(template);
  register();

  document.title = "Register | Live Social";
}

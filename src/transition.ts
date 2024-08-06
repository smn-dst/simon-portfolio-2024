import Swup from "swup";
import { initPage } from "./main";

import ScrollTrigger from "gsap/ScrollTrigger";

const swup = new Swup({
  containers: ["#swup"],
});

if (document.readyState === 'complete') {
  initPage();
}

// document.addEventListener("DOMContentLoaded", initCurrentPage);
swup.hooks.on("visit:start", () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
swup.hooks.on("visit:end", () => {
  ScrollTrigger.refresh();
});

// swup.hooks.before('content:replace', () => initPage());
swup.hooks.on("page:view", initPage);


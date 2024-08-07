import "./styles/main.scss";
import "./styles/projects.scss";
import "./styles/about.scss";
import { init } from "./meshes/waterBackground";

import splt from "spltjs";
import "splitting/dist/splitting.css";

import anime from "animejs/lib/anime.es.js";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { log } from "three/examples/jsm/nodes/Nodes.js";

gsap.registerPlugin(ScrollTrigger);

export const initPage = () => {
  splitType();
  initScrollImages();

  applyImageEffectsSolware();
  applyImageEffectsProxinnov();
  applyImageEffectsBryte();
  applyImageEffectsAgori();
  applyImageEffectsArtdam();
  applyImageEffectsOpteven();

  initIconsIndex();
  initIconsAbout();

  const waterContainer = document.querySelector<HTMLElement>("#container");
  if (waterContainer) {
    init(waterContainer);
  }
};
initPage();

function splitType() {
  splt({ reveal: true });

  anime({
    targets: ".reveal",
    translateY: ["100%", 0],
    opacity: [0, 1],
    loop: 1,
    delay: anime.stagger(10),
    duration: 1000,
    easing: "cubicBezier(.5,-0.7,0,1.030)",
  });
}

function initScrollImages() {
  const projects = document.querySelector("[data-page='projects']");

  if (projects) {
    const revealContainers = document.querySelectorAll(
      "[data-page='projects'] .section-projects .reveal-img"
    );

    if (revealContainers.length === 0) {
      console.error("No elements with class 'reveal-img' found.");
      return;
    }

    gsap.utils.toArray(revealContainers).forEach((container) => {
      const img = (container as HTMLElement).querySelector<HTMLElement>(
        ".section-projects .reveal-img img"
      );
      if (!img) {
        console.error("No image found in container:", container);
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container as HTMLElement,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      });

      tl.set(container as HTMLElement, { opacity: 1 });
      tl.from(container as HTMLElement, { duration: 0.65, xPercent: 0 });
      tl.from(img, { duration: 0.65, xPercent: 45, scale: 1.4, delay: -0.65 });
    });

    // Ajout de la classe safari pour les éléments link-icon dans Opteven
    const icons = projects.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        icon.classList.add("safari");
      }
    });
  }
}

function applyImageEffectsSolware() {
  const solwarePage = document.querySelector("[data-page='solware']");
  if (solwarePage) {
    const imageContainer = solwarePage.querySelector(".main-image");
    const image =
      solwarePage.querySelector<HTMLVideoElement>(".main-image video");
    const overlay = solwarePage.querySelector(".overlay-img");

    if (image) {
      image.load();
      image.play();
    }

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: solwarePage,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - 0.6 * progress;
          const borderRadius = 200 * progress;
          gsap.set([imageContainer, overlay, image], {
            scale: scale,
            borderRadius: `${borderRadius}px`,
            y: `${50 * progress}px`,
          });
        },
      },
    });

    // Ajout de la classe safari pour les éléments link-icon dans Solware
    const icons = solwarePage.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        icon.classList.add("safari");
      }
    });

    gsap.utils.toArray(".image-container").forEach((container) => {
      const img = (container as HTMLElement).querySelector("img");
      if (img) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container as HTMLElement,
            scrub: true,
            pin: false,
          },
        });
        tl.fromTo(
          img,
          { yPercent: -20, ease: "none" },
          { yPercent: 20, ease: "none" }
        );
      }
    });
  }
}

function applyImageEffectsProxinnov() {
  const proxinnovPage = document.querySelector("[data-page='proxinnov']");
  if (proxinnovPage) {
    const imageContainer = proxinnovPage.querySelector(".main-image");
    const image =
      proxinnovPage.querySelector<HTMLVideoElement>(".main-image video");
    const overlay = proxinnovPage.querySelector(".overlay-img");

    if (image) {
      image.load();
      image.play();
    }

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: proxinnovPage,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - 0.4 * progress;
          const borderRadius = 150 * progress;
          gsap.set([imageContainer, overlay, image], {
            scale: scale,
            borderRadius: `${borderRadius}px`,
            y: `${50 * progress}px`,
          });
        },
      },
    });

    // Ajout de la classe safari pour les éléments link-icon dans Proxinnov
    const icons = proxinnovPage.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        icon.classList.add("safari");
      }
    });

    gsap.utils.toArray(".image-container").forEach((container) => {
      const img = (container as HTMLElement).querySelector("img");
      if (img) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container as HTMLElement,
            scrub: true,
            pin: false,
          },
        });
        tl.fromTo(
          img,
          { yPercent: -20, ease: "none" },
          { yPercent: 20, ease: "none" }
        );
      }
    });
  }
}

function applyImageEffectsBryte() {
  const brytePage = document.querySelector("[data-page='bryte']");
  if (brytePage) {
    const imageContainer = brytePage.querySelector(".main-image");
    const image =
      brytePage.querySelector<HTMLVideoElement>(".main-image video");
    const overlay = brytePage.querySelector(".overlay-img");

    if (image) {
      image.load();
      image.play();
    }

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: brytePage,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - 0.4 * progress;
          const borderRadius = 150 * progress;
          gsap.set([imageContainer, overlay, image], {
            scale: scale,
            borderRadius: `${borderRadius}px`,
            y: `${50 * progress}px`,
          });
        },
      },
    });

    // Ajout de la classe safari pour les éléments link-icon dans Bryte
    const icons = brytePage.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        icon.classList.add("safari");
      }
    });

    gsap.utils.toArray(".image-container").forEach((container) => {
      const img = (container as HTMLElement).querySelector("img");
      if (img) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container as HTMLElement,
            scrub: true,
            pin: false,
          },
        });
        tl.fromTo(
          img,
          { yPercent: -20, ease: "none" },
          { yPercent: 20, ease: "none" }
        );
      }
    });
  }
}

function applyImageEffectsAgori() {
  const agoriPage = document.querySelector("[data-page='agori']");
  if (agoriPage) {
    const imageContainer = agoriPage.querySelector(".main-image");
    const image =
      agoriPage.querySelector<HTMLVideoElement>(".main-image video");
    const overlay = agoriPage.querySelector(".overlay-img");

    if (image) {
      image.load();
      image.play();
    }

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: agoriPage,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - 0.4 * progress;
          const borderRadius = 150 * progress;
          gsap.set([imageContainer, overlay, image], {
            scale: scale,
            borderRadius: `${borderRadius}px`,
            y: `${50 * progress}px`,
          });
        },
      },
    });

    // Ajout de la classe safari pour les éléments link-icon dans Agori
    const icons = agoriPage.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        icon.classList.add("safari");
      }
    });

    gsap.utils.toArray(".image-container").forEach((container) => {
      const img = (container as HTMLElement).querySelector("img");
      if (img) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container as HTMLElement,
            scrub: true,
            pin: false,
          },
        });
        tl.fromTo(
          img,
          { yPercent: -20, ease: "none" },
          { yPercent: 20, ease: "none" }
        );
      }
    });
  }
}

function applyImageEffectsArtdam() {
  const artdamPage = document.querySelector("[data-page='artdam']");
  if (artdamPage) {
    const imageContainer = artdamPage.querySelector(".main-image");
    const image =
      artdamPage.querySelector<HTMLVideoElement>(".main-image video");
    const overlay = artdamPage.querySelector(".overlay-img");

    if (image) {
      image.load();
      image.play();
    }

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: artdamPage,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - 0.4 * progress;
          const borderRadius = 150 * progress;
          gsap.set([imageContainer, overlay, image], {
            scale: scale,
            borderRadius: `${borderRadius}px`,
            y: `${50 * progress}px`,
          });
        },
      },
    });

    // Ajout de la classe safari pour les éléments link-icon dans Artdam
    const icons = artdamPage.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        icon.classList.add("safari");
      }
    });

    gsap.utils.toArray(".image-container").forEach((container) => {
      const img = (container as HTMLElement).querySelector("img");
      if (img) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container as HTMLElement,
            scrub: true,
            pin: false,
          },
        });
        tl.fromTo(
          img,
          { yPercent: -20, ease: "none" },
          { yPercent: 20, ease: "none" }
        );
      }
    });
  }
}

function applyImageEffectsOpteven() {
  const optevenPage = document.querySelector("[data-page='opteven']");
  if (optevenPage) {
    const imageContainer = optevenPage.querySelector(".main-image");
    const image =
      optevenPage.querySelector<HTMLVideoElement>(".main-image video");
    const overlay = optevenPage.querySelector(".overlay-img");

    if (image) {
      image.load();
      image.play();
    }

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: optevenPage,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - 0.4 * progress;
          const borderRadius = 150 * progress;
          gsap.set([imageContainer, overlay, image], {
            scale: scale,
            borderRadius: `${borderRadius}px`,
            y: `${50 * progress}px`,
          });
        },
      },
    });

    // Ajout de la classe safari pour les éléments link-icon dans Opteven
    const icons = optevenPage.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        icon.classList.add("safari");
      }
    });

    gsap.utils.toArray(".image-container").forEach((container) => {
      const img = (container as HTMLElement).querySelector("img");
      if (img) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container as HTMLElement,
            scrub: true,
            pin: false,
          },
        });
        tl.fromTo(
          img,
          { yPercent: -20, ease: "none" },
          { yPercent: 20, ease: "none" }
        );
      }
    });
  }
}

function initIconsIndex() {
  const index = document.querySelector("[data-page='main']");

  if (index) {
    // Ajout de la classe safari pour les éléments link-icon dans about
    const icons = index.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    console.log(icons);
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        console.log('class in safari');
        icon.classList.add("safari");
      }
    });
  }
}

function initIconsAbout() {
  const about = document.querySelector("[data-page='about']");

  if (about) {
    // Ajout de la classe safari pour les éléments link-icon dans about
    const icons = about.querySelectorAll<HTMLElement>(
      ".btn .btn-project .icon"
    );
    icons.forEach((icon) => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        icon.classList.add("safari");
      }
    });
  }
}

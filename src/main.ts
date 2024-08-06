import "./styles/main.scss";
import "./styles/projects.scss";
import "./styles/about.scss";
import { init } from "./meshes/waterBackground";

import splt from "spltjs";
import "splitting/dist/splitting.css";

import anime from "animejs/lib/anime.es.js";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

  const waterContainer = document.querySelector<HTMLElement>("#container");
  if (waterContainer) {
    init(waterContainer);
  }
};
initPage();

function splitType() {
  // Utiliser Splitting.js pour ajouter des éléments révélables
  splt({
    reveal: true,
  });

  // Animer les éléments révélables avec anime.js
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
  const projects = document.querySelector<HTMLElement>("[data-page='projects']");

  if (projects) {
    const revealContainers = document.querySelectorAll<HTMLElement>(
      "[data-page='projects'] .section-projects .reveal-img"
    );

    if (revealContainers.length === 0) {
      console.error("No elements with class 'reveal-img' found.");
      return;
    }

    gsap.utils.toArray(revealContainers).forEach((container: HTMLElement) => {
      const image = container.querySelector<HTMLElement>(
        ".section-projects .reveal-img img"
      );
      if (!image) {
        console.error("No image found in container:", container);
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container as gsap.DOMTarget,
          start: "top 92%", // Adjust as necessary
          toggleActions: "play none none reverse",
        },
      });

      tl.set(container, { opacity: 1 });
      tl.from(container, { duration: 0.65, xPercent: 0 });
      tl.from(image, {
        duration: 0.65,
        xPercent: 45,
        scale: 1.4,
        delay: -0.65,
      });
    });
  }
}

function applyImageEffectsSolware() {
  const solwarePage = document.querySelector<HTMLElement>("[data-page='solware']");

  if (solwarePage) {
    const imageContainer = solwarePage.querySelector<HTMLElement>(".main-image");
    const image = solwarePage.querySelector<HTMLElement>(".main-image video");
    const overlay = solwarePage.querySelector<HTMLElement>(".overlay-img");

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: solwarePage as gsap.DOMTarget,
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

    gsap.utils.toArray('.image-container').forEach((container: HTMLElement) => {
      const img = container.querySelector<HTMLElement>('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container as gsap.DOMTarget,
          scrub: true,
          pin: false,
        }
      });
    
      tl.fromTo(img, {
        yPercent: -20,
        ease: 'none'
      }, {
        yPercent: 20,
        ease: 'none'
      });
    });
  }
}

function applyImageEffectsProxinnov() {
  const proxinnovPage = document.querySelector<HTMLElement>("[data-page='proxinnov']");

  if (proxinnovPage) {
    const imageContainer = proxinnovPage.querySelector<HTMLElement>(".main-image");
    const image = proxinnovPage.querySelector<HTMLElement>(".main-image video");
    const overlay = proxinnovPage.querySelector<HTMLElement>(".overlay-img");

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: proxinnovPage as gsap.DOMTarget,
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

    gsap.utils.toArray('.image-container').forEach((container: HTMLElement) => {
      const img = container.querySelector<HTMLElement>('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container as gsap.DOMTarget,
          scrub: true,
          pin: false,
        }
      });
    
      tl.fromTo(img, {
        yPercent: -20,
        ease: 'none'
      }, {
        yPercent: 20,
        ease: 'none'
      });
    });
  }
}

function applyImageEffectsBryte() {
  const brytePage = document.querySelector<HTMLElement>("[data-page='bryte']");

  if (brytePage) {
    const imageContainer = brytePage.querySelector<HTMLElement>(".main-image");
    const image = brytePage.querySelector<HTMLElement>(".main-image video");
    const overlay = brytePage.querySelector<HTMLElement>(".overlay-img");

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: brytePage as gsap.DOMTarget,
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


    gsap.utils.toArray('.image-container').forEach((container: HTMLElement) => {
      const img = container.querySelector<HTMLElement>('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container as gsap.DOMTarget,
          scrub: true,
          pin: false,
        }
      });
    
      tl.fromTo(img, {
        yPercent: -20,
        ease: 'none'
      }, {
        yPercent: 20,
        ease: 'none'
      });
    });
  }
}

function applyImageEffectsAgori() {
  const agoriPage = document.querySelector<HTMLElement>("[data-page='agori']");

  if (agoriPage) {
    const imageContainer = agoriPage.querySelector<HTMLElement>(".main-image");
    const image = agoriPage.querySelector<HTMLElement>(".main-image video");
    const overlay = agoriPage.querySelector<HTMLElement>(".overlay-img");

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: agoriPage as gsap.DOMTarget,
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


    gsap.utils.toArray('.image-container').forEach((container: HTMLElement) => {
      const img = container.querySelector<HTMLElement>('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container as gsap.DOMTarget,
          scrub: true,
          pin: false,
        }
      });
    
      tl.fromTo(img, {
        yPercent: -20,
        ease: 'none'
      }, {
        yPercent: 20,
        ease: 'none'
      });
    });
  }
}

function applyImageEffectsArtdam() {
  const artdamPage = document.querySelector<HTMLElement>("[data-page='artdam']");

  if (artdamPage) {
    const imageContainer = artdamPage.querySelector<HTMLElement>(".main-image");
    const image = artdamPage.querySelector<HTMLElement>(".main-image video");
    const overlay = artdamPage.querySelector<HTMLElement>(".overlay-img");

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: artdamPage as gsap.DOMTarget,
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


    gsap.utils.toArray('.image-container').forEach((container: HTMLElement) => {
      const img = container.querySelector<HTMLElement>('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container as gsap.DOMTarget,
          scrub: true,
          pin: false,
        }
      });
    
      tl.fromTo(img, {
        yPercent: -20,
        ease: 'none'
      }, {
        yPercent: 20,
        ease: 'none'
      });
    });
  }
}

function applyImageEffectsOpteven() {
  const optevenPage = document.querySelector<HTMLElement>("[data-page='opteven']");

  if (optevenPage) {
    const imageContainer = optevenPage.querySelector<HTMLElement>(".main-image");
    const image = optevenPage.querySelector<HTMLElement>(".main-image video");
    const overlay = optevenPage.querySelector<HTMLElement>(".overlay-img");

    gsap.to([imageContainer, overlay, image], {
      scrollTrigger: {
        trigger: optevenPage as gsap.DOMTarget,
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


    gsap.utils.toArray('.image-container').forEach((container: HTMLElement) => {
      const img = container.querySelector<HTMLElement>('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container as gsap.DOMTarget,
          scrub: true,
          pin: false,
        }
      });
    
      tl.fromTo(img, {
        yPercent: -20,
        ease: 'none'
      }, {
        yPercent: 20,
        ease: 'none'
      });
    });
  }
}
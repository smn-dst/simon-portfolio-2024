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

  const waterContainer = document.querySelector("#container");
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
      const image = container.querySelectorAll(
        ".section-projects .reveal-img img"
      );
      if (!image) {
        console.error("No image found in container:", container);
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
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
  const solwarePage = document.querySelector("[data-page='solware']");

  if (solwarePage) {
    const imageContainer = solwarePage.querySelector(".main-image");
    const image = solwarePage.querySelector(".main-image video");
    const overlay = solwarePage.querySelector(".overlay-img");

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

    gsap.utils.toArray('.image-container').forEach(container => {
      const img = container.querySelector('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
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
  const proxinnovPage = document.querySelector("[data-page='proxinnov']");

  if (proxinnovPage) {
    const imageContainer = proxinnovPage.querySelector(".main-image");
    const image = proxinnovPage.querySelector(".main-image video");
    const overlay = proxinnovPage.querySelector(".overlay-img");

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

    gsap.utils.toArray('.image-container').forEach(container => {
      const img = container.querySelector('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
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
  const brytePage = document.querySelector("[data-page='bryte']");

  if (brytePage) {
    const imageContainer = brytePage.querySelector(".main-image");
    const image = brytePage.querySelector(".main-image video");
    const overlay = brytePage.querySelector(".overlay-img");

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


    gsap.utils.toArray('.image-container').forEach(container => {
      const img = container.querySelector('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
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
  const agoriPage = document.querySelector("[data-page='agori']");

  if (agoriPage) {
    const imageContainer = agoriPage.querySelector(".main-image");
    const image = agoriPage.querySelector(".main-image video");
    const overlay = agoriPage.querySelector(".overlay-img");

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


    gsap.utils.toArray('.image-container').forEach(container => {
      const img = container.querySelector('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
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
  const artdamPage = document.querySelector("[data-page='artdam']");

  if (artdamPage) {
    const imageContainer = artdamPage.querySelector(".main-image");
    const image = artdamPage.querySelector(".main-image video");
    const overlay = artdamPage.querySelector(".overlay-img");

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


    gsap.utils.toArray('.image-container').forEach(container => {
      const img = container.querySelector('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
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
  const optevenPage = document.querySelector("[data-page='opteven']");

  if (optevenPage) {
    const imageContainer = optevenPage.querySelector(".main-image");
    const image = optevenPage.querySelector(".main-image video");
    const overlay = optevenPage.querySelector(".overlay-img");

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


    gsap.utils.toArray('.image-container').forEach(container => {
      const img = container.querySelector('img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
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

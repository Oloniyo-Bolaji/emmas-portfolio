"use client";


import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }
  return link.hash;
}

function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: elem,
        offsetY: 60,
      },
      ease: "power2.inOut",
    });
  }
}


function useSmoothScroll(setShowMenu) {
  useEffect(() => {
    const anchors = document.querySelectorAll("a[href^='#']");

    const handleClick = (e) => {
      const anchor = e.currentTarget;
      const hash = getSamePageAnchor(anchor);
      if (hash) {
        scrollToHash(hash, e);

        // auto close on mobile
        if (window.innerWidth < 1024 && typeof setShowMenu === "function") {
          setShowMenu(false);
        }
      }
    };

    anchors.forEach((a) => a.addEventListener("click", handleClick));

    scrollToHash(window.location.hash);

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, [setShowMenu]);
}



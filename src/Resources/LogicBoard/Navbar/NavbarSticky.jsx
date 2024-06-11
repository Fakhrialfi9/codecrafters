import { useEffect, useState } from "react";

function NavbarSticky() {
  const [nonStickyNavbar, setNonStickyNavbar] = useState(null);

  useEffect(() => {
    const navbar = document.querySelector(".MainNavbar");
    setNonStickyNavbar(navbar);

    const scrollTrigger = 100; // Set the desired position value

    window.onscroll = function () {
      const currentScrollPosition = window.pageYOffset;

      if (nonStickyNavbar && currentScrollPosition > scrollTrigger) {
        nonStickyNavbar.classList.add("sticky");
      } else if (nonStickyNavbar) {
        nonStickyNavbar.classList.remove("sticky");
      }
    };
  }, [nonStickyNavbar]);

  return {
    nonStickyNavbar,
  };
}

export default NavbarSticky;

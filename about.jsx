document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     TOPBAR ROTATING TEXT
  ========================= */

  const topbarText = document.getElementById("hdTopbarText");

  if (topbarText) {

    const topbarMessages = [
      "DROP 27 IS LIVE",
      "SIGN UP HERE TO STAY UPDATED ON UPCOMING DROPS"
    ];

    let topbarIndex = 0;

    setInterval(() => {

      topbarText.classList.add("is-changing");

      setTimeout(() => {

        topbarIndex = (topbarIndex + 1) % topbarMessages.length;

        topbarText.textContent = topbarMessages[topbarIndex];

        topbarText.classList.remove("is-changing");

      }, 350);

    }, 3500);

  }

  /* =========================
     SHOP MENU
  ========================= */

  const shopToggle = document.getElementById("shopToggle");
  const shopMenu = document.getElementById("shopMenu");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");

  if (
    shopToggle &&
    shopMenu &&
    menuOverlay &&
    menuClose
  ) {

    shopToggle.addEventListener("click", () => {
      shopMenu.classList.add("is-open");
      menuOverlay.classList.add("is-open");
      shopToggle.classList.add("is-active");

      document.body.style.overflow = "hidden";
    });

    menuClose.addEventListener("click", closeMenu);
    menuOverlay.addEventListener("click", closeMenu);

    function closeMenu() {
      shopMenu.classList.remove("is-open");
      menuOverlay.classList.remove("is-open");
      shopToggle.classList.remove("is-active");

      document.body.style.overflow = "";
    }

  }

  /* =========================
     ABOUT SUBNAV
  ========================= */

  const subnavLinks = document.querySelectorAll(".about-subnav a");
  const sections = document.querySelectorAll(".about-section");

  function showAboutSection(id) {

    sections.forEach(section => {
      section.classList.toggle(
        "is-visible",
        section.id === id
      );
    });

    subnavLinks.forEach(link => {

      const isActive =
        link.getAttribute("href") === "#" + id;

      link.classList.toggle("is-active", isActive);

    });

  }

  const initialHash =
    window.location.hash.replace("#", "") ||
    "our-approach";

  showAboutSection(initialHash);

  subnavLinks.forEach(link => {

    link.addEventListener("click", function (event) {

      event.preventDefault();

      const id =
        this.getAttribute("href").replace("#", "");

      history.pushState(null, "", "#" + id);

      showAboutSection(id);

    });

  });

});

function imageBackground() {
  const imageSelector = document.querySelectorAll('.image-bg');

  if (imageSelector.length) {
    imageSelector.forEach(el => {
      const imageBg = el.querySelector('img');
      const imageSrc = imageBg.src;
      el.style.backgroundImage = `url( ${imageSrc} )`;
    });
  }
}

function scrollAddClass() {
  let scrollpos = window.scrollY;
  const header = document.querySelector(".navbar");
  const header_height = header.offsetHeight;

  const add_class_on_scroll = () => header.classList.add("navbar--scrolled");
  const remove_class_on_scroll = () => header.classList.remove("navbar--scrolled");

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    scrollpos >= header_height ? add_class_on_scroll() : remove_class_on_scroll();
  });
}

function anchorLinkHandler(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: "smooth"
  });

  const checkIfDone = setInterval(function () {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

function buildLinkAnchors() {
  const linksToAnchors = document.querySelectorAll('a[href^="#"]');

  linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));
}


export {
  imageBackground,
  scrollAddClass,
  buildLinkAnchors
}

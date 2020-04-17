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


export {
  imageBackground,
  scrollAddClass
}
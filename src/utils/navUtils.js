export const setNav = index => {
  const parentNav = document.getElementById('nav');
  const menuSliderClick = document.getElementById('nav-slide-click');
  const links = ['projects-nav-link', 'cv-nav-link'];

  const parentStart = parentNav.getBoundingClientRect().x;
  const theEl = document.getElementById(links[index]);

  const menuSliderMarginLeft = theEl.getBoundingClientRect().x - parentStart;
  const menuSliderWidth = theEl.offsetWidth;

  menuSliderClick.style.width = menuSliderWidth + 'px';
  menuSliderClick.style.marginLeft = menuSliderMarginLeft + 'px';
};

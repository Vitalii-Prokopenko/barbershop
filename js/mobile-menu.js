(() => {
  // Mobile menu container
  const mobileMenu = document.querySelector('.js-menu-container');
  // Open mobile menu button (burger)
  const openMenuBtn = document.querySelector('.js-open-menu');
  // Close mobile menu button (cross)
  const closeMenuBtn = document.querySelector('.js-close-menu');
  // Menu link ABOUT with mobile menu close function
  const menuLinkAbout = document.querySelector('.js-menu-link-about');
  // Menu link SERVICES AND PRICES with mobile menu close function
  const menuLinkServices = document.querySelector('.js-menu-link-services');
  // Menu link BARBERS with mobile menu close function
  const menuLinkBarbers = document.querySelector('.js-menu-link-barbers');
  // Menu link CONTACTS with mobile menu close function
  const menuLinkContacts = document.querySelector('.js-menu-link-contacts');
  // Menu ONLINE-BOOKING button
  const menuBookingBtn = document.querySelector('.js-menu-booking-btn');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  menuLinkAbout.addEventListener('click', toggleMenu);
  menuLinkServices.addEventListener('click', toggleMenu);
  menuLinkBarbers.addEventListener('click', toggleMenu);
  menuLinkContacts.addEventListener('click', toggleMenu);

  menuBookingBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

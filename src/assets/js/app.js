document.addEventListener("DOMContentLoaded", () => {

  const xl = matchMedia('(max-width: 1024px)');

  class Menu {
    constructor(menuElement, buttonElement) {
      this.menu = typeof menuElement === "string" ? document.querySelector(menuElement) : menuElement;
      this.button = typeof buttonElement === "string" ? document.querySelector(buttonElement) : buttonElement;
      this.overlay = document.createElement('div');
      this.overlay.hidden = true;
      this._init();
    }

    _init() {
      document.body.appendChild(this.overlay);
      this.overlay.classList.add('overlay');

      this.overlay.addEventListener('click', this.toggleMenu.bind(this));
      this.button.addEventListener('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
      this.menu.classList.toggle('menu--open');
      this.button.classList.toggle('menu-button--active');
      this.overlay.hidden = !this.overlay.hidden;

      if (this.isMenuOpen()) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }

    closeMenu() {
      this.menu.classList.remove('header__nav--active');
      this.button.classList.remove('header__menu-button--active');
      this.overlay.hidden = true;

      this.enableScroll();
    }

    isMenuOpen() {
      return this.menu.classList.contains('menu--open');
    }

    disableScroll() {
      // Get the current page scroll position;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      // if any scroll is attempted, set this to the previous value;
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    }

    enableScroll() {
      window.onscroll = function () { };
    }
  }

  const menu = document.getElementById('menu');
  const menuButton = document.getElementById('menu-button');

  if (menu && menuButton) {
    new Menu(menu, menuButton);
  }

  const header = document.getElementById('header');

  let handler;

  function scrollAdd() {
    /* ... */
    handler = throttle(function (event) {
      scrollHeader();
    }, 500);
    document.addEventListener('scroll', handler, false);
  }

  function scrollRemove() {
    /* ... */
    document.removeEventListener('scroll', handler, false);
  }

  if (xl.matches) {
    scrollAdd();
    document.removeEventListener('scroll', scrollHeader);
  } else {
    document.addEventListener('scroll', scrollHeader);
    scrollRemove();
  }

  xl.addEventListener('change', () => {
    if (xl.matches) {
      document.removeEventListener('scroll', scrollHeader);
      scrollAdd();
    } else {
      document.addEventListener('scroll', scrollHeader);
      scrollRemove();
    }
  });

  function disableScroll() {
    // Get the current page scroll position;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    document.documentElement.style.setProperty('scroll-behavior', 'auto');

    // if any scroll is attempted, set this to the previous value;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    document.documentElement.style.setProperty('scroll-behavior', null);
    window.onscroll = function () { };
  }

  var prevScrollpos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  function scrollHeader() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScrollPos < 0) {
      currentScrollPos = 0;
      prevScrollpos = 0;
    };
    if (prevScrollpos < 0) {
      prevScrollpos = 0;
      currentScrollPos = 0;
    };
    const num = xl.matches ? 50 : 100;
    if (currentScrollPos > num) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    };
    if (prevScrollpos >= currentScrollPos) {
      header.classList.remove('out');
    } else {
      header.classList.add('out');
    };
    prevScrollpos = currentScrollPos;
  };

  function initHeader() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const num = xl.matches ? 50 : 150;
    if (currentScrollPos > num) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  }

  initHeader();

  function throttle(func, ms) {
    let isThrottled = false,
      savedArgs,
      savedThis;

    function wrapper() {

      if (isThrottled) { // (2);
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments); // (1);

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false; // (3);
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }


  setTimeout(() => {
    const inputs = document.querySelectorAll('input,textarea');
    if (inputs.length) {
      inputs.forEach(el => {
        el.value ? el.classList.add('havetext') : el.classList.remove('havetext');
        el.addEventListener('input', function () {
          this.value ? this.classList.add('havetext') : this.classList.remove('havetext');
        });
        el.addEventListener('focus', function () {
          this.parentElement.classList.remove('error');
        })
      });
    }
  }, 0)

  const accordionButtons = document.querySelectorAll('.accordion-button');

  if (accordionButtons.length) {
    accordionButtons.forEach(el => {
      el.addEventListener('click', function () {
        this.classList.toggle('active');
      })
    })
  }

  function updSwiperNumericPagination() {
    const parent = this.el.closest('.swiper').parentElement;

    if (parent) {
      const swiperCounter = parent.querySelector('.swiper-counter');
      if (swiperCounter) {
        swiperCounter.innerHTML = '<span class="count">' + (this.realIndex + 1) + '</span>/<span class="total">' + this.el.slidesQuantity + "</span>";
      }

      const activeSlide = this.slides[this.activeIndex];
      const reviewName = parent.querySelector('.ab-name');

      if (reviewName && activeSlide) {
        const {name} = activeSlide.dataset;
        if (name) {
          reviewName.innerHTML = `<span>${name}</span>`;
        }
      }

      const locationName = parent.querySelector('.ab-location');

      if (locationName && activeSlide) {
        const {location} = activeSlide.dataset;
        if (location) {
          locationName.innerHTML = `<span>${location}</span>`;
        }
      }
    }

    
  }

  setTimeout(() => {
    const swipers = document.querySelectorAll('.ab-swiper-wrapper');

    if (swipers.length) {
      swipers.forEach(el => {
        const swiper = el.querySelector('.swiper');
        swiper.slidesQuantity = swiper.querySelectorAll(".swiper-slide").length;
        const next = el.querySelector('.next');
        const prev = el.querySelector('.prev');
        new Swiper(swiper, {
          loop: true,
          slidesPerView: 'auto',
          autoHeight: true,
          grabCursor: true,
          speed: 500,
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          on: {
            init: updSwiperNumericPagination,
            slideChange: updSwiperNumericPagination
          }
        })
        
      })
    }
  }, 0)




});












document.addEventListener("DOMContentLoaded", () => {

  const xl = matchMedia('(max-width: 1024px)');

  class Menu {
    constructor(menuElement, buttonElement, buttons) {
      this.menu = typeof menuElement === "string" ? document.querySelector(menuElement) : menuElement;
      this.button = typeof buttonElement === "string" ? document.querySelector(buttonElement) : buttonElement;
      this.buttons = buttons;
      this.overlay = document.createElement('div');
      this.overlay.hidden = true;
      this._init();
    }

    _init() {
      document.body.appendChild(this.overlay);
      this.overlay.classList.add('overlay');

      this.overlay.addEventListener('click', this.toggleMenu.bind(this));
      this.button.addEventListener('click', this.toggleMenu.bind(this));
      if (this.buttons.length) {
        this.buttons.forEach(el => {
          el.addEventListener('click', this.closeMenu.bind(this));
        })
      }
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
      this.menu.classList.remove('menu--open');
      this.button.classList.remove('menu-button--active');
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
  const menuClose = document.getElementById('menuClose');
  const menuButtons = document.querySelectorAll('.menu-get-quote')

  if (menu && menuButton) {
    new Menu(menu, menuButton, menuButtons);
    if (menuClose) {
      menuClose.addEventListener('click', () => {
        menuButton.click()
      })
    }
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

  document.addEventListener('scroll', scrollHeader);

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

  window.addEventListener('pageshow', function (event) {
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
  });

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
        const { name } = activeSlide.dataset;
        if (name) {
          reviewName.innerHTML = `<span>${name}</span>`;
        }
      }

      const locationName = parent.querySelector('.ab-location');

      if (locationName && activeSlide) {
        const { location } = activeSlide.dataset;
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

    const prSwipers = document.querySelectorAll('.pr-swiper');

    if (prSwipers.length) {
      prSwipers.forEach(el => {
        let init = false;
        let swiperPr = null;
        function swiperCard() {
          if (xl.matches) {
            if (!init) {
              init = true;
              swiperPr = new Swiper(el, {
                slidesPerView: "auto",
              });
            }
          } else if (init) {
            swiperPr.destroy();
            init = false;
          }
        }
        swiperCard();
        window.addEventListener("resize", swiperCard);
      })
    }

    const revSwipers = document.querySelectorAll('.revs-swiper, .disting-swiper, .advantages-swiper');

    if (revSwipers.length) {
      revSwipers.forEach(el => {
        let init = false;
        let swiperPr = null;
        function swiperCard() {
          if (xl.matches) {
            if (!init) {
              init = true;
              swiperPr = new Swiper(el, {
                slidesPerView: "auto",
                freeMode: true,
              });
            }
          } else if (init) {
            swiperPr.destroy();
            init = false;
          }
        }
        swiperCard();
        window.addEventListener("resize", swiperCard);
      })
    }

    const whySwipers = document.querySelectorAll('.why-swiper');

    if (whySwipers.length) {
      whySwipers.forEach(el => {
        new Swiper(el, {
          slidesPerView: "auto",
          freeMode: true,
          grabCursor: true,
        });
      })
    }
  }, 0)


  const nowYear = document.getElementById('nowYear');

  if (nowYear) {
    const date = new Date().getFullYear();
    nowYear.innerHTML = date;
  }

  function customHover(arr = []) {
    arr.forEach(query => {
      let elems = null;
      if (typeof query === 'string') {
        elems = document.querySelectorAll(query);
      } else {
        elems = query
      }
      if (elems.length) {
        elems.forEach(el => {
          el.addEventListener('pointerenter', function () {
            elems.forEach(btn => {
              btn.classList.add('not-active');
              this.classList.remove('hover');
            })
            this.classList.add('hover');
          })
          el.addEventListener('pointerleave', function () {
            elems.forEach(btn => {
              btn.classList.remove('not-active');
              this.classList.remove('hover');
            })
            this.classList.remove('hover');
          })
        })
      }
    })
  }

  function scopedHover(arr = []) {
    if (arr.length) {
      arr.forEach(el => {
        if (el.length) {
          el.forEach(list => {
            customHover([list.querySelectorAll('li')])
          })
        }
      })
    }
  }

  setTimeout(() => {
    customHover([
      '.serv-list > li',
      '.mov > li',
      '.footer-socials.custom-hover > li',
      '.contacts-info.custom-hover > li',
      '.footer-contacts.custom-hover > li',
      '.menu-contacts.custom-hover > li',
      '.menu-socials.custom-hover > li',
      '.header-sublist.custom-hover > li',
      '.movingTips-tabs > li',
      '.article-socials.custom-hover > li',
      ".faq-accord.custom-hover > li",
    ])

    scopedHover([
      document.querySelectorAll('.footer-item .custom-hover'),
    ])
  }, 0);

  setTimeout(() => {

    const menuButtons = document.querySelectorAll('.menu-item');

    function clickHandler() {
      if (!event.target.closest('.menu-item')) {
        menuButtons.forEach(b => {
          b.classList.remove('not-active');
          b.classList.remove('hover')
        })
        document.removeEventListener('click', clickHandler)
      }
    }

    if (menuButtons.length) {
      menuButtons.forEach(el => {
        el.addEventListener('pointerenter', function () {
          if (!xl.matches) {
            menuButtons.forEach(btn => {
              btn.classList.add('not-active')
            })
            this.classList.add('hover');
          }
        })
      })
      menuButtons.forEach(el => {
        el.addEventListener('pointerleave', function () {
          if (!xl.matches) {
            menuButtons.forEach(btn => {
              btn.classList.remove('not-active')
            })
            this.classList.remove('hover');
          }

        })
      })
    }

    function clickHandlerMenu() {
      const btn = this.querySelector('.menu-item-button');
      const isSublist = event.target.closest('.menu-sublist')
      if (btn && !isSublist) {
        event.preventDefault();
      }

      if (this.classList.contains('hover')) {
        menuButtons.forEach(b => {
          b.classList.remove('not-active');
          b.classList.remove('hover')
        })
        return;
      }

      menuButtons.forEach(btn => {
        btn.classList.add('not-active');
        btn.classList.remove('hover');
        if (this.classList.contains('hover')) {
          btn.classList.remove('hover');
        }
      })

      this.classList.add('hover');
      document.addEventListener('click', clickHandler)
    }

    if (xl.matches) {
      menuButtons.forEach(el => {
        el.addEventListener('click', clickHandlerMenu)
      })
    } else {
      menuButtons.forEach(el => {
        el.removeEventListener('click', clickHandlerMenu)
      })
    }

    xl.addEventListener('change', () => {
      if (xl.matches) {
        menuButtons.forEach(el => {
          el.addEventListener('click', clickHandlerMenu)
        })
      } else {
        menuButtons.forEach(el => {
          el.removeEventListener('click', clickHandlerMenu)
        })
      }
    })

    const menuButtons2 = document.querySelectorAll('.menu-sublist li');

    if (menuButtons2.length) {
      menuButtons2.forEach(el => {
        el.addEventListener('pointerenter', function () {
          menuButtons2.forEach(btn => {
            btn.classList.add('not-active')
          })
          this.classList.add('hover');
        })
      })
      menuButtons2.forEach(el => {
        el.addEventListener('pointerleave', function () {
          menuButtons2.forEach(btn => {
            btn.classList.remove('not-active')
          })
          this.classList.remove('hover');

        })
      })
    }
  }, 0)


  function modalHandler() {
    const modal = document.querySelector(`${this.dataset?.modal}`) || this
    if (modal.classList.contains('regModal') && modal.hidden) {
      disableScroll();
    } else {
      enableScroll();
    }
    if (modal) {
      if (modal.hidden) {
        modal.hidden = !modal.hidden
        modal.style.setProperty('pointer-events', 'auto');
        setTimeout(() => {
          modal.style.opacity = 1
        }, 10);
      } else {
        modal.style.opacity = 0
        modal.style.setProperty('pointer-events', null);
        const numb = Number(getComputedStyle(modal).transitionDuration.match(/(\d+\.\d+)|(\d+)/g)[0]);
        if (numb > 0) {
          modal.addEventListener('transitionend', hideaftertransition);
        } else {
          modal.hidden = true
        }
      }
    }
  }

  const regModal = document.querySelectorAll('.regModal');

  if (regModal) {
    regModal.forEach(el => {
      el.addEventListener('click', function () {
        if (event.target.classList.contains('regModal')) {
          modalHandler.apply(this);
        }
      });
      const closeButton = el.querySelectorAll('.close-button');
      if (closeButton.length) {
        closeButton.forEach(button => {
          button.addEventListener('click', () => {
            modalHandler.apply(el);
          });
        })
      }
    });
  }


  function hideaftertransition() {
    this.hidden = true
    this.removeEventListener('transitionend', hideaftertransition);
  }

  document.addEventListener('click', () => {
    const dataModal = event.target.closest('[data-modal]');
    if (dataModal) {
      modalHandler.apply(dataModal);
    }
  })

  setTimeout(() => {

    if (!xl.matches) {
      const menuList = document.querySelectorAll(".marquee");
      menuList.forEach(baner => {
        const reverse = baner.getAttribute("data-reverse");
        const container = baner.querySelector(".marquee-container")
        const list = baner.querySelector(".marquee-list");
        const fragment = document.createDocumentFragment();
        [...list.children].forEach(i => fragment.appendChild(i.cloneNode(true)));
        list.appendChild(fragment);

        const clone = list.cloneNode(true);
        container.appendChild(clone);

        const tl = gsap.timeline({
          repeat: -1,
        });

        tl.to(list, {
          x: reverse !== null ? "100%" : "-100%",
          ease: "none",
          duration: list.children.length * 5,
        }, "sin")
        tl.to(clone, {
          x: reverse !== null ? "100%" : "-100%",
          ease: "none",
          duration: list.children.length * 5,
        }, "sin");

      })
    }

    const banerList = document.querySelectorAll(".baner");
    banerList.forEach(baner => {
      const reverse = baner.getAttribute("data-reverse");
      const container = baner.querySelector(".baner__container")
      const list = baner.querySelector(".baner__list");
      const fragment = document.createDocumentFragment();
      [...list.children].forEach(i => fragment.appendChild(i.cloneNode(true)));
      list.appendChild(fragment);

      const clone = list.cloneNode(true);
      container.appendChild(clone);

      const tl = gsap.timeline({
        repeat: -1,
      });

      tl.to(list, {
        x: reverse !== null ? "100%" : "-100%",
        ease: "none",
        duration: list.children.length * 10,
      }, "sin")
      tl.to(clone, {
        x: reverse !== null ? "100%" : "-100%",
        ease: "none",
        duration: list.children.length * 10,
      }, "sin");

    })


  }, 0)

  const tabs = document.querySelectorAll('.faq-tabs');

  if (tabs.length) {
    tabs.forEach(tab => {
      const buttons = tab.querySelectorAll('.faq-button');
      const content = tab.querySelector('.faq-content');
      if (buttons.length && content) {

        content.addEventListener('click', function () {
          const btn = event.target.closest('.accordion-button');
          if (btn) {
            btn.classList.toggle('active');
          }
        })

        buttons.forEach(btn => {
          btn.addEventListener('click', function () {
            buttons.forEach(el => {
              el.classList.remove('active');
            })
            this.classList.add('active');
            if (this.nextElementSibling) {
              content.innerHTML = this.nextElementSibling.innerHTML
            }

            customHover([
              '.faq-content .faq-accord > li',
            ])

          })
        })

        buttons[0].click();

      }
    })
  }

  const scrolledObj = document.querySelectorAll('[data-scroll]');

  if (scrolledObj.length) {
    scrolledObj.forEach(el => {
      el.addEventListener('click', function () {
        const sc = document.querySelector(this.dataset.scroll)
        if (sc) {
          const header = document.querySelector('header');
          let headerH = null;
          if (header) {
            headerH = header.getBoundingClientRect().height;
          }
          const yOffset = headerH ? -headerH : -200;
          const onMedia = xl.matches ? 0 : 50;
          const y = sc.getBoundingClientRect().top + window.pageYOffset + yOffset - onMedia;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      })
    })
  }

  const localeEn = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 0
  };

  const dates = document.querySelectorAll('.date-input');

  if (dates.length) {
    dates.forEach(el => {
      const date = new AirDatepicker(el, {
        container: xl.matches ? '' : el.parentElement,
        isMobile: xl.matches,
        autoClose: true,
        minDate: new Date(),
        locale: localeEn,
        dateFormat: "dd.MM.yy",
        onShow: () => {
          date.$el.classList.add('havetext');
        },
        onHide: () => {
          if (!date.$el.value) {
            date.$el.classList.remove('havetext');
          } else {
            date.$el.classList.add('havetext');
          }
        },
        onSelect: () => {
          if (!date.$el.value) {
            date.$el.classList.remove('havetext');
          } else {
            date.$el.classList.add('havetext');
          }
        }
      });
    });

  }

  const calcButton = document.querySelector('.calc-plus button');


  if (calcButton) {
    let num = 1;
    calcButton.addEventListener('click', function () {
      const cloneStop = document.getElementById('cloneStop');
      if (cloneStop) {
        const cloneNum = cloneStop.querySelector('.cloneNum');
        const inputs = cloneStop.querySelectorAll('input');
        if (inputs.length) {
          inputs.forEach(el => {
            if (/\d+/.test(el.name)) {
              el.name = el.name.replace(/\d+/, num);
            } else {
              el.name = el.name + num;
            }
          })
        }
        cloneNum.innerHTML = num;
        this.parentElement.insertAdjacentHTML('beforebegin', cloneStop.innerHTML);
        num++;
      }

    })

    document.addEventListener('click', function () {
      const deleteBtn = event.target.closest('.calc-delete');
      if (deleteBtn) {
        deleteBtn.parentElement.remove();

        const locs = document.querySelectorAll('.calc-form .calc-loc .cloneNum');

        if (locs.length) {
          num = 1;
          locs.forEach(loc => {
            const parent = loc.closest('.calc-loc');

            if (parent) {
              const inputs = parent.querySelectorAll('input');
              if (inputs.length) {
                inputs.forEach(el => {
                  if (/\d+/.test(el.name)) {
                    el.name = el.name.replace(/\d+/, num);
                  } else {
                    el.name = el.name + num;
                  }
                })
              }
              loc.innerHTML = num;
              num++;
            }
          })
        } else {
          num = 1;
          const cloneNum = cloneStop.querySelector('.cloneNum');
          if (cloneNum) {
            cloneNum.innerHTML = num;
          }
        }
      }
    })
  }

  var x, i, j, l, ll, selElmnt, a, b, c, p;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    var placeholder = x[i].dataset.placeholder;
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items custom-hover select-hide");

    if (placeholder) {
      p = document.createElement("DIV");
      p.setAttribute("class", "select-placeholder");
      p.innerHTML = placeholder;
      b.appendChild(p);

    }
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl, sel;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        sel = this.parentNode.previousSibling.classList.add('select-selected--active')
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  customHover(
    [
      '.select-items > div'
    ]
  )

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

  const weWorkingButton = document.querySelectorAll('.weWorking-button-sm');

  function mapHandling() {
    if (!event.target.closest('.hover')) {
      weWorkingButton.forEach(btn => {
        btn.classList.remove('hover');
      })
      document.removeEventListener('click', mapHandling)
    }
  }

  if (weWorkingButton.length) {
    weWorkingButton.forEach(el => {
      el.addEventListener('click', function () {
        weWorkingButton.forEach(btn => {
          btn.classList.remove('hover');
        })
        this.classList.add('hover');

        if (this.classList.contains('hover')) {
          document.addEventListener('click', mapHandling)
        }
      })
    })
  }

  const switches = document.querySelectorAll('.switch input');

  if (switches.length) {
    switches.forEach(el => {

      el.addEventListener('change', function () {
        if (this.checked === true) {
          this.parentElement.classList.add('checked');
        }
        if (this.checked === false) {
          this.parentElement.classList.remove('checked');
        }
        const accord = this.closest('.custom-accord');

        if (accord) {
          accord.classList.toggle('checked')
        }
      });
    })
  }

  setTimeout(() => {
    const ranges = document.querySelectorAll('.slider-range')
    if (ranges.length) {
      ranges.forEach(el => {
        let valueInput = [];
        const min = el.parentElement.querySelector('.min');
        const max = el.parentElement.querySelector('.max');

        const range = new rSlider({
          target: el,
          values: { min: +el.dataset.min || 0, max: +el.dataset.max || 100 },
          step: +el.dataset.step || 10,
          scale: true,
          labels: true,
          tooltip: true,
          set: el.dataset.set ? [+el.dataset.set] : [],
          onChange: (value) => {
            valueInput = typeof value === 'string' ? value.split(',') : [value, 100];
            if (min) {
              min.value = valueInput[0];
            }
            if (max) {
              max.value = valueInput[1];
            }
          }
        });

        const inputs = el.parentElement.querySelectorAll('input');
        const maxValue = range.conf.values[range.conf.values.length - 1] + '.00';
        const minValue = range.conf.values[0] + '.00';

        if (inputs.length) {
          inputs.forEach(el => {
            const regEx = new RegExp('[0-9]+', 'g');
            el.addEventListener('keypress', (event) => {
              if (event.keyCode == 46 || event.keyCode == 8) {
                //do nothing
              }
              else {
                if (event.keyCode < 48 || event.keyCode > 57) {
                  event.preventDefault();
                }
              }
            })
            el.addEventListener('input', function () {
              const value = this.value;
              if (!regEx.test(value)) {
                this.value = '';
              }
            })
            el.addEventListener('blur', function () {
              if (this.value.trim() === '') {
                if (this.classList.contains('min')) {
                  this.value = minValue;
                }
                if (this.classList.contains('max')) {
                  this.value = maxValue;
                }
              } else {
                const values = range.getValue().split(',');
                if (this.classList.contains('min')) {
                  range.setValues(+this.value, +values[1]);
                }
                if (this.classList.contains('max')) {
                  range.setValues(+values[0], +this.value);
                }
              }
            })
          })
        }

      })
    }
  }, 0);

});
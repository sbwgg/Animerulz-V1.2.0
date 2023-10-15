// The Slideshow class.
class Slideshow {
    constructor(el) {
        
        this.DOM = {el: el};
      
        this.config = {
          slideshow: {
            delay: 4000,
            pagination: {
              duration: 3,
            }
          }
        };
        
        // Set the slideshow
        this.init();
      
    }
    init() {
      
      var self = this;
      
      // Charmed title
    //   this.DOM.slideTitle = this.DOM.el.querySelectorAll('.slide-title');
    //   this.DOM.slideTitle.forEach((slideTitle) => {
    //     charming(slideTitle);
    //   });
      
      // Set the slider
      this.slideshow = new Swiper (this.DOM.el, {
          
          loop: true,
          autoplay: {
            delay: this.config.slideshow.delay,
            disableOnInteraction: false,
          },
          speed: 500,
          preloadImages: true,
          updateOnImagesReady: true,
          
          // lazy: true,
          // preloadImages: false,
          pagination: {
            el: '.slideshow-pagination',
            clickable: true,
            bulletClass: 'slideshow-pagination-item',
            bulletActiveClass: 'active',
            clickableClass: 'slideshow-pagination-clickable',
            modifierClass: 'slideshow-pagination-',
            renderBullet: function (index, className) {
              
              var slideIndex = index,
                  number = (index <= 8) ? '0' + (slideIndex + 1) : (slideIndex + 1);
              
            },
          },

          // Navigation arrows
          navigation: {
            nextEl: '.slideshow-navigation-button.next',
            prevEl: '.slideshow-navigation-button.prev',
          },

          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        
          on: {
            init: function() {
              self.animate('next');
            },
          }
        
        });
      
        // Init/Bind events.
        this.initEvents();
        
    }
    initEvents() {
        
        this.slideshow.on('paginationUpdate', (swiper, paginationEl) => this.animatePagination(swiper, paginationEl));
        //this.slideshow.on('paginationRender', (swiper, paginationEl) => this.animatePagination());

        this.slideshow.on('slideNextTransitionStart', () => this.animate('next'));
        
        this.slideshow.on('slidePrevTransitionStart', () => this.animate('prev'));
            
    }
    animate(direction = 'next') {
      
        // Get the active slide
        this.DOM.activeSlide = this.DOM.el.querySelector('.swiper-slide-active'),
      
        // Reverse if prev  
      
        // Get old slide
        this.DOM.oldSlide = direction === "next" ? this.DOM.el.querySelector('.swiper-slide-prev') : this.DOM.el.querySelector('.swiper-slide-next');
        // if (this.DOM.oldSlide) {
        //   // Get parts
        //   this.DOM.oldSlideTitle = this.DOM.oldSlide.querySelector('.slide-title'),
        //   this.DOM.oldSlideTitleLetters = this.DOM.oldSlideTitle.querySelectorAll('span'); 
        //   // Animate
        //   this.DOM.oldSlideTitleLetters.forEach((letter,pos) => {
        //     TweenMax.to(letter, .3, {
        //       ease: Quart.easeIn,
        //       delay: (this.DOM.oldSlideTitleLetters.length-pos-1)*.04,
        //       y: '50%',
        //       opacity: 0
        //     });
        //   });
        // }
      
        // Animate title
      
        // Animate background
        // TweenMax.to(this.DOM.activeSlideImg, 1.5, {
        //     ease: Expo.easeOut,
        //     startAt: {x: direction === 'next' ? 200 : -200},
        //     x: 0,
        // });
      
        //this.animatePagination()
    
    }
    animatePagination(swiper, paginationEl) {
            
      // Animate pagination
      this.DOM.paginationItemsLoader = paginationEl.querySelectorAll('.pagination-separator-loader');
      this.DOM.activePaginationItem = paginationEl.querySelector('.slideshow-pagination-item.active');
      this.DOM.activePaginationItemLoader = this.DOM.activePaginationItem.querySelector('.pagination-separator-loader');
      
      
      // Reset and animate
        TweenMax.set(this.DOM.paginationItemsLoader, {scaleX: 0});
        TweenMax.to(this.DOM.activePaginationItemLoader, this.config.slideshow.pagination.duration, {
          startAt: {scaleX: 0},
          scaleX: 1,
        });
      
      
    }
    
}


if(window.innerWidth < 700){
    let slideShowDivs = document.querySelectorAll('.new-dubbed-container.big-anime');
    slideShowDivs.forEach(element => {
        element.setAttribute('class', 'new-dubbed-container big-anime swiper-slide slide');
    });
    new Slideshow(document.querySelector('.slideshow'));
}

// document.getElementsByClassName("swiper-slide")[0].removeAttribute("style");



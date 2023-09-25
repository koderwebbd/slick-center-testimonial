//Adding by KoderWeb

  theme.NewTestimonialsSection = new function () {
    this.onSectionLoad = function (container) {
      this.namespace = theme.namespaceFromSection(container);
      this.$testimonialContainer = $('.new-testimonials-slider', container);
      this.$testimonialDotArrow = $('.new-testimonials', container);

      this.$testimonialContainer
      .slick({
          slidesToScroll: 1,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '10px',
        infinite: true,
        arrows: true,
        dots: true,
      speed: 200,
      nextArrow: this.$testimonialDotArrow.find('.slick-button-next'),
          prevArrow: this.$testimonialDotArrow.find('.slick-button-prev'),
          appendDots: this.$testimonialDotArrow.find('.slick-slider-dots'),
        responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            variableWidth: true,
            speed: 200
          }

        }
        ]

      });




    };

    this.onSectionUnload = function (container) {
      $('.slick-slider', container).each(function () {
        $(this).slick('unslick').off('init');
      });
    };

    this.onBlockSelect = function (block) {
      var blockSlideIndex = $(block).data('slick-index');
      $(block).closest('.slick-slider').each(function () {
        $(this).slick('slickGoTo', blockSlideIndex);
      });
    };
  }();
 // End KoderWeb
//Added by KoderWeb
    theme.Sections.register('new-testimonials', theme.NewTestimonialsSection);
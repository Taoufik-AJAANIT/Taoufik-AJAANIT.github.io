jQuery(document).ready(function($) {
  function initTabs() {
    if ($(".tab").length) {
      $(".tab").on("click", function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        var clickedIndex = $(".tab").index(this);

        var panels = $(".tab_panel");
        panels.removeClass("active");
        $(panels[clickedIndex]).addClass("active");
      });
    }
  }

  function initHomeSlider() {
    if ($(".home_slider").length) {
      var homeSlider = $(".home_slider");
      homeSlider.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        smartSpeed: 1200,
        nav: false
      });

      /* Custom dots events */
      if ($(".home_slider_custom_dot").length) {
        $(".home_slider_custom_dot").on("click", function() {
          $(".home_slider_custom_dot").removeClass("active");
          $(this).addClass("active");
          homeSlider.trigger("to.owl.carousel", [$(this).index(), 1200]);
        });
      }

      /* Change active class for dots when slide changes by nav or touch */
      homeSlider.on("changed.owl.carousel", function(event) {
        $(".home_slider_custom_dot").removeClass("active");
        $(".home_slider_custom_dots li")
          .eq(event.page.index)
          .addClass("active");
      });
    }
  }

  function initTabs1() {
    if ($(".tab1").length) {
      $(".tab1").on("click", function() {
        $(".tab1").removeClass("active");
        $(this).addClass("active");
        var clickedIndex = $(".tab1").index(this);

        var panels = $(".tab_panel1");
        panels.removeClass("active");
        $(panels[clickedIndex]).addClass("active");
      });
    }
  }
  function initTabs2() {
    if ($(".tab2").length) {
      $(".tab2").on("click", function() {
        $(".tab2").removeClass("active");
        $(this).addClass("active");
        var clickedIndex = $(".tab2").index(this);

        var panels = $(".tab_panel2");
        panels.removeClass("active");
        $(panels[clickedIndex]).addClass("active");
      });
    }
  }
  function initTabs3() {
    if ($(".tab3").length) {
      $(".tab3").on("click", function() {
        $(".tab3").removeClass("active");
        $(this).addClass("active");
        var clickedIndex = $(".tab3").index(this);

        var panels = $(".tab_panel3");
        panels.removeClass("active");
        $(panels[clickedIndex]).addClass("active");
      });
    }
  }
  initHomeSlider();
  initTabs1();
  initTabs2();
  initTabs3();
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
  $("#header").addClass("header-scrolled");
  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      // $("#header").addClass("header-scrolled");
      // $(".wp-image-1975").removeClass("alignnone");
      $(".wp-image-1975").addClass("wow");
      // addClass;
    } else {
      // $("#header").removeClass("header-scrolled");
      // $(".wp-image-1975").addClass("alignnone");
      $(".wp-image-1975").removeClass("wow");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $("#intro").css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $(".venobox").venobox({
    bgcolor: "",
    overlayColor: "rgba(6, 12, 34, 0.85)",
    closeBackground: "",
    closeColor: "#fff"
  });

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show"
    },
    speed: 400
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({
        id: "mobile-nav"
      });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: ""
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function(e) {
      $(this)
        .next()
        .toggleClass("menu-item-active");
      $(this)
        .nextAll("ul")
        .eq(0)
        .slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this)
            .closest("li")
            .addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 }
    }
  });

  // Buy tickets select the ticket type on click
  $("#buy-ticket-modal").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var ticketType = button.data("ticket-type");
    var modal = $(this);
    modal.find("#ticket-type").val(ticketType);
  });

  // custom code
});

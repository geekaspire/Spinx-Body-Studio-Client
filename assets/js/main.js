"use strict";
function _defineProperty(e, a, t) {
  return (
    a in e
      ? Object.defineProperty(e, a, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[a] = t),
    e
  );
}
!(function (e) {
  function a() {
    e(window).width() < 992
      ? e(".nav-wrapper .nav-wrap-inner").hide()
      : e(".nav-wrapper .nav-wrap-inner").show();
  }
  function t() {
    var a = e(".nav-wrapper .nav > li > ul"),
      t = e(".nav-wrapper .nav > li > ul ul");
    a.each(function () {
      e(window).width() > 991 &&
        e(this).offset().left + e(this).width() > e(window).width() &&
        e(this).css({ left: "auto", right: "0" });
    }),
      t.each(function () {
        e(window).width() > 991 &&
          e(this).offset().left + e(this).width() > e(window).width() &&
          e(this).css({ left: "auto", right: "100%" });
      });
  }
  e('ul.nav li a[href="#"]').on("click", function (e) {
    e.preventDefault();
  }),
    e(".nav-wrapper").menumaker({
      title: "<span></span>",
      format: "multitoggle",
    }),
    e(e(window)).on("scroll", function () {
      e("ul.nav").hasClass("open") ||
        e("#menu-button").removeClass("menu-opened");
    }),
    e(window).on("resize", function () {
      a();
    }),
    a(),
    t(),
    e(window).resize(t),
    e(window).on("scroll", function () {
      e(window).scrollTop() < 180
        ? e(".header-main.love-sticky").removeClass(
            "sticky fixed-top fadeInDown animated"
          )
        : e(".header-main.love-sticky").addClass(
            "sticky fixed-top fadeInDown animated"
          );
    }),
    e("[data-bg-img]")
      .css("background-image", function () {
        return 'url("' + e(this).data("bg-img") + '")';
      })
      .removeAttr("data-bg-img")
      .addClass("bg-img");
  var o = function (e, a) {
    return void 0 === e ? a : e;
  };
  e(window).on("load", function () {
    jQuery("img.svg").each(function () {
      var e = jQuery(this),
        a = e.attr("id"),
        t = e.attr("class"),
        o = e.attr("src");
      jQuery.get(
        o,
        function (o) {
          var n = jQuery(o).find("svg");
          void 0 !== a && (n = n.attr("id", a)),
            void 0 !== t && (n = n.attr("class", t + " replaced-svg")),
            !(n = n.removeAttr("xmlns:a")).attr("viewBox") &&
              n.attr("height") &&
              n.attr("width") &&
              n.attr(
                "viewBox",
                "0 0 " + n.attr("height") + " " + n.attr("width")
              ),
            e.replaceWith(n);
        },
        "xml"
      );
    });
  });
  var n,
    s = [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#C7E5FD" }, { lightness: 17 }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#CECECE" }, { lightness: 17 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#CECECE" }, { lightness: 29 }, { weight: 0.2 }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 18 }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 16 }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#dedede" }, { lightness: 21 }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          { visibility: "on" },
          { color: "#ffffff" },
          { lightness: 16 },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
      },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ color: "#fefefe" }, { lightness: 20 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
      },
    ],
    i = e('[data-trigger="map"]');
  i.length &&
    ((n = i.data("map-options")),
    (window.initMap = function () {
      i.css("min-height", "600px"),
        i.each(function () {
          var a,
            t,
            o,
            i,
            l = e(this);
          (n = l.data("map-options")),
            (t = parseFloat(n.latitude, 10)),
            (o = parseFloat(n.longitude, 10)),
            (i = parseFloat(n.zoom, 10)),
            (a = new google.maps.Map(l[0], {
              center: { lat: t, lng: o },
              zoom: i,
              scrollwheel: !1,
              disableDefaultUI: !0,
              zoomControl: !0,
              styles: s,
            })),
            (a = new google.maps.Marker({
              position: { lat: t, lng: o },
              map: a,
              animation: google.maps.Animation.DROP,
              draggable: !1,
            }));
        });
    }),
    initMap());
  var l = e(".back-to-top");
  if (l.length) {
    var r = function () {
      e(window).scrollTop() > 400 ? l.addClass("show") : l.removeClass("show");
    };
    r(),
      e(window).on("scroll", function () {
        r();
      }),
      l.on("click", function (a) {
        a.preventDefault(), e("html,body").animate({ scrollTop: 0 }, 700);
      });
  }
  function c() {
    e(".circular-progress circle:nth-of-type(2)").css({
      "stroke-dashoffset": 0,
      transition: "4000ms linear",
    });
  }
  function f() {
    e(".circular-progress circle:nth-of-type(2)").css({
      "stroke-dashoffset": 251.429,
      transition: "0s",
    });
  }
  e(".offcanvas-trigger").on("click", function () {
    e(".offcanvas-wrapper, .offcanvas-overlay").addClass("show");
  }),
    e(".offcanvas-overlay, .offcanvas-close").on("click", function () {
      e(".offcanvas-wrapper, .offcanvas-overlay").removeClass("show");
    }),
    e(".bt-carousel").each(function () {
      var a = e(this);
      a.owlCarousel({
        items: o(a.data("owl-items"), 1),
        margin: o(a.data("owl-margin"), 0),
        loop: o(a.data("owl-loop"), !0),
        smartSpeed: 450,
        autoplay: o(a.data("owl-autoplay"), !0),
        autoplayTimeout: o(a.data("owl-speed"), 1e4),
        center: o(a.data("owl-center"), !1),
        animateIn: o(a.data("owl-animate-in"), !1),
        animateOut: o(a.data("owl-animate-out"), !1),
        nav: o(a.data("owl-nav"), !1),
        navText: [
          '<svg xmlns="http://www.w3.org/2000/svg" width="15.676" height="8.564" viewBox="0 0 15.676 8.564" class="svg replaced-svg"><path id="long-arrow-left" d="M15.187,297.225H2.687l2.342,2.342a.713.713,0,0,1-1.009,1.009L1.887,298.44.464,297.014a.712.712,0,0,1,0-1L4.02,292.45a.713.713,0,1,1,1.009,1.009L2.682,295.8H15.224a.713.713,0,1,1-.037,1.425Z" transform="translate(-0.257 -292.234)" fill="#173b61"></path> </svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" id="long-arrow-right" width="15.676" height="8.563" viewBox="0 0 15.676 8.563" class="svg replaced-svg"><path id="path9413" d="M1,297.225H13.5l-2.342,2.342a.713.713,0,0,0,1.009,1.009L14.3,298.44l1.424-1.426a.712.712,0,0,0,0-1l-3.557-3.561a.713.713,0,1,0-1.009,1.009l2.347,2.342H.965A.713.713,0,1,0,1,297.225Z" transform="translate(-0.257 -292.234)" fill="#173b61"></path></svg>',
        ],
        dots: o(a.data("owl-dots"), !1),
        stagePadding: o(a.data("owl-stage-padding"), !1),
        autoWidth: o(a.data("owl-auto-width"), !1),
        responsive: o(a.data("owl-responsive"), {}),
      });
    }),
    e(".banner-slider").owlCarousel({
      items: 1,
      loop: !0,
      autoplay: !0,
      smartSpeed: 250,
      autoplayTimeout: 5e3,
      nav: !0,
      dots: !1,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" width="15.676" height="8.564" viewBox="0 0 15.676 8.564" class="svg replaced-svg"><path id="long-arrow-left" d="M15.187,297.225H2.687l2.342,2.342a.713.713,0,0,1-1.009,1.009L1.887,298.44.464,297.014a.712.712,0,0,1,0-1L4.02,292.45a.713.713,0,1,1,1.009,1.009L2.682,295.8H15.224a.713.713,0,1,1-.037,1.425Z" transform="translate(-0.257 -292.234)" fill="#173b61"></path> </svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" id="long-arrow-right" width="15.676" height="8.563" viewBox="0 0 15.676 8.563" class="svg replaced-svg"><path id="path9413" d="M1,297.225H13.5l-2.342,2.342a.713.713,0,0,0,1.009,1.009L14.3,298.44l1.424-1.426a.712.712,0,0,0,0-1l-3.557-3.561a.713.713,0,1,0-1.009,1.009l2.347,2.342H.965A.713.713,0,1,0,1,297.225Z" transform="translate(-0.257 -292.234)" fill="#173b61"></path></svg>',
      ],
      onInitialized: c,
      onTranslate: f,
      onTranslated: c,
    }),
    e(".banner-slider.owl-carousel")
      .find(".owl-nav .owl-next")
      .append(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="title" role="graphic" class="circular-progress"><circle cx="50" cy="50" r="40"></circle><circle cx="50" cy="50" r="40" id="pct-ind"></circle></svg>'
      ),
    e(".testimonial-carousel2.owl-carousel")
      .find(".owl-nav .owl-prev")
      .html('<img src="assets/img/icon/left-angle.svg" alt="" class="svg">'),
    e(".testimonial-carousel2.owl-carousel")
      .find(".owl-nav .owl-next")
      .html('<img src="assets/img/icon/right-angle.svg" alt="" class="svg">'),
    e(".banner-slider2.owl-carousel").append(
      '<img src="assets/img/bg/bottom_shape.svg" alt="" class="svg bottom-shape">'
    ),
    e(".video-btn").magnificPopup({ type: "video" }),
    e(".gallery-link").magnificPopup({
      gallery: { enabled: !0 },
      type: "image",
    }),
    e(window).on("load", function () {
      e(".preloader").fadeOut(1e3);
    }),
    e("#countdown").length &&
      e("#countdown").countdown({ date: "08/16/2021 23:59:59" }),
    e(".counter").counterUp({ delay: 5, time: 1e3 }),
    e("#elevate-zoom").length &&
      (e("#img_01").elevateZoom(
        _defineProperty(
          {
            gallery: "gal1",
            cursor: "pointer",
            galleryActiveClass: "active",
            imageCrossfade: !0,
            loadingIcon: "http://www.elevateweb.co.uk/spinner.gif",
            zoomType: "inner",
          },
          "cursor",
          "crosshair"
        )
      ),
      e("#img_01").bind("click", function (a) {
        var t = e("#img_01").data("elevateZoom");
        return e.fancybox(t.getGalleryList()), !1;
      })),
    e(".plus").on("click", function () {
      var a = e(this).parent().find("input"),
        t = parseInt(a.val());
      isNaN(t) || a.val(t + 1);
    }),
    e(".minus").on("click", function () {
      var a = e(this).parent().find("input"),
        t = parseInt(a.val());
      !isNaN(t) && t > 1 && a.val(t - 1);
    }),
    e(
      ".single-price, .single-feature, .single-specialist, .single-service.service-box"
    ).on("mouseenter", function () {
      e(
        ".single-price, .single-feature, .single-specialist, .single-service.service-box"
      ).removeClass("active"),
        e(this).addClass("active");
    }),
    e(".search-toggle-btn").on("click", function () {
      e(".full-page-search").addClass("show");
    }),
    e(".search-close-btn").on("click", function () {
      e(".full-page-search").removeClass("show");
    }),
    e(".offcanvas-trigger").on("click", function () {
      e(".offcanvas-wrapper, .offcanvas-overlay").addClass("show");
    }),
    e(".offcanvas-overlay, .offcanvas-close").on("click", function () {
      e(".offcanvas-wrapper, .offcanvas-overlay").removeClass("show");
    }),
    jQuery(window).on("load", function () {
      e("#grid").isotope({ layoutMode: "packery", itemSelector: ".grid-item" });
    }),
    e(".service_point-map-img")
      .find(".l_info")
      .on("mouseenter", function () {
        e(".service_point-map-img").find(".l_info").removeClass("active"),
          e(this).addClass("active");
      }),
    e(".contact-form-wrap, .appointment-form-wrap").on(
      "submit",
      "form",
      function (a) {
        a.preventDefault();
        var t = e(this);
        e.post(t.attr("action"), t.serialize(), function (a) {
          (a = e.parseJSON(a)),
            t
              .parent(".contact-form-wrap, .appointment-form-wrap")
              .find(".form-response")
              .html("<span>" + a[1] + "</span>");
        });
      }
    );
})(jQuery);

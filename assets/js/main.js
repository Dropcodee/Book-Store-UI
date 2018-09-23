$(window).scroll(() => {
  $("nav").toggleClass("navbar__scrolling", $(this).scrollTop() > 1);
});

(function($) {
  "use strict";
  // Auto-scroll
  $("#myCarousel").carousel({
    interval: 1000
  });

  // Control buttons
  $(".next").click(function() {
    $(".carousel").carousel("next");
    return false;
  });
  $(".prev").click(function() {
    $(".carousel").carousel("prev");
    return false;
  });

  // On carousel scroll
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo(".carousel-inner");
        }
      }
    }
  });
});

// increase the counter for the quantity

$(document).ready(function() {
  var quantity = 1;

  $(".quantity-right-plus").click(function(e) {
    e.preventDefault();
    var quantity = parseInt($("#quantity").val());
    $("#quantity").val(quantity + 1);
  });

  $(".quantity-left-minus").click(function(e) {
    e.preventDefault();
    var quantity = parseInt($("#quantity").val());
    if (quantity > 1) {
      $("#quantity").val(quantity - 1);
    }
  });
});

$(document).ready(() => {
  showRegisterForm = e => {
    e.preventDefault();
    $(".login__form").removeClass("activeNow");
    $(".login__form").removeClass("login__header");
    $(".login__form").hide();
    $(".modal__form").show("slow");
    $(".modal__form").slideDown("slow");
    $(".modal__form").addClass("activeNow");
  };
  showLoginForm = e => {
    e.preventDefault();
    $(".modal__form").removeClass("activeNow");
    $(".modal__form").hide();
    $(".login__form").slideDown("slow");
    $(".login__form").addClass("activeNow");
    $(".login__form")
      .addClass("login__header")
      .delay(300);
  };
  $(".btn__checkout2").click(e => {
    showRegisterForm(e);
  });
  $(".reg__btn").click(e => {
    showRegisterForm(e);
  });
  $(".loginBtn").click(e => {
    showLoginForm(e);
  });
  $(".btn__close").click(e => {
    showRegisterForm(e);
  });
});

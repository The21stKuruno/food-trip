$(function() {
  setDropNav();
  setScrollTop();
  setScrollDown();
});

function setDropNav() {
  $(".burger-icon").click(function() {
    $("#dropbar").toggleClass("visible");
  });

  $("section, footer").click(function() {
    $("#dropbar").removeClass("visible");
  });

  $(window).resize(function() {
    $("#dropbar").removeClass("visible");
  });
}

function setScrollDown() {
  $(".scroll-down").click(function(e) {
    e.preventDefault();
    var sectionID = e.currentTarget.id + "-section";

    $("html, body").animate(
      {
        scrollTop: $("#" + sectionID).offset().top
      },
      1000
    );
  });
}

function setScrollTop() {
  $("#top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
}

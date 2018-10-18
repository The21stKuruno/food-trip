$(function() {
  setDropNav();
  setScrollTop();
  setScrollDown();

  // Play button
  $(".play").hover(function() {
    $("#watch-it").toggleClass("active");
  });
  // Arrow down
  $(".scroll-down").hover(
    function() {
      $(".span-down").css("color", "#f9f9f9");
    },
    function() {
      $(".span-down").css("color", "#d3d3d3");
    }
  );
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

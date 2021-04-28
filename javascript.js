menu = $("nav ul");
toggle = $("nav ul ");

toggle.on("click", function() {
  if (menu.hasClass("active")) {
    menu.removeClass("active");
  } else {
    menu.addClass("active");
  }
});

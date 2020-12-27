//Sticky Navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //Slide-UP
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //Toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

//Link in Card
$(document).ready(function () {
  $("[data-link]").click(function () {
    window.open((window.open.href = $(this).attr("data-link")));
    return false;
  });
});

//Typing Animation
var typed = new Typed(".typing", {
  strings: ["Front-End Developer", "Graphic Designer", "Photographer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".typing2", {
  strings: ["Front-End Developer", "Graphic Designer", "Photographer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//Send mail
function sendMail() {
  var link =
    "mailto:yosyfakry@gmail.com" +
    "&subject=" +
    encodeURIComponent(document.getElementById(mySubject).value) +
    "&body=" +
    encodeURIComponent(document.getElementById(myText).value);
  window.location.href = link;
}

//Read More
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

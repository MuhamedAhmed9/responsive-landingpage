$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });
});

const allLinks = document.querySelectorAll("li a");
allLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    allLinks.forEach((item) => {
      item.classList.remove("active");
    });
    allLinks.forEach((item) => {
      if (
        item.innerHTML.toLowerCase() === e.target.getAttribute("href").slice(1)
      ) {
        item.classList.add("active");
      }
    });
  });
});

const allImages = document.querySelectorAll(".myImages img");
let currentImageIndex = 0;
const allImagesSrc = [];
allImages.forEach((item) => {
  allImagesSrc.push(item.getAttribute("src"));
});

$(".arrowright").click(function () {
  if (currentImageIndex < allImagesSrc.length - 1) {
    currentImageIndex++;
    $(".display-box > img").fadeOut(1000, function () {
      $(this).fadeIn(1000, function () {
        $(this).attr("src", allImagesSrc[currentImageIndex]);
      });
    });
  } else {
    currentImageIndex = 0;
    $(".display-box > img").fadeOut(1000, function () {
      $(this).fadeIn(1000, function () {
        $(this).attr("src", allImagesSrc[currentImageIndex]);
      });
    });
  }
});

$(".arrowleft").click(function () {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    $(".display-box > img").fadeOut(1000, function () {
      $(this).fadeIn(1000, function () {
        $(this).attr("src", allImagesSrc[currentImageIndex]);
      });
    });
  } else {
    currentImageIndex = allImagesSrc.length - 1;
    $(".display-box > img").fadeOut(1000, function () {
      $(this).fadeIn(1000, function () {
        $(this).attr("src", allImagesSrc[currentImageIndex]);
      });
    });
  }
});

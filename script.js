const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page4Animation() {
  var fContainer = document.querySelector(".featured-container");
  var fixed = document.querySelector(".fixed");

  var features = document.querySelectorAll(".featured");
  features.forEach( (elem) => {
    var image = elem.getAttribute("data-image");
    elem.addEventListener("mouseenter", () => {
      fixed.style.display = "block";
      fixed.style.backgroundImage = `url(${image})`;
      fixed.addEventListener("mouseenter", () => {
        fixed.style.display = "block";
      });
    });

    elem.addEventListener("mouseleave", () => {
      fixed.style.display = "none";
    });

    fixed.addEventListener("mouseleave", () => {
      fixed.style.display = "none";
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}

function tabAnimation() {
  var Design = document.querySelector("#Design");
  var Project = document.querySelector("#Project");
  var Execution = document.querySelector("#Execution");

  var dBar = document.querySelector("#Design .sBar");
  var pBar = document.querySelector("#Project .sBar");
  var eBar = document.querySelector("#Execution .sBar");

  var dH2 = document.querySelector("#Design h2");
  var pH2 = document.querySelector("#Project h2");
  var eH2 = document.querySelector("#Execution h2");

  var para = document.querySelector(".page-4 .section .left .overlay .about p");
  var img = document.querySelector(".page-4 .section .right");

  Design.addEventListener("click", () => {
    para.innerHTML =
      "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
    img.style.backgroundImage = "url(Design.webp)";
    dH2.style.color = "white";
    dBar.style.backgroundColor = "orangered";

    eH2.style.color = "#504A46";
    eBar.style.backgroundColor = "#504A46";
    pH2.style.color = "#504A46";
    pBar.style.backgroundColor = "#504A46";
  });
  Project.addEventListener("click", () => {
    para.innerHTML =
      "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
    img.style.backgroundImage = "url(Project.webp)";
    pH2.style.color = "white";
    pBar.style.backgroundColor = "orangered";

    dH2.style.color = "#504A46";
    dBar.style.backgroundColor = "#504A46";
    eH2.style.color = "#504A46";
    eBar.style.backgroundColor = "#504A46";
  });
  Execution.addEventListener("click", () => {
    para.innerHTML =
      "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    img.style.backgroundImage = "url(Execution.webp)";
    eH2.style.color = "white";
    eBar.style.backgroundColor = "orangered";

    dH2.style.color = "#504A46";
    dBar.style.backgroundColor = "#504A46";
    pH2.style.color = "#504A46";
    pBar.style.backgroundColor = "#504A46";
  });
}

function customCursor() {
  var cursorArea = document.querySelector(".swiper");
  var cursor = document.querySelector(".custom-cursor");
  cursorArea.addEventListener("mouseenter", () => {
    cursor.style.display = "block";
  });
  cursorArea.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
  cursorArea.addEventListener("mousemove", (e) => {
    const rect = cursorArea.getBoundingClientRect();
    cursor.style.left = `${e.pageX - rect.left}px`;
    cursor.style.top = `${e.pageY - rect.top}px`;
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3")
  var full = document.querySelector(".full-scr")
  var navimg = document.querySelector("nav img")
  var flag = 0
  menu.addEventListener("click", function () {
      if (flag == 0) {
          full.style.top = 0
          navimg.style.opacity = 0
          flag = 1
      } else {
          full.style.top = "-100%"
          navimg.style.opacity = 1
          flag = 0
      }
  })
}


swiperAnimation();
page4Animation();
tabAnimation();
customCursor();
menuAnimation();
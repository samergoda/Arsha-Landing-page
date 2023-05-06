AOS.init();

const nav = document.getElementById("nav");

const height = $("#client").offset().top;


$(window).scroll(function () {
  // navbar
  if ($(window).scrollTop() > height - 400) {
    $("#nav").css("backgroundColor", "rgba(0,0,0,0.5)");
  } else {
    $("#nav").css("backgroundColor", "transparent");
  }




});

nav.addEventListener("click", function (e) {
  // console.log(e);
  e.target
    .closest("#navParent")
    .querySelectorAll("a")
    .forEach((element) => {
      element.classList.remove("active");
    });
  e.target.classList.add("active");
});



// navbar buttin dark mode
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});








$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
  $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
  //  console.log(e);
     // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.

const Scroll = $(window).scrollTop() , // This variable finds the distance you have scrolled from the top.
          aboutSection = $('#About').offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
          serviceSection = $('#service').offset().top,
          portoSection = $('#porto').offset().top,
          teamSection = $('#team').offset().top,
          priceSection = $('#price').offset().top,
          contactSection = $('#contact').offset().top;
          
      if (Scroll >= aboutSection) { // If you have scrolled past section one do this.
          $('.about').addClass("active");
          // console.log('done');
           $('.services , .portfolio, .team , .price , .contact , .home').removeClass('active') // Adds class of current-menu-item to the menu item with a class of menu-item-1
      } 
    
    
      if (Scroll >= serviceSection) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
          $(".services").addClass("active");
          $('.about , .portfolio, .team , .price , .contact , .home').removeClass('active')
           // Adds class of current-menu-item to the menu item with a class of menu-item-2
      } 
      if (Scroll >= portoSection) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
          $(".portfolio").addClass("active");
          $('.services , .about, .team , .price , .contact , .home').removeClass('active')
           // Adds class of current-menu-item to the menu item with a class of menu-item-2
      } 
      if (Scroll >= teamSection) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
          $(".team").addClass("active");
          $('.services , .portfolio, .about , .price , .contact , .home').removeClass('active')
           // Adds class of current-menu-item to the menu item with a class of menu-item-2
      } 
      if (Scroll >= priceSection) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
          $(".price").addClass("active");
          $('.services , .about, .team , .contact , .portfolio , .home').removeClass('active')
         // Adds class of current-menu-item to the menu item with a class of menu-item-2
      } 
      if (Scroll >= contactSection) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
          $(".contact").addClass("active");
          $('.services , .about, .team , .price , .portfolio , .home').removeClass('active')
         // Adds class of current-menu-item to the menu item with a class of menu-item-2
      } 
  });
});





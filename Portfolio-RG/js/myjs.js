// Sticky Navbar Js
const header = document.querySelector('nav');
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 70) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
})
// Sticky Navbar Js

// <!-- Swiper Testimonial Slider Js -->

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

// <!-- Swiper Testimonial Slider Js -->

// <!-- Portfolio Menu Line Active Class Js -->

      const callToActionBtns = document.querySelectorAll(".portfolio-nav-link");
      callToActionBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
              callToActionBtns.forEach(f => f.classList.remove('active'));
              e.target.classList.toggle("active");
          });

      }); 

//   <!-- Portfolio Menu Line Active Class Js -->

// <!-- Portfolio myModal Class Js Start Here -->
  
var modal = document.getElementById('myModal');
var portfolioBtn = document.getElementById('portfolioBtn');
var modalclose = document.getElementById('modalcloseBtn');

portfolioBtn.onclick = function () {
    modal.style.display = "block";

}
modalclose.onclick = function () {
    modal.style.display = "none";
}

// <!-- Portfolio myModal Class Js End Here -->
   // <!-- Portfolio myModal Slide Class Js Start Here Here -->

   let slideIndex = 1;
   showSlides(slideIndex);
   function plusSlides(n) {
       showSlides(slideIndex += n);
   }
   function currentSlide(n) {
       showSlides(slideIndex = n);
   }
   function showSlides(n) {
       let i;
       let slides = document.getElementsByClassName("mySlides");
       let dots = document.getElementsByClassName("dot");
       if (n > slides.length) { slideIndex = 1 }
       if (n < 1) { slideIndex = slides.length }
       for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
       }
       for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" active-dot", "");
       }
       slides[slideIndex - 1].style.display = "block";
       dots[slideIndex - 1].className += " active-dot";
   }

// <!-- Portfolio myModal Slide Class Js End Here Here -->

//Go back to top JS  Start here


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}
//Go back to top JS  End here
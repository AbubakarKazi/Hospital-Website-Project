// Javascript for Loader


window.onload = function(){
  const frontLoader = document.querySelector(".frontloader");
  frontLoader.classList.add("fade-out");
  setTimeout(function(){
      frontLoader.style.display = "none";
  }, 1000);
}


// Owl Carousel
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true
    });
  });
  
  $(document).ready(function() {
   
   $("#owl-demo").owlCarousel({
  
       autoPlay: 3000, //Set AutoPlay to 3 seconds
  
       items : 4,
       itemsDesktop : [1199,3],
       itemsDesktopSmall : [979,3]
  
   });
  
  });
  
  var owl = $('.owl-carousel');
        owl.owlCarousel({
          margin: 10,
          loop: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 3
            }
          }
        });
  

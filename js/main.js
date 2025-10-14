// Change header on scroll
window.addEventListener('scroll', function() {
  const top = document.getElementById('topHeader');
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    top.classList.add('scrolled');
    nav.classList.add('scrolled');
  } else {
    top.classList.remove('scrolled');
    nav.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Review Carousel - Play video on click
document.querySelectorAll('.review-video-container').forEach(item => {
  item.addEventListener('click', function() {
      const videoSrc = this.getAttribute('data-video');
      const modal = document.getElementById('videoModal');
      const videoElement = document.getElementById('localVideo');

      videoElement.src = videoSrc;
      videoElement.load();

      $(modal).modal('show');
  });
});

// Change dots in review carousel
document.querySelectorAll('.carousel-item').forEach((item, index) => {
  item.addEventListener('shown.bs.carousel', function() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  });
});

$(document).ready(function(){

    var clientNames = [
        "MICHAEL BROWN", 
        "MELODY WILLIAMS", 
        "CYNTHIA HOWARD",
        "JEFF FRESHMAN",
        "DOROTHY MYERS",
    ];


    $('#reviewCarousel').on('slide.bs.carousel', function (e) {

        var newIndex = e.to;
        
        $('#client-name-display').text(clientNames[newIndex]);
    });
});

// For hover buttons on mobile (if needed)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('touchstart', function() {
    this.classList.add('btn-hover');
  });
  btn.addEventListener('touchend', function() {
    this.classList.remove('btn-hover');
  });
});
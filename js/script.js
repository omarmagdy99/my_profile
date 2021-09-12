
// ==============type===================
var options = {
    strings: ['hi,<h1>i am omar magdy</h1>', 'i am a web devoloper','I AM VERY HARD WORKER '],
    typeSpeed: 60
    ,backSpeed: 60
    ,loop: true
  };
  
  var typed = new Typed('.type', options);
// ==============type===================
// ====================scroll==============






$(window).on("scroll",function(){
  var scr= $(window).scrollTop();
  if(scr>100){
    $("nav").css("background-color","white");
    
    $(".navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-brand").css("color","black");
    $(".navbar-light .navbar-nav .active > .nav-link:hover").css("color","#109af7");
    $(".navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-brand").css("margin","0% ");
    
  }


  if(scr<100){
    $("nav").css("background-color","#ffffff00");
      

    $(".navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-brand").css("margin","2% ");
    $(".navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-brand").css("color","white");
  }
});
// ====================scroll==============
// ===================skells=================
$(function () {
  $('.chart').easyPieChart({
      //your options goes here
  });
});

// ===================skells=================


// =================particles==============

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.608657349937933,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
// =================particles==============


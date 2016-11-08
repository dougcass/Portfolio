var $ = window.$;

var controller = {
  init: function(){
    this.render();
  },
  render: function(){
    this.createEventHandlers();
  },
  createEventHandlers: function(){
    $('a[href^="#"]').on('click', this.scrollToHandler);
  },
  scrollToHandler: function(event) {
      var target = $(this.getAttribute('href'));

      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
      }
  }  
};

  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var fadeOutLeft = 'animated fadeOutLeft';
var fadeInRight = 'animated fadeInRight';
$('.box').on('click', function(){
  $('.box').addClass(fadeOutLeft);
  $('.slider').addClass('slider_right');                 
  $('.box-black').addClass(fadeInRight);
});        



module.exports = controller;


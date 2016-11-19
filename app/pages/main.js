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
    $('.box').on('click', this.animateHandler);
    $(window).scroll(this.fadeInHandler);
    this.seasonChangeHandler('fall');
    this.seasonChangeHandler('winter');
    this.seasonChangeHandler('summer');
    this.seasonChangeHandler('spring');
    $('.spinner-3d').on('click', this.spinnerAnimateHandler);
    $('.codepen-icon').on('click', this.codepenAnimateHandler);
    $('.github-icon').on('click', this.githubAnimateHandler);
    $('.linkedin-icon').on('click', this.linkedinAnimateHandler);
    $('.white-1-icon').on('click', this.white1AnimateHandler);
    $('.white-2-icon').on('click', this.white2AnimateHandler);
    $('.black-1-icon').on('click', this.black1AnimateHandler);
    $('.submit').on('click', this.submitResponseHandler);
    $('.easter-icon').on('click', this.easterHandler);
  },
  fadeInHandler: function(){
    $('.hideme').each(function(){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){ 
          $(this).animate({'opacity':'1'},500);       
        }
     });       
  }, 
    
  scrollToHandler: function(event) {
      var target = $(this.getAttribute('href'));

      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
      }
  },
  animateHandler: function(){
    var fadeOutLeft = 'animated fadeOutLeft';
    var fadeInRight = 'animated fadeInRight';
    $('.box').addClass(fadeOutLeft);
    $('.slider').addClass('slider_right');                 
    $('.box-black').addClass(fadeInRight);
  },
  seasonChangeHandler: function(season) {
    $('.season-toggle.' + season).on('click', function(){
      $('.background-season').attr( "class", "background-season " + season + "-image");
    });
  },
  spinnerAnimateHandler: function(){ 
    $('.spinner-3d').addClass('click-spin');
    $('.spinner-div-2').addClass('click-spin-2');           
    $('.spinner-div-3').addClass('click-spin-3');                                           $('.spinner-div-4').addClass('click-spin-4');
    $('.field-box').addClass('field-fade-in');
  },
  codepenAnimateHandler: function(){
    // var fadeOut = 'animated fadeOut';
    var fadeIn = 'animated fadeIn';
    $('.codepen-box').addClass(fadeIn);
  },
  linkedinAnimateHandler: function(){
    // var fadeOut = 'animated fadeOut';
    var fadeIn = 'animated fadeIn';
    $('.linkedin-box').addClass(fadeIn);
  },
  githubAnimateHandler: function(){
    // var fadeOut = 'animated fadeOut';
    var fadeIn = 'animated fadeIn';
    $('.github-box').addClass(fadeIn);
  },
  white1AnimateHandler: function(){
    // var fadeOut = 'animated fadeOut';
    var fadeIn = 'animated fadeIn';
    $('.white-1-box').addClass(fadeIn);
  },
  white2AnimateHandler: function(){
    // var fadeOut = 'animated fadeOut';
    var fadeIn = 'animated fadeIn';
    $('.white-2-box').addClass(fadeIn);
  },
  black1AnimateHandler: function(){
    // var fadeOut = 'animated fadeOut';
    var fadeIn = 'animated fadeIn';
    $('.black-1-box').addClass(fadeIn);
  },
  submitResponseHandler: function(){
    var firstName= $('.first-name-field').val();
    var lastName= $('.last-name-field').val();
   
    var greeting= "Thank you for visiting ";
    var response= greeting + firstName + ' ' + lastName;
    $('.field-relative').html('<h1 class="response-text">' + response + '</h1>');
    $('.response-text').addClass('response-glow');


  },
  easterHandler: function(){
    // var fadeOut = 'animated fadeOut';
    var fadeIn = 'animated fadeIn';
    $('.easter-box').addClass(fadeIn); 
  }
};

  






module.exports = controller;


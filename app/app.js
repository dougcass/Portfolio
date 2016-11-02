
// // base framework
import $ from 'jquery';

// legacy loading for bootstrap javascript
window.$ = window.jQuery = $;
require('bootstrap');

// import our styles
import './stylesheets/base.scss';
import homeController from './pages/main';


//import multimediaController from '.pages/multimedia';
// on document load
$(function(){
  //Kick off the app
  homeController.init();

});

  // set default template settings
 

  // launch navbar
  // navbar.init();


// Router; Which page are we on???






/*switch(window.location.pathname){
case '/pages/todo.html':
  todoController.init();
  break;




case '/pages/bb_todo.html':
  new bbTodoController();
  break;
case '/pages/multimedia.html':
  console.log('multimedia page started');
  break;
case '/pages/svg_example.html':
  svgController.init();
  break;
case '/pages/three.html':
  threeController.init();
  break;
case '/pages/resume.html':
  resumeController.init();
  break;

}




  console.log('====================================');
  console.log('Yo! Hire Me!! casserleighd@gmail.com');
  console.log('====================================');




// todo.init(); ??
});*/

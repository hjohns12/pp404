"use strict";
(function(){

  console.log('testing 1 2 3');

  $('.projectImg').hover(function(){
    $(this).fadeTo(200, 0.5);
    $(this).siblings().find('p').fadeTo(200, 1);
  }, function(){
    $(this).fadeTo(200, 1);
    $(this).siblings().find('p').fadeTo(200, 0)
  })


})();

$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //??

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    // var height = $('body').height() * Math.random();
    // var width = $('body').width() * Math.random();
    // var random = Math.random() * 1000;
    
    var dancer = new dancerMakerFunction(
      height, width, random
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    $('.egypt').on('mouseover', function(event) {
    console.log('hello');
    $('.egypt').css("border-radius", "5px");
  })
  });


  $('.lineUpButton').on('click', function(event) {
    var styleSettings = {
      left: 0
    };
    for (var i=0; i< window.dancers.length; i++) {
      window.dancers[i].$node.css(styleSettings);
    }    
  });




  $('.interactButton').on('click', function() {
    var styleSettings = {
      // take position of next dancer in array
    }
    for (var i=0; i< window.dancers.length; i += 2) {
      
    }
  }) 

});


      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000






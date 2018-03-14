$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //??

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    


    var dancer = new dancerMakerFunction(

      $('body').height() * Math.random(), // math.min??
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
     console.log($('body').height());
    console.log($('body').width());
    $('body').append(dancer.$node);

    // for newest item, loop through old array (window.dancers)
    for (var i=0; i < window.dancers.length; i++) {
      //top - top ; left - left
      if(window.dancers[i].top - dancer.top < 200 && window.dancers[i].left - dancer.left < 200){
        window.dancers[i].transform();
      }
    }
    // and find closest item
    // then, both rotate 360 degrees
    window.dancers.push(dancer);
  });



  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(function(dancers){
      dancers.lineUp();
    }) 
  });

  $('.breakUpButton').on('click', function(event) {
    window.dancers.forEach(function(dancers){
      dancers.breakUp();
    }) 
  });

});



// var shortestDistance = null;
// var closestCousin = null;
// for(var i=0; i < window.dancers.length; i++) {
//   for(var j=i+1; j < window.dancers.length; j++) {
//     distanceApart = Math.pow(window.dancers[i].top - window.dancers[j].top, 2) + 
//     Math.pow(window.dancers[i].left - window.dancers[j].left, 2)
//     if (distanceApart < shortestDistance || shortestDistance === null) {
//       shortestDistance = distanceApart;
//       closestCousin = j;
//     }





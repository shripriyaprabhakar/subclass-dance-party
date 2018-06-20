$(document).ready(function() {
debugger;
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {   
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    var dancerMakerFunction = window[dancerMakerFunctionName];   

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(50),
      $("body").width() * Math.random(),
      Math.random() * 1000    
    );

    $('body').append(dancer.$node);  
    window.dancers.push(dancer);
    window.dancers[0].$node.addClass("mouseover"); 
    $('.Lineup').click (function() {
      for (let i = 0; i < window.dancers.length; i++) {
        window.dancers[i].$node.animate({top: '400px', left: i*200+'px'});
      }
    });

    $('.interact').click(function() {
      for (var i = 0; i < window.dancers.length; i++) {
        if (Math.absolute(window.dancers[i].$node[0].clientHeight-window.dancers[i+1].$node[0] < clientHeight) < 50
          && Math.absolute(window.dancers[i].$node[0].clientWidth-window.dancers[i+1].$node[0] < clientWidth) < 50) {
          window.dancers[i].$node.animate({left: "250px"});
          window.dancers[i + 1].$node.animate({right: "250px"});
        }
      }
    });
  });
});


$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    

    // make a dancer with a random position

    var dancer = new dancerMakerFunction((
      $("body").height() - 300 ) * Math.random() + 8,
      ($("body").width() - 150) * Math.random(),
      Math.random() * 1000,
      dancers.length
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);

    //click dancer interaction
    $(".dancer").on("click", function() {
      if($(".highlighted".length < 2)) {
        $(this).addClass("highlighted");
      }
      function minimize() {
        $(".dancer").css({"width": "50px", "opacity": "0.5"});
        $(".highlighted").css({"width": "190px", "opacity": "1"});
      }
      function returnSize() {
        $(".dancer").css({"width": "140px", "opacity": "1"});
        $(".highlighted").removeClass("highlighted");
      }
      //once two dancers are highlighted animate characters
      if ($("highlighted").length === 2) {
        minimize();
      //animate for three seconds and return to original properties
      setTimeOut(returnSize, 3000);
      }
    });  

  });
  
  $('.lineup').on('click', function(event) {
   

  });
});


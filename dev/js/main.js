function init() {
  console.log('%cwebsite made by MG', 'color: #00ffff;')

  $( function() {
    $( ".draggable" ).draggable().resizable({
      aspectRatio: 3 / 4.5
    });

  } );
  $( function() {
    $( "#draggable2" ).draggable().resizable({
      aspectRatio: 3 / 4.5
    });

  } );
}

init()
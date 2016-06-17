console.log("Bird is in the jquery");

$(document).ready(function(){
  $('#submit').on('click', function(){
    console.log("submit Clicked!");
    var newAnimal = $('#animalIn').val();
    var objectToSend = {
      "animal": newAnimal
    };

    $.ajax({
      type: 'POST',
      url: '/postRoute',
      data: objectToSend
    });//end ajax post
  });//end submit button

  $.ajax({
      type:'GET',
      url: '/getAnimals',
      success:function (data) {
        showAnimals( data );
      }

  });
  function showAnimals(animals) {
    for( i=0; i < animals.length; i ++)
    {
    console.log("bird is in showAnimals and sees: " + animals );
    var newParagraph = document.createElement('div');
    newParagraph.textContent = "List of Current Animals" + animals;

    $('#outputDiv').append ( "<h5>" + animals[i].animal + " " + animals[i].amount + "</h5>" );
  }
}
});

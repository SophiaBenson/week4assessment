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
    });
  });
});

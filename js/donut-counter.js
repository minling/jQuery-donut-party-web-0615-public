$(function(){ 
  var donutCounter = new DonutCounter();
});

// your code here
function DonutCounter(){
  $('#donuts > button.add').click(function(){

    if ($('#donuts').find('.donut-count').text() == ""){
      var donutCount = 0;
      donutCount++;
      $('#donuts h3 span').text(donutCount);
    }
    else {
      var donutCount = parseInt($('#donuts').find('.donut-count').text())
      donutCount++;
      $('#donuts h3 span').text(donutCount)
    }
  });

  $('#donuts > button.remove').click(function(){ 
    if ($('#donuts').find('.donut-count').text() == ""){
      var donutCount = 0;
      if (donutCount >0){
        donutCount--;
      }
      $('#donuts h3 span').text(donutCount);
    }
    else {
      var donutCount = parseInt($('#donuts').find('.donut-count').text());
      if (donutCount >0){
        donutCount--;
      }
      $('#donuts h3 span').text(donutCount)
    }
  })

  $('#guests > button.add').click(function(){
    var guest = parseInt($('#guests').find('.guest-count').text());
    guest++;
    $('#guests h3 span').text(guest)
  })

  $('#guests > button.remove').click(function(){
    var guest = parseInt($('#guests').find('.guest-count').text());
    if (guest > 0){
      guest--;
    }
    $('#guests h3 span').text(guest)
  })

  $('#check').click(function(){
    var donutCount = parseInt($('#donuts').find('.donut-count').text());
    var guest = parseInt($('#guests').find('.guest-count').text());

    if (guest > donutCount){
      $('#status').text("Guests are sad :(");
    }

    else if (guest == 0){
      $('#status').text("Invite someone you jerk!");
    }

    else if (guest == 0 && donutCount == 0){
      $('#status').text("Invite someone you jerk!");
    }

    else if (guest*4 >= donutCount){
      $('#status').text("Guests are having a blast!");
    }

    else if (guest*4 < donutCount){
      $('#status').text("ARE YOU TRYING TO KILL US ALL!?");
    }

  })


};
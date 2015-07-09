$(document).ready(function(){

  setInterval(function(){
    var dateTime = new Date();
    // These 3 variables add a leading '0' to keep the date properly formatted.
    var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
    var secondsTwoDigitsWithLeadingZero = ("0" + dateTime.getSeconds()).substr(-2);
    var millisecondsTwoDigitsWithLeadingZero = ("0" + dateTime.getMilliseconds()).substr(-3);
    $("#milliseconds").text(millisecondsTwoDigitsWithLeadingZero);
    $("#seconds").text(secondsTwoDigitsWithLeadingZero);
    $("#minutes").text(minutesTwoDigitsWithLeadingZero);
    $("#hours").text(dateTime.getHours());

      var randomColor = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";


if (secondsTwoDigitsWithLeadingZero%5 == 0){
    console.log("this is the multiple of 5.this is seconds: " + secondsTwoDigitsWithLeadingZero);
    $("body").css("background-color", randomColor)

    }
    else
    {
        $("body").css("background-color", randomColor)

    }


  },100);
});


// rand = Math.floor(Math.random()*colors.length);

// $(document).ready(function(){
//   var colors = ["#CCCCCC","#333333","#990099"];                
//   var rand = Math.floor(Math.random()*colors.length);           
//   $('#controls-wrapper').css("background-color", colors[rand]);
//   $('h1').css("color", colors[rand]);
// });

// var mystring='color';

// var myArray = mystring.split('');

// for(i=0; i < myArray.length; i++){

// //checking for odd positions
// if(i % 2 == 0){
// mojArray[i]//how to add color code to each element?
// }
// else{
// mojArray[i];
// }
// document.write(myArray[i]);
// }



// var myNum = some number

// myNum%2 

// var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

// $("#seconds").text(secondsTwoDigitsWithLeadingZero);

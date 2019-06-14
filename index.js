// $( document ).ready(function() {
//     appendgen.css("visibility", "hidden");
// });
var buttonA = $('.buttonA');
buttonA.on("click", addA)
  var a = 0
  function addA() {
   a++;
  console.log("a is" + a)
}


var buttonB = $('.buttonB');
buttonB.on("click", addB)
  var b = 0
  function addB() {
     b++;
  console.log("b is " + b);
}


var buttonC = $('.buttonC');
buttonC.on("click", addC);
  var c = 0
  function addC() {
     c++;
  console.log("c is " + c);
}


var submit = $('.submit');
submit.on("click", results);


// Make the whole dive appear at the same time
// var appendgen = $('.appendgen');
// appendgen.css("visibility", "hidden")


function results(){
  console.log("submit works");
  // appendgen.css("visibility", "visible")
  // appendgen.append(`<button class="btn1">Go</button>
  // <p class="text"></p>
  //
  // <button class="btn2">Go</button>
  // <p class="text"></p>
  //
  // <button class="btn3">Go</button>
  // <p class="text"></p>`);
  console.log(`${a}`);
  if (a>b && a>c) {
    function appear1() {
      var appendgen1 = $('.appendgen1');
      appendgen1.toggleClass('appendgen1')
    }
    appear1();

    var button1 = $('.btn1');
    button1.on("click", appendGo);


    //button.on("click", removeGo);

    function appendGo() {
      console.log("button was clicked");
      var random = Math.floor(Math.random() * gen1.length);
      var content = $('.text1');
      content.text(`${gen1[random]}`);
      //Button 1 Appear



    }
    console.log("a worked");}
   else if (b>a && b>c) {

     // Button 2 appear

     function appear2() {
       var appendgen2 = $('.appendgen2');
       appendgen2.toggleClass('appendgen2')
     }
     appear2();

    var button2 = $('.btn2');

    button2.on("click", appendGo);
    // button.on("click", removeGo);

    function appendGo() {
      var random = Math.floor(Math.random() * gen2.length);
      var content = $('.text2');
      content.text(`${gen2[random]}`);}
    console.log("b worked");
  } else if (c>a && c>b) {


    //Button 3 appear

    function appear3() {
      var appendgen3 = $('.appendgen3');
      appendgen3.toggleClass('appendgen3')
    }
    appear3();

    var button3 = $('.btn3');


    button3.on("click", appendGo);
    // button.on("click", removeGo);

    function appendGo() {
      var random = Math.floor(Math.random() * gen3.length);
      var content = $('.text3');
      content.text(`${gen3[random]}`);
    console.log("c worked");}
  } else {
  console.log("no conditions met")};
}






var gen1 = [
  "Aruba",
  "Bali",
  "Cancún",
  "Galapagos Islands",
  "Jaco",
  "Santorini",
  "Tahiti",
];


var gen2 = [
  "Madrid",
  "Monaco",
  "New York City",
  "Paris",
  "Tokyo",
];

//
//
// }
//
// function removeGo() {
// }
//
//
//
//
var gen3 = [
  "Cape Town",
  "Iceland",
  "Marrakesh",
  "New Zealand",
  "Thailand",
];
//
//
//
// }
//
// function removeGo() {
// }






//

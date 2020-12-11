
  var col = [];
var current = [];

var lvl = 1;
var audio = new Audio ("bell4.mp3");

function respond(i)
{
  $("body").css("background-color", "white");
}

function respondback(i)
{
  $("body").css("background-color", "#495464")
}

function Randomize() {
  let rand = Math.random();
      rand = Math.floor(rand * 4) + 1;
      return rand;
}

function anim(num)
{
  switch (num)
  {
    case 1 :
    $("#one").fadeOut(); $("#one").fadeIn();
    break;

    case 2 :
    $("#two").fadeOut(); $("#two").fadeIn();
    break;

    case 3 :
    $("#three").fadeOut(); $("#three").fadeIn();
    break;

    case 4 :
    $("#four").fadeOut(); $("#four").fadeIn();
    break;

  }
}

function check ()
{
  if (col[current.length - 1] != current[current.length - 1])
  {
  $("h1").text("You lose");
  audio.play();
  respond(6);
  window.setTimeout(function() { respondback(6) }, 100);
  $("h2").text("Your score is: " + (lvl - 1))

  col = [];
  current = [];
  lvl = 1;
  return 0;
  }

  if (col.length === current.length)
  {
    $("h1").text("Level: " + ++lvl);
    set();
    current = [];
    return 1;
  }
}


function set() {

    let newcolor = Randomize();
    col.push(newcolor);
  setTimeout(function (){anim(col[col.length - 1])}, 1000);

}



  $("#one").click(function(){
    anim(1);
    current.push(1);
    check();

    });


  $("#two").click(function(){
    anim(2);
    current.push(2);
    check();
  });


  $("#three").click(function(){
    anim(3);
    current.push(3);
    check();
  });


  $("#four").click(function(){
    anim(4);
    current.push(4);
    check();

  });



document.addEventListener("keydown", function (){
  var col = [];
var current = [];
var lvl = 1;
$("h1").text("Level: 1");
$("h2").text("");
set();
});

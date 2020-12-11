var audio1 = new Audio ("drum1.mp3");
var audio2 = new Audio ("arfa2.mp3");
var audio3 = new Audio ("marakasi3.mp3");
var audio4 = new Audio ("bell4.mp3");
var audio5 = new Audio ("buben5.mp3");
var audio6 = new Audio ("turkeyDrum6.mp3");
var audio7 = new Audio ("lozhki7.mp3");
var keypressed = "";

function respond(i)
{
  document.querySelectorAll(".musicbox")[i].classList.add("clickborder");
}

function respondback(i)
{
  document.querySelectorAll(".musicbox")[i].classList.remove("clickborder");
}

document.querySelectorAll(".musicbox")[0].addEventListener("click", function ()
{
  respond(0)
  audio1.play ();
  window.setTimeout(function() { respondback(0) }, 100);
}
);
document.querySelectorAll(".musicbox")[1].addEventListener("click", function ()
{
  respond(1);
  audio2.play ();
  window.setTimeout(function() { respondback(1) }, 100);
}
);
document.querySelectorAll(".musicbox")[2].addEventListener("click", function ()
{
  respond(2);
  audio3.play ();
  window.setTimeout(function() { respondback(2) }, 100);
}
);
document.querySelectorAll(".musicbox")[3].addEventListener("click", function ()
{
  respond(3);
  audio4.play ();
  window.setTimeout(function() { respondback(3) }, 100);
}
);
document.querySelectorAll(".musicbox")[4].addEventListener("click", function ()
{
  respond(4);
  audio5.play ();
  window.setTimeout(function() { respondback(4) }, 100);
}
);
document.querySelectorAll(".musicbox")[5].addEventListener("click", function ()
{
  respond(5);
  audio6.play ();
  window.setTimeout(function() { respondback(5) }, 100);
}
);
document.querySelectorAll(".musicbox")[6].addEventListener("click", function ()
{
  respond(6);
  audio7.play ();
  window.setTimeout(function() { respondback(6) }, 100);
}
);

document.addEventListener("keydown", function ()
{
  switch(event.key)
  {
    case "1" :
      respond(0);
      audio1.play ();
      window.setTimeout(function() { respondback(0) }, 100);
    break;

    case "2" :
      respond(1);
      audio2.play ();
      window.setTimeout(function() { respondback(1) }, 100);
    break;

    case "3" :
      respond(2);
      audio3.play ();
      window.setTimeout(function() { respondback(2) }, 100);
    break;

    case "4" :
      respond(3);
      audio4.play ();
      window.setTimeout(function() { respondback(3) }, 100);
    break;

    case "5" :
      respond(4);
      audio5.play ();
      window.setTimeout(function() { respondback(4) }, 100);
    break;

    case "6" :
      respond(5);
      audio6.play ();
      window.setTimeout(function() { respondback(5) }, 100);
    break;

    case "7" :
      respond(6);
      audio7.play ();
      window.setTimeout(function() { respondback(6) }, 100);
    break;
  }

}
);

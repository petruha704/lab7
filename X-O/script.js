


var check = [false,false,false,false,false,false,false,false,false];
var score = ["","","","","","","","",""];
var count = 0;
var win = "Play a game!";
document.querySelectorAll("h1")[0].textContent = win;

function puto(){
  let o = true;
  while (o)
  {
let rand = Math.random();
    rand = Math.floor(rand * 9);
    if (check[rand] !== true)
    {
      document.querySelectorAll("p")[rand].classList.add("bigo");
      check[rand] = true;
      score[rand] = "o";
      o = false;
      count++;

    }
    else if (count === 9)
    {
      o = false;

    }
  }
}

 function wincheck()
{

  if ((score[0] === "x" && score[1] === "x" && score[2] ==="x")||
      (score[3] === "x" && score[4] === "x" && score[5] ==="x")||
      (score[6] === "x" && score[7] === "x" && score[8] ==="x")||
      (score[0] === "x" && score[3] === "x" && score[6] ==="x")||
      (score[1] === "x" && score[4] === "x" && score[7] ==="x")||
      (score[2] === "x" && score[5] === "x" && score[8] ==="x")||
      (score[0] === "x" && score[4] === "x" && score[8] ==="x")||
      (score[2] === "x" && score[4] === "x" && score[6] ==="x"))

  {
    win = "You are the winner!";

  }
  else if ((score[0] === "o" && score[1] === "o" && score[2] ==="o")||
      (score[3] === "o" && score[4] === "o" && score[5] ==="o")||
      (score[6] === "o" && score[7] === "o" && score[8] ==="o")||
      (score[0] === "o" && score[3] === "o" && score[6] ==="o")||
      (score[1] === "o" && score[4] === "o" && score[7] ==="o")||
      (score[2] === "o" && score[5] === "o" && score[8] ==="o")||
      (score[0] === "o" && score[4] === "o" && score[8] ==="o")||
      (score[2] === "o" && score[4] === "o" && score[6] ==="o"))

  {
    win = "Computer is the winner!";

  }


}

  function isEnd()
  {

      if (count === 9 && win === "Play a game!"){
      win = "Draw";
      document.querySelectorAll("h1")[0].textContent = win;
      }

  }

document.querySelectorAll("p")[0].addEventListener("click", function (){
  if (check[0] === false)
  {
  document.querySelectorAll("p")[0].classList.add("bigx1");
  check[0] = true;
  score[0] = "x";
  count++;
  wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
    }
  }
  );



document.querySelectorAll("p")[1].addEventListener("click", function (){
  if (check[1] === false)
  {
  document.querySelectorAll("p")[1].classList.add("bigx");
  check[1] = true;
  score[1] = "x";
  count++;
    wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
    }
  }
  );



document.querySelectorAll("p")[2].addEventListener("click", function (){
  if (check[2] === false)
  {
  document.querySelectorAll("p")[2].classList.add("bigx");
  check[2] = true;
  score[2] = "x";
  count++;
  wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
      }
    }
    );



document.querySelectorAll("p")[3].addEventListener("click", function (){
  if (check[3] === false)
  {
  document.querySelectorAll("p")[3].classList.add("bigx");
  check[3] = true;
  score[3] = "x";
  count++;
  wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
    }
  }
  );



document.querySelectorAll("p")[4].addEventListener("click", function (){
  if (check[4] === false)
  {
  document.querySelectorAll("p")[4].classList.add("bigx");
  check[4] = true;
  score[4] = "x";
  count++;
  wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
    }
  }
  );



document.querySelectorAll("p")[5].addEventListener("click", function (){
  if (check[5] === false)
  {
  document.querySelectorAll("p")[5].classList.add("bigx");
  check[5] = true;
  score[5] = "x";
  count++;
  wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
    }
  }
  );



document.querySelectorAll("p")[6].addEventListener("click", function (){
  if (check[6] === false)
  {
  document.querySelectorAll("p")[6].classList.add("bigx");
  check[6] = true;
  score[6] = "x";
  count++;
  wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
    }
  }
  );



document.querySelectorAll("p")[7].addEventListener("click", function (){
  if (check[7] === false)
  {
  document.querySelectorAll("p")[7].classList.add("bigx");
  check[7] = true;
  score[7] = "x";
  count++;
  wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
    }
  }
  );



document.querySelectorAll("p")[8].addEventListener("click", function (){
  if (check[8] === false)
  {
  document.querySelectorAll("p")[8].classList.add("bigx");
  check[8] = true;
  score[8] = "x";
  count++;
  wincheck();
  puto();
  wincheck();
  document.querySelectorAll("h1")[0].textContent = win;
  isEnd();
    }
  }
  );

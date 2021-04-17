
function changes()
{
  document.querySelector(".img1").classList.add("pressed");
  document.querySelector(".img2").classList.add("pressed");
  var p1 = Math.random();
  p1=Math.floor((p1*6)+1)
  var imageSrc1 = "images/dice"+p1+".png"
  var p2 = Math.random();
  p2=Math.floor((p2*6)+1)
  var imageSrc2 = "images/dice"+p2+".png"


  document.querySelector(".img1").setAttribute("src",imageSrc1);
  document.querySelector(".img2").setAttribute("src",imageSrc2);


  if(p1>p2)
  {
    document.querySelector("h1").innerHTML=" 🚩 PLAYER 1 wins!";
  }
  else if(p2>p1)
  {
    document.querySelector("h1").innerHTML="PLAYER 2 wins! 🚩 ";
  }
  else
  {
      document.querySelector("h1").innerHTML="DRAW";
  }

  setTimeout(function(){
  document.querySelector(".img1").classList.remove("pressed");},220);
  setTimeout(function(){
  document.querySelector(".img2").classList.remove("pressed");},220);
  }
document.load(changes());
document.querySelector("h1").innerHTML="Refresh Me";

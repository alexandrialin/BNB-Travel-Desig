var aa = document.getElementById("AAbutton");
var box1 = document.getElementById("accessBar");
var decreaseButton = document.getElementById("decrease");
var increaseButton = document.getElementById("increase");
var scale = document.getElementById("displayScale");
var visibility = "off";
var sizePercentage = 100;
var x = document.getElementsByTagName("BODY")[0];
var containerVar = document.getElementsByClassName("input-container");
var scaleVar = 100;

// start();
// function start() {
//     aa.addEventListener("click", displayBar);
    
// }
function displayBar(){
  if(visibility==="on"){
    box1.style = "visibility:hidden";
    visibility = "off";
    console.log(visibility);
  }
  else if(visibility==="off"){
    box1.style = "visibility: visible";
    visibility= "on";
     console.log(visibility);
  }
} 

function decreaseSize(){
  if(scaleVar>90){ 
    if(scaleVar==110){
      x.style = "transform: scale(1.05)";
      scaleVar=105;
    }
      else if(scaleVar==105)
    {
      x.style = "transform: scale(1)";
      scaleVar=100;
    }
    else if(scaleVar==100)
    {
      x.style = "transform: scale(0.95)";
      scaleVar=95;
    }
    else if(scaleVar==95)
    {
      x.style = "transform: scale(0.9)";
      scaleVar=90;
    }
    
    console.log(scaleVar);
      sizePercentage -= 5;
      scale.innerHTML = sizePercentage + "%";
      }

}

//

function increaseSize(){
  if(scaleVar<110){ 
    if(scaleVar==90){
    x.style = "transform: scale(0.95)";
    scaleVar=95;
  }
  if(scaleVar==95){
    x.style = "transform: scale(1)";
    scaleVar=100;
  }
  else if(scaleVar==100){
    x.style = "transform: scale(1.05)";
    scaleVar=105;
  }
  else if(scaleVar==105){
    x.style = "transform: scale(1.1)";
    scaleVar=110;
  }

  console.log(scaleVar);
  sizePercentage += 5;
  scale.innerHTML = sizePercentage + "%";
  }
}
/*var rocket = document.getElementById("rocket");*/
var flame = document.getElementById("flame");
var screen = document.getElementById("screen");
var stopp = false;
var generateStars;
var generaterocks;
var deleterocks;
var hoverscreen =true;
var error;
let rocket = document.querySelector('.rocket');
window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  // Do stuff with the new orientation data
}


var Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

function moveRocket2() {
  
  var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
  var bottom = parseInt(window.getComputedStyle(rocket).getPropertyValue("bottom"));
  var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));

window.addEventListener("keydown", addshot);

document.addEventListener("mousemove", mousemove)
}

function addshot(e) {
  if (e.keyCode  == 1 || e.keyCode == 32) {
      
    let screen = document.querySelector('.screen');
    //32 is for space key
    //flame.style.left = left;
    //flame.style.up = up;
    var shot = document.createElement("div");
    
    shot.classList.add("shot");
    screen.appendChild(shot);
    
    var bottom = window.innerHeight - up-230 ;
    shot.style.bottom = bottom +  "px";
    console.log("test1");
    var moveshot= setInterval(() => {
      console.log("test2");
        var rocks = document.getElementsByClassName("rock");
        for (var i = 0; i < rocks.length; i++) {
            var rock = rocks[i];
            if (rock != undefined) {
                var rockbound = rock.getBoundingClientRect();
                var blastbound = shot.getBoundingClientRect();
    
              //Condition to check whether the rock/alien and the bullet are at the same position..!
              //If so,then we have to destroy that roc
              if (
                blastbound.left >= rockbound.left -20 &&
                blastbound.right <= rockbound.right +60  &&
                
                blastbound.bottom <= rockbound.bottom -100
              ) {
                rock.parentElement.removeChild(rock); 
                shot.parentElement.removeChild(shot);
              }
            }
          }
      var shotbottom = parseInt(
        window.getComputedStyle(shot).getPropertyValue("bottom")
      );
     
      //Stops the shot from moving outside the gamebox
      if (shotbottom >= 1000) {
        clearInterval(moveshot);
      }

     
     
      shot.style.bottom = parseInt(window.getComputedStyle(shot).getPropertyValue("bottom")) + 7  + "px";
    });
    shot.style.left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left")) + 22 +  "px"; //shot should always be placed at the top of my jet..!
  }
}


function mousemove(e){
  let flame = document.querySelector('.flame');
  let width = window.innerWidth;
  let heigth = window.innerHeight;
  var rocketbound = rocket.getBoundingClientRect();
  var rocks = document.getElementsByClassName("rock")
  var screen = document.getElementById("screen");
  if (stopp == false)  {
    if(hoverscreen){

    
 
    console.log(e.offsetX)
  if(e.offsetX > width *0.02 && e.offsetX < width*0.8 && e.offsetY < heigth *0.8 && e.offsetY > heigth * 0.09){
    a = width *0.15
    
   //console.log(rocketbound.left )
   //console.log(a)
  if (rocketbound.left > 160) {
  rocket.style.left= e.offsetX - 35  + 'px';
  rocket.style.top = e.offsetY -55 + 'px';
  flame.style.left= e.offsetX -20  + 'px';
  flame.style.top = e.offsetY -3 + 'px';
  up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
  var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
  }
}
}
  for (var i = 0; i < rocks.length; i++) {
    var rock = rocks[i];
    var rockbound = rock.getBoundingClientRect();
    
    //Condition to check whether the rock/alien and the bullet are at the same position..!
    //If so,then we have to destroy that roc
    if (
      rocketbound.left >= rockbound.left -20   &&
      rocketbound.left <= rockbound.left +30  &&
      rocketbound.top -70 <= rockbound.top &&
      rocketbound.top  >= rockbound.top  ) {
      stoprunning();
      error=1;
      }
    if (
      rocketbound.left >= rockbound.left -20   &&
      rocketbound.left <= rockbound.left -20   &&
      rocketbound.top >= rockbound.top -50  &&
      rocketbound.top  <= rockbound.top +50  ) {
      stoprunning();
      error=2;
      
      }
      //oben
      if (
        rocketbound.left >= rockbound.left -20   &&
        rocketbound.left <= rockbound.left +30  &&
        rocketbound.top -90 <= rockbound.top   &&
        rocketbound.top  >= rockbound.top -80  ) {
        stoprunning();
        error=33;
        
        }
        //rechts
      if (
        rocketbound.left >= rockbound.left   &&
        rocketbound.left <= rockbound.left + 50  &&
        rocketbound.top -90 <= rockbound.top   &&
        rocketbound.top  >= rockbound.top -80  ) {
        stoprunning();
        error=4;
        
        }
    }
} 
}

function onscreen(){
 hoverscreen =true;
}
function offscreen(){
  hoverscreen =false;
}
function moveRocket() {
window.addEventListener("keydown", (e) => {
    let rocket = document.querySelector('.rocket');
    let flame = document.querySelector('.flame');
    let ss = parseInt(window.getComputedStyle(document.querySelector('.screen')).getPropertyValue("width"));
    var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    var right = parseInt(window.getComputedStyle(rocket).getPropertyValue("right"));
    var leftFlame = parseInt(window.getComputedStyle(flame).getPropertyValue("left"));
     
    var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    var bottom = parseInt(window.getComputedStyle(rocket).getPropertyValue("bottom"));
    var upFlame = parseInt(window.getComputedStyle(flame).getPropertyValue("top"));
    //var screenlength = parseInt(window.getComputedStyle(screen).getPropertyValue("top"));

window.onkeydown = function(e) {
var kc = e.keyCode;
e.preventDefault();

if      (kc === 65) Keys.left = true;  // only one key per event
else if (kc === 87) Keys.up = true;    // so check exclusively
else if (kc === 68) Keys.right = true;
else if (kc === 83) Keys.down = true;
}


window.onkeyup = function(e) {
var kc = e.keyCode;
e.preventDefault();

if      (kc === 65) Keys.left = false;
else if (kc === 87) Keys.up = false;
else if (kc === 68) Keys.right = false;
else if (kc === 83) Keys.down = false;
};

if (Keys.up &&  up > 0) {
  
   rocket.style.top = up - 30 + "px";
    flame.style.top = upFlame - 30 + "px";
    
   
}
else if (Keys.down && up < 650) {  
    rocket.style.top = up + 30 + "px";
    flame.style.top = upFlame + 30 + "px";
}

if (Keys.left &&  left > 0) {
   
    rocket.style.left = left - 30 + "px";
    flame.style.left = leftFlame - 30 + "px";
    
}
else if (Keys.right && left < ss * 0.93) {
    rocket.style.left = left + 30 + "px";
    flame.style.left = leftFlame + 30 + "px";
}


if (e.key == "ArrowUp" || e.keyCode == 32 ) {
    let screen = document.querySelector('.screen');
    //32 is for space key
    //flame.style.left = left;
    //flame.style.up = up;
    var shot = document.createElement("div");
    
    shot.classList.add("shot");
    screen.appendChild(shot);
    
    var bottom = window.innerHeight - up- 230 ;
    shot.style.bottom = bottom +  "px";

    var moveshot= setInterval(() => {
        var rocks = document.getElementsByClassName("rock");
        for (var i = 0; i < rocks.length; i++) {
            var rock = rocks[i];
            if (rock != undefined) {
                var rockbound = rock.getBoundingClientRect();
                var blastbound = shot.getBoundingClientRect();
    
              //Condition to check whether the rock/alien and the bullet are at the same position..!
              //If so,then we have to destroy that roc
              if (
                blastbound.left >= rockbound.left -20 &&
                blastbound.right <= rockbound.right +60  &&
                
                blastbound.bottom <= rockbound.bottom -100
              ) {
                rock.parentElement.removeChild(rock); 
                shot.parentElement.removeChild(shot);
                
              }
            }
          }
      var shotbottom = parseInt(window.getComputedStyle(shot).getPropertyValue("bottom"));
     
      //Stops the shot from moving outside the gamebox
      if (shotbottom >= 1000) {
        clearInterval(moveshot);
      }

      shot.style.left = left + 22 +  "px"; //shot should always be placed at the top of my jet..!
     
      shot.style.bottom = shotbottom + 7 + "px";
    });
  }

});
}


function stars(){
    let star
    var timeout = 0;

    generateStars = setInterval(() => {
      
      while(timeout <100) {

        let screen = document.querySelector('.screen');

        star = document.createElement('i');
    
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1+0.6;
    
        let h = Math.random() * 80 +0.1;
    
        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';
        screen.appendChild(star)
        timeout++;

      };
    
    },14)
    //var deleteStars = setInterval(() => {
    // screen.removeChild(star)
      
     // },14)
}


function rocks() {
    var timeout = 0;
    var oldleft = 0;
    let width = window.innerWidth;
    generaterocks = setInterval(() => {

        
        let screen = document.querySelector('.screen');
        
        var rock = document.createElement('div');
        rock.classList.add('rock');
        
        
        if (width > 1000){
          let x = Math.floor(Math.random() * window.innerWidth);
          if ((oldleft - x) > 100 || (oldleft - x) < -100) {
          
            if(x > 0 && x < 1200 ) {
              let duration = Math.random() * 1+5;
              let h = (Math.random()+1) * 110;

              rock.style.left = x + 'px';
            
              rock.style.height = h + 'px';
              rock.style.width
                
              rock.style.animationDuration = duration + 's';
              screen.appendChild(rock)
            }
          } 
      } else {
          //let x = Math.floor(Math.random() * window.innerWidth)* 0.82;
          let x = 300
          if(x > 0 && x < (width *0.8) ) {

            let duration = Math.random() * 1+5;
            let h = (Math.random()+1) * 110;

            rock.style.left = x + 'px';
            
            rock.style.height = h + 'px';
            rock.style.width
                
            rock.style.animationDuration = duration + 's';
            screen.appendChild(rock)
          }
          
          
      }
      oldleft = x;
 
        
    }, 600);
}


function runpoints() {
   generateStars = setInterval(() => {
    var element = document.getElementById("score");
    element.innerHTML = score.getPoints();  
    },14)
}
function checkmissedrocks() {
  
  let heigth = window.innerHeight;
  let width = window.innerWidth;
  console.log(heigth)
  console.log("da")
  console.log(width)
  console.log("da")
  getmissed = setInterval(() => {
    var rockies = document.getElementsByClassName("rock")
  for (var i = 0; i < rockies.length; i++) {
    
    var rock = rockies[i];
    pos = rock.getBoundingClientRect();
    if (width > 1000){
      if(pos.top > 800){
        stoprunning();
        error=6;
    }
  }
    else {
      console.log("ssadfefW")
      if(pos.top > (heigth* 0.85)){
        stoprunning();
        error=String(pos.left) + " " + String(pos.top) ;
    
   
  }
    }
  }
  },500)
  } 

function shoot() {
  let rocket = document.querySelector('.rocket');
  var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
  var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));

      let screen = document.querySelector('.screen');
      //32 is for space key
      //flame.style.left = left;
      //flame.style.up = up;
      var shot = document.createElement("div");
      
      shot.classList.add("shot");
      screen.appendChild(shot);
      
      var bottom = window.innerHeight - up- 230 ;
      shot.style.bottom = bottom +  "px";
  
      var moveshot= setInterval(() => {
          var rocks = document.getElementsByClassName("rock");
          for (var i = 0; i < rocks.length; i++) {
              var rock = rocks[i];
              if (rock != undefined) {
                  var rockbound = rock.getBoundingClientRect();
                  var blastbound = shot.getBoundingClientRect();
      
                //Condition to check whether the rock/alien and the bullet are at the same position..!
                //If so,then we have to destroy that roc
                if (
                  blastbound.left >= rockbound.left -20 &&
                  blastbound.right <= rockbound.right +60  &&
                  
                  blastbound.bottom <= rockbound.bottom -100
                ) {
                  rock.parentElement.removeChild(rock); 
                  shot.parentElement.removeChild(shot);
                  
                }
              }
            }
        var shotbottom = parseInt(
          window.getComputedStyle(shot).getPropertyValue("bottom")
        );
       
        //Stops the shot from moving outside the gamebox
        if (shotbottom >= 1000) {
          clearInterval(moveshot);
        }
  
       
       
        shot.style.bottom = parseInt(window.getComputedStyle(shot).getPropertyValue("bottom")) + 7  + "px";
      });
      shot.style.left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left")) + 22 +  "px"; //shot should always be placed at the top of my jet..!
    }
  
 var score  = (function() {
    var stop = 1;
    var points = 0;
    
    
    return {
      start: function() {
        stop = 0;
      },
      stop: function() {
        stop = 1;
      },
      clear: function() {
        score.stop();
        points = 0;
        
      },
      restart: function() {
        score.clear();
        score.start();
      },
      timer: function() {
        if (stop === 0) {
          points++;
        }
      },
      getPoints: function() {
          a = points;
          return a;
      },
    }
  })();
  setInterval(score.timer, 10);
   
  
  
  
  function stoprunning(){
    score.stop();
    console.log("Yep")
    document.removeEventListener("mousemove", mousemove);
    document.removeEventListener("keydown", addshot);
    
    clearInterval(generaterocks);
    clearInterval(getmissed);
    //score.stop();
    //score.restart();
    stopp = true;
    my_popup = document.getElementsByClassName("my_popup")[0];
    my_popup.style.display="inline-block";
    var element = document.getElementById("popupscore");
    element.innerHTML = error;  
   // element.innerHTML = score.getPoints();  
    console.log(stopp)
    console.log("hathathat")
  
    deleterocks = setInterval(() => {
      if (stopp == true) {
      var rockies = document.getElementsByClassName("rock")
      for (var i = 0; i < rockies.length; i++) {
          
        var rock = rockies[i];
        var rockbound = rock.getBoundingClientRect();
        console.log(1)
        rock.parentElement.removeChild(rock);
      }
        
      }
      },50) 
  }
 
  function restart() {
    console.log(deleterocks);
    clearInterval(deleterocks);
    stopp = false;
    moveRocket2();
    rocks();
    checkmissedrocks();
    //moveRocket();
    my_popup = document.getElementsByClassName("my_popup")[0];
    my_popup.style.display="none";
    score.clear();
    score.restart();
    runpoints();
    
  }

  function start() {
  score.start();
  stars();
   rocks();
   moveRocket2();
   checkmissedrocks();
   runpoints();
  }

  var px = 50; // Position x and y
var py = 50;
var vx = 0.0; // Velocity x and y
var vy = 0.0;
var updateRate = 1/60; // Sensor refresh rate

function getAccel(){
DeviceMotionEvent.requestPermission().then(response => {
    
    if (response == 'granted') {
   // Add a listener to get smartphone orientation 
       // in the alpha-beta-gamma axes (units in degrees)
       moverocketonmobile = window.addEventListener('deviceorientation',(event) => {
        checkmissedrocks();
            // Expose each orientation angle in a more readable way
            rotation_degrees = event.alpha;
            frontToBack_degrees = event.beta-20;
            leftToRight_degrees = event.gamma;
            var rocks = document.getElementsByClassName("rock")
            
            if (stopp == false)  {
            // Update velocity according to how tilted the phone is
            // Since phones are narrower than they are long, double the increase to the x velocity
            vx = vx + leftToRight_degrees * updateRate; 
            vy = vy + frontToBack_degrees * updateRate *1/2;
            
            // Update position and clip it to bounds
            px = px + vx*.5;
            if (px > 90 || px < 0){ 
                px = Math.max(0, Math.min(90, px)) // Clip px between 0-98
                vx = 0;
            }

            py = py + vy*.5;
            if (py > 90 || py < 0){
                py = Math.max(0, Math.min(90, py)) // Clip py between 0-98
                vy = 0;
            }
            rocket = document.querySelector('.rocket');
            flame = document.querySelector('.flame');
           
            rocket.setAttribute('style', "left:" + (px) + "%;" +
                                          "top:" + (py) + "%;");
            flame.setAttribute('style', "left:" + (px+3.1) + "%;" +
            "top:" + (py+7.4) + "%;");
            
            for (var i = 0; i < rocks.length; i++) {
              var rock = rocks[i];
              var rockbound = rock.getBoundingClientRect();
              
              //Condition to check whether the rock/alien and the bullet are at the same position..!
              //If so,then we have to destroy that roc
              if (
                rocketbound.left >= rockbound.left -20   &&
                rocketbound.left <= rockbound.left +30  &&
                rocketbound.top -70 <= rockbound.top &&
                rocketbound.top  >= rockbound.top  ) {
                stoprunning();
                error=11;
                }
              if (
                rocketbound.left >= rockbound.left -20   &&
                rocketbound.left <= rockbound.left -20   &&
                rocketbound.top >= rockbound.top -50  &&
                rocketbound.top  <= rockbound.top +50  ) {
                stoprunning();
                error=12;
                
                }
                //oben
                if (
                  rocketbound.left >= rockbound.left -20   &&
                  rocketbound.left <= rockbound.left +30  &&
                  rocketbound.top -90 <= rockbound.top   &&
                  rocketbound.top  >= rockbound.top -80  ) {
                  stoprunning();
                  error=13;
                  
                  }
                  //rechts
                if (
                  rocketbound.left >= rockbound.left   &&
                  rocketbound.left <= rockbound.left + 50  &&
                  rocketbound.top -90 <= rockbound.top   &&
                  rocketbound.top  >= rockbound.top -80  ) {
                  stoprunning();
                  error=14;
                  
                  }
              }
            }
        });
    }
});
}
  start();
   //rocks();
   //moveRocket();
   //moveRocket2();
   //checkmissedrocks();
   //shoot();
   //moveRocket2();

  
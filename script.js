/*var rocket = document.getElementById("rocket");*/
var flame = document.getElementById("flame");
var screen = document.getElementById("screen");


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
  document.addEventListener("mousemove", function(e){
    let rocket = document.querySelector('.rocket');
    let flame = document.querySelector('.flame');
    rocket.style.left= e.offsetX - 35  + 'px';
    rocket.style.top = e.offsetY -55 + 'px';
    flame.style.left= e.offsetX -20  + 'px';
    flame.style.top = e.offsetY -3 + 'px';
    var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));

    

    
   
  })
}

function moveRocket3() {
  let rocket = document.querySelector('.rocket');
  var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
  var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));

window.addEventListener("keydown", (e) => {
   if (e.keyCode  == 1 || e.keyCode == 32) {
      console.log(rocket);
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
  
        shot.style.left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left")) + 22 +  "px"; //shot should always be placed at the top of my jet..!
       
        shot.style.bottom = parseInt(window.getComputedStyle(shot).getPropertyValue("bottom")) + 7  + "px";
      });
    }
  });

  document.addEventListener("mousemove", function(e){
    let rocket = document.querySelector('.rocket');
    let flame = document.querySelector('.flame');
    rocket.style.left= e.offsetX - 35  + 'px';
    rocket.style.top = e.offsetY -55 + 'px';
    flame.style.left= e.offsetX -20  + 'px';
    flame.style.top = e.offsetY -3 + 'px';
    var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));

    

    
   
  })
  
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

/*
function checkShot(shot) {
    var blast = shot
    var rocks = document.getElementsByClassName("rock");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var blastbound = blast.getBoundingClientRect();

          //Condition to check whether the rock/alien and the bullet are at the same position..!
          //If so,then we have to destroy that rock

          if (
            blastbound.left >= rockbound.left &&
            blastbound.right <= rockbound.right &&
            blastbound.top <= rockbound.top &&
            blastbound.bottom <= rockbound.bottom
          ) {
            rock.parentElement.removeChild(rock); //Just removing that particular rock;
            //Scoreboard
            
          }
        }
      }
}*/


/*
window.addEventListener("keydown", (e) => {
    keysPressed[e.key] = e.type;

    let rocket = document.querySelector('.rocket');
    var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    if (e.key == "ArrowLeft" && left > -1000) {
        rocket.style.left = left - 20 + "px";
    }
    //460  =>  board width - jet width
    else if (e.key == "ArrowRight" && left <= 1000) {
        rocket.style.left = left + 20 + "px";
    }
    else if (e.key == "ArrowUp" && up <= 1000) {
        rocket.style.top = up - 20 + "px";
    }

    else if (e.key == "ArrowDown" && up <= 1000) {
        rocket.style.top = up + 20 + "px";
    }
})

*/


function stars(){
    let star
    var timeout = 0;
    var generateStars = setInterval(() => {
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
    var generaterocks = setInterval(() => {

       
        let screen = document.querySelector('.screen');
        
        var rock = document.createElement('div');
        rock.classList.add('rock');
        
        

        let x = Math.floor(Math.random() * window.innerWidth);
       
        if ((oldleft - x) > 100 || (oldleft - x) < -100) {

       
        let duration = Math.random() * 1+10;
        let h = (Math.random()+1) * 110;

        rock.style.left = x + 'px';
        
        rock.style.height = h + 'px';
        rock.style.width
            
        rock.style.animationDuration = duration + 's';
        screen.appendChild(rock)
      }
      oldleft = x;
 
        
    }, 500);
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
        window.addEventListener('deviceorientation',(event) => {
            // Expose each orientation angle in a more readable way
            rotation_degrees = event.alpha;
            frontToBack_degrees = event.beta;
            leftToRight_degrees = event.gamma;
            
            // Update velocity according to how tilted the phone is
            // Since phones are narrower than they are long, double the increase to the x velocity
            vx = vx + leftToRight_degrees * updateRate*4/3; 
            vy = vy + frontToBack_degrees * updateRate *2/3;
            
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
            flame.setAttribute('style', "left:" + (px+3.5) + "%;" +
            "top:" + (py+7.5) + "%;");
            
        });
    }
});
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
  
        shot.style.left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left")) + 22 +  "px"; //shot should always be placed at the top of my jet..!
       
        shot.style.bottom = parseInt(window.getComputedStyle(shot).getPropertyValue("bottom")) + 7  + "px";
      });
    }
  


   stars();
   rocks();
   moveRocket();
   //shoot();
   //moveRocket2();

  

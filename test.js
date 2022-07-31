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
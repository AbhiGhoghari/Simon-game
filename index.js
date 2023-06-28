
var level = "Level";
var count = 0;
var gameState = [];
var playerState = [];

var p =0;



$("body").keypress("click" , function(){

    var queal = $("h1").text();
    if(queal === "Press A Key to Start" || queal === "Game Over, Press Any Key to Restart"){
      if(queal === "Game Over, Press Any Key to Restart"){

            p=0;
          count = 0;
          gameState = [];
          playerState = [];
          $("body").removeClass("wrong");
          startGame();
          
          
      }else{
          startGame();
      }
      
    }
  
  })

  function startGame(){
    playerState = [];
    changeLevel(count = count +1);
}

function changeLevel(count){

    $("h1").text(level+" "+count);
    
     var color = randomeBox();
     $("."+color).fadeOut(100).fadeIn(100);
     $("."+color).addClass("animate");

    setTimeout(function(){
    $("."+color).removeClass("animate");
    },500);
   
    gameState.push(color);
    playSound(color);

}

$("button").click( function(event){
    
    playerState.push(event.target.classList[1]);
    $("."+event.target.classList[1]).fadeOut(100).fadeIn(100);
    playSound(event.target.classList[1]);
    
        arraysAreEqual(playerState , gameState);
    
});



function randomeBox(){
    
    var number = Math.floor(Math.random()*4)+1;
     
     switch(number){
         case 1:
             return "green";
         break;
 
         case 2:
             return "red";
         break;
 
         case 3:
             return "yellow";
         break;
 
         case 4:
             return "blue";
         break;
     }
 }

function playSound(sound){

    switch(sound){
        case "red":
            var sound = new Audio('./sounds/red.mp3');
            sound.play();
        break;

        case "blue":
            var sound = new Audio('./sounds/blue.mp3');
            sound.play();
        break;

        case "green":
            var sound = new Audio('./sounds/green.mp3');
            sound.play();
        break;

        case "yellow":
            var sound = new Audio('./sounds/yellow.mp3');
            sound.play();
        break;
    }

}


function continueGame(){
    p=0;
    startGame();
    

}
function restartGame(){
p=0;
gameState = [];
    $("body").addClass("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    var sound = new Audio('./sounds/wrong.mp3');
    sound.play();
}




function arraysAreEqual(array1, array2) {

    
        if(array1.length <= array2.length){
            

            for(var i = p ; i < array1.length; i++){
    
                if(array1[i] === array2[i]){
                    if(array1.length === array2.length){
                        setTimeout(function(){
                            continueGame();
                        },1000);
                        
                    }
                    p = p+1;
             }
             else{
                restartGame();
             }
            
            }
            
    
        }
    }
    
        
    
  
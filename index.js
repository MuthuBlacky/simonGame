//event listener for user choosen button
var ptr = 0;
var flag = 0;
$(document).keydown(function(event){
   if(flag === 0){
    flag = 1;
    autoSound();
   }
     ptr = 0;
    return false;;
});
function playSound(pressedBtn){
      var audio = new Audio('sounds/' + pressedBtn + '.mp3');
      audio.play();
 }
 var soundGenerated = []
 function removeAutoAnime(btnColor){
    $('#' +  btnColor).removeClass("autoAnime");
 }
 function setAnime(btnColor){
     $('#'+btnColor).addClass("autoAnime");
     setTimeout(removeAutoAnime,100,btnColor);
     playSound(btnColor);
 }
 function autoSound(){
    var n = Math.random();
    n = Math.ceil(n * 4);
    var txt = '';
    if(n === 1){
        txt = 'green';
    }else if(n === 2){
        txt = 'red';
    }else if(n === 3){
        txt = 'yellow';
    }else{
        txt = 'blue';
    }
    soundGenerated.push(txt);
    setAnime(txt);
    //setTimeout(setAnime,800,txt);
    $("h1").text("Level "+ soundGenerated.length);
 }
 function removeAnime(curBtn){
    $(curBtn).removeClass("clickAnime");
 }
$(".btn").click(function (){
   $(this).addClass("clickAnime");
   setTimeout(removeAnime,100,this);
   var pressedBtn = $(this).attr("id");
   playSound(pressedBtn);
   if(checkValid(pressedBtn) === false){
      endGame();
   }
   if(flag == 1 && ptr === soundGenerated.length){
     ptr = 0;
     setTimeout(autoSound,1000);
   }
});
function checkValid(pressedBtn){
   if(soundGenerated[ptr] == pressedBtn){
    ptr++;
    return true;
   } 
   ptr = 0;
   return false;
}
function redBack(){
    $("body").css("backgroundColor", "#011F3F");
}
function endGame(){
    $("h1").text("Game Over, Press Any Key to Restart");
    soundGenerated.length = 0;
    playSound("wrong");
    $("body").css("backgroundColor","red");
    setTimeout(redBack,100);
    flag = 0;
}

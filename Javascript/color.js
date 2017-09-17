var dif=true;
var color;
var answer;
var squares = document.querySelectorAll(".square");
var sqCols = [0,0,0,0,0,0];
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var newGame = document.querySelector("#new");
var clue = document.querySelector("#clue");

easy.addEventListener("click", function(){toEasy();})
hard.addEventListener("click", function(){toHard();})
newGame.addEventListener("click", reset);
for (k=0;k<6;k++){

    squares[k].addEventListener("click",Guess);
}

function Guess(){
    if (this===squares[answer]){
        //document.querySelectorAll(".color-match").style.color=color;
        clue.innerText="CORRECT!";
        for (i=0;i<6;i++){
            if (i!==answer){
                squares[i].style.visible="visible";
            }
        }
    }
    else {
        this.style.visibility="hidden";
    }
}

function toHard(){
    dif=true;
    for (i=3;i<6;i++){
        squares[i].style.visibility="visible";
    }
    easy.classList.toggle("selected");
    hard.classList.toggle("selected");
    reset();
}

function toEasy(){
    dif=false;
    for (i=3;i<6;i++){
        squares[i].style.visible=false;
    }
    easy.classList.toggle("selected");
    hard.classList.toggle("selected");
    reset();
}

function reset(){
    var num;
    if (dif) {
        num=6;
    }
    else {
        num=3;
    }
    answer= Math.trunc(Math.random()*num);
    
    var newCols=[];
    for (i=0;i<6;i++){
        newCols.push(ranCol());
        sqCols[i]=newCols[i];
        squares[i].style.backgroundColor=newCols[i];
    }
    color=newCols[answer];
    for (j=0;j<6;j++){
        if (j<num){
            squares[j].style.visibility="visible";
        }
        else {
            squares[j].style.visibility="hidden";
        }
    }
    clue.innerText=color;
}

function ranCol(){
    var col = "rgb(";
    var vals =[0,0,0];
    vals.forEach(function(val,index){vals[index]=Math.trunc(Math.random()*255)});
    return col+vals[0]+", "+vals[1]+", "+vals[2]+")";
}
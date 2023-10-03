
const favMovie = "titanic";

let guess = prompt("Guess my favoruite movie");

while((guess != favMovie) && (guess!='quit')){
   guess = prompt("wrong choice ! Please try again");
}

if(guess==favMovie){
    console.log("congrats! Your guess was right");
}else{
    console.log("you quit");
}
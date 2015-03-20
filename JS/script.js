/**
 * Created by MissyGotGame on 3/17/15.
 */
/*
Ashley Whitley
SDI Section 01
Conditionals Assignment
March 17, 2015
 */

alert("Ashley Loves Video Games, you should too.");

//variables to set up story

var personName = "Ashley";
var topGames = ["Destiny", "Assassin's Creed", "FarCry4"];
var gameTypes = 3;
var destinyHrs = 120;
var acCreedHrs = 350;
var farCryHrs = 95;
var average = (destinyHrs + acCreedHrs + farCryHrs)/3;
var allGames = [17, 13, 89];   //XBOX1, PS4, and XBOX360
var total = allGames[0] + allGames[1] + allGames[2];

//outputs to console to set up the story using numbers

console.log("Her name is" + " " + personName + " " + "and I am known to play video games every time I can.");
console.log("Her favorite games to play are:" + " " + topGames + ".");
console.log("She has mastered all" +" "+ gameTypes +" "+ "games.");
console.log("Her average amount of hours she plays per game is" +" "+ average +" "+ "hours."); //calculation of average with addition and division
console.log("She has" +" "+ total +" "+ "games between all three consoles."); //array used to find total of games with addition

//Finding out if I can buy the new game I want with the money I have using conditionals and a Boolean
//Also am using the greater than or equal to (logical) operator and OR operator

var newGame = "Battlefield Hardline";
var cost = 65;
var myMoney = 40; //changing this number changes the outcome printed to the console.
var getPaid = false; //Boolean - changing this to true changes the outcome on the console.

//Output of the reason I want a new game

console.log("I want to buy" +" "+ newGame +" "+ "so I can stream it on Twitch for my followers, but I don't know if I can afford it.");

//OR Operator to decide whether I can buy the game today or if I have to wait till I get paid within a conditional statement of if,else

if(myMoney >= cost || getPaid){
    console.log("Ashley can now go buy" +" "+newGame+" "+"today.")
}else{
    console.log("Ashley will have to wait till I get paid to buy the new game.");
}

//Else, if statement with three prompt options including a invalid response option.

var answer = prompt("In order to play most popular games you must be a certain age. Are you 17 or older?");

if(answer === 'yes'){
    alert("You can play a mature rated video game."); //if they type in yes
}else if(answer === 'no'){
    alert("You are not yet old enough to play a mature rated game.") //if they type in no
}else{
    alert("That is an invalid response, refresh the page and try again.") //if they type in anything other than yes or no
}

//ternary conditional statement

var gamerScore = 10000;

console.log("Ashley has an extremely high score on the XBOX which shows how much she games. Gamers are rated as 'serious gamers' after" +" "+ gamerScore +" "+ "points. These points are gained from achievements.");

//Conditional Logic

/*if(gamerScore > 4999){
    console.log("You are truly a serious gamer.");
}else{
    console.log("Your score is still to low to be considered a serious gamer.");
}*/

//instead of the long statement above the ternary is quicker...changing the value of gamerScore will change the result.

(gamerScore > 4999) ? console.log("She is truly a serious gamer.") : console.log("Her score is still too low to be considered a serious gamer.");

alert("Go play some video games!");


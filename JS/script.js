/**
 * Created by MissyGotGame on 3/17/15.
 */
/*
Ashley Whitley
SDI Section 01
Conditionals Assignment
March 17, 2015
 */

alert("Ashley Loves Video Games!")

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

console.log("My name is" + " " + personName + " " + "and I am known to play video games every time I can.");
console.log("My favorite games to play are:" + " " + topGames + ".");
console.log("I have mastered all" +" "+ gameTypes +" "+ "games.");
console.log("My average amount of hours I play per game is" +" "+ average +" "+ "hours."); //calculation of average
console.log("I have" +" "+ total +" "+ "games between all three consoles."); //array used to find total of games

//Finding out if I can buy the new game I want with the money I have using conditionals and a Boolean

var newGame = "Battlefield Hardline";
var cost = 65;
var myMoney = 40;
var getPaid = false; //Boolean

//Output of the reason I want a new game

console.log("I want to buy" +" "+ newGame +" "+ "so I can stream it on Twitch for my followers, but I don't know if I can afford it.");

//OR Operator to decide whether I can buy the game today or if I have to wait till I get paid within a conditional statement of if,else

if(myMoney >= cost || getPaid){
    console.log("I can now go buy" +" "+newGame+" "+"today.")
}else{
    console.log("I have to wait till I get paid to buy the new game.");
}

//Basic if,else conditional statement with prompt for those who want to know if they can play mature video games

var answer = prompt("Are you 17 or older?");

if(answer === 'yes'){
    alert("You can play a mature rated video game.");
}else{
    alert("You are not yet old enough to play a mature rated game.")
}

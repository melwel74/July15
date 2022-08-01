// var playerName = window.prompt("What is your robot's name?");
// // Note the lack of quotation marks around playerName
// console.log(playerName);
// // What is this?
// console.log("You can't trust a big butt and a smile");

// // this will do math and
// console.log(10 + 10);

// console.log("Our robot's name is "  + playerName);

// window.alert(" Welcome to Robot Gladiators ");

// function fight(){
//     window.alert(" The FIGHT has begun!!!");
// }

// fight();







// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less




var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length );
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
var enemyAttack = 12;





// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);






var fight = function(enemyName) {
    // alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);


  // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
  
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      
// confirm player wants to skip attack
var confirmSkip = window.confirm("Are you sure you'd like to quit");

 // check enemy's health
 if (enemyHealth <= 0) {
  window.alert(enemyNames + " has died!");
} else {
  window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}

// loops to fight each robot
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}







// if yes (true), leave fight mode
if(confirmSkip) {
    window.alert(playerName + "has decided to skip this fight. Goodbye!");
    // substract money from playerMoney for skippings
    playerMoney = playerMoney - 2;
}

// if no (false), ask question again by running fight()again
else{
    fight();
}

  
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }


// //   substract the valur of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
// enemyHealth = enemyHealth - playerAttack;
// // log a resulting message to the console so we know that it worked
// console.log(playerName +  "attacked"  + enemyName + "." + enemyName +  "now has"  + enemyHealth +  "health remaining.");
// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
  } 
  else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }
// substract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
playerHealth = playerHealth - enemyAttack;
// log a resulting message to the console so we know it worked
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  // check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}

// fight();
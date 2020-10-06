var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + ' has died!');
       // award player money for winning
      playerMoney = playerMoney + 20;
      break;      // leave while() loop since enemy is dead
    } else {
      window.alert(enemyNames + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// execute function
var startGame = () => {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    // Pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    // reset enemyHealth before starting a new fight
    enemyHealth = 50;
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    if (playerHealth > 0) {
      // let user know what round they are in, remember that array start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    } else {
      window.alert ("You have lost your robot in battle! Game Over");
      break;
    }
  }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = () => {
  window.alert("The game has now ended. Let's see how you did!");
   // if player is still alive, player wins!
   if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
}

endGame();

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "FIGHT" || promptFight === "fight")


// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
  } else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  window.alert(playerName + " has chosen to skip the fight!");

} else {
  window.alert("You need to pick a valid option. Try again!");
}
  //confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  //if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney -2;
 
  // If no (false), ask question again by running fight() again
  } else{
    fight();
  }
  var startgame = () =>{
    for (var i = 0; i < enemyNames.length; i++) {
  }
}
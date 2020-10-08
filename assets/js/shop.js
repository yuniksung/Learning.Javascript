var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
        break;
      }
    }                 //up to this point is same

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack -3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died! ");
      playerMoney = playerMoney + 20;
      break;
  }
    else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.');

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

// function to end the entire game
var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
for (var i = 0; i < enemyNames.length; i++) {
if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
  var pickedEnemyName = enemyNames[i];
  enemyHealth = randomNumber(40, 60); //set randomNumber
  fight(pickedEnemyName);
if (playerHealth > 0 && i < enemyNames.length - 1) {
  var storeConfirm = window.confirm("The fight is over, vist the store before the next round?");
  if (storeConfirm) {
      shop();
  }
  }
}
else {
  window.alert("You have lost your robot in battle! Game Over!");
  break;
}
}
endGame(); 
};

var endGame = function() {
  if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
  else {
      window.alert("You've lost your robot in battle.");
    }  
var playAgainConfirm = window.confirm("Would you like to play again?");   
if (playAgainConfirm) {
   startGame();
}
else {
   window.alert("Thank you for playing Robot Gladiators! Come back very soon!");
}  
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};


var shop = function() {
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");
// use switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL":
  case "refill":
      if (playerMoney >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    // increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
  }
    else {
        window.alert("You don't have enough money!");
      }
    break;
  case "UPGRADE":
  case "upgrade":
      if (playerMoney >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    // increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
      }
      else {
      window.alert("You don't have enough money!");
      }
    break;
  case "LEAVE":  
  case "leave":
    window.alert("Leaving the store.");
    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");
    // call shop() again to force player to pick a valid option
    shop();
    break;
}   
};
startGame();
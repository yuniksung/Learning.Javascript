var fightOrSkip = function() {
  // ask user if they'd like to fight or skip using  function
  var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // Enter the conditional recursive function call here!
  // Conditional Recursive Function Call
if (promptFight === "" || promptFight === null) {
  window.alert("You need to provide a valid answer! Please try again.");
  return fightOrSkip();
}
promptFight = promptFight.toLowerCase();
  // if user picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      // return true if user wants to leave
      return true;
    }
  }
}


var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask user if they'd like to fight or skip using fightOrSkip function
    if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

  
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died! ");
      playerInfo.money = playerInfo.money + 20;
      break;
  }
    else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// function to end the entire game
var startGame = function() {
  //reset player stats
  playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
  if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60); 
      fight(pickedEnemyObj);

  if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
shopOptionPrompt = parseInt(shopOptionPrompt);
switch (shopOptionPrompt) {
  case 1:
      playerInfo.refillHealth();
      break;
  case 2:
      playerInfo.upgradeAttack();
      break;
  case 3:
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

// function to set name 
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  
  console.log('Name of your robot is "" + name');
  return name;

};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, //comma!
  refillHealth: function() {
    if (this.money >= 7) {
    this.health += 20;
    this.money = -7;
    } else {
      window.alert("You don't have nough money!");
    }
  }, //comma!
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  } else{
    window.alert("You don't have nough money!");
  }
}
};

// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];


startGame();
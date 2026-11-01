// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// ===========================================
// Part 1: Game Setup
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20;  // Starting gold
let currentLocation = "village";
let gameRunning = true;
let inventory = [];


console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold." + " Your health is " + playerHealth + ".\n");

// =========================================
// Part 2: Battle Calculator
// =========================================

// Create variable to track weapon damage
let weaponDamage = 0; // Initialize weapon damage variable
console.log("Weapon Damage: " + weaponDamage); // Log the initial weapon damage to the console
console.log("When you buy a sword, weapon damage will increase to 10!"); // Log the message about weapon damage increase to the console

// Setup a simple Monster defense value
let monsterDefense = 5; // Initialize monster defense variable
console.log("Monster Defense: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!"); // Log the message about monster defense to the console

// Set healing potion restoration value
let healingPotionValue = 30; // How much health is restored
console.log("Healing Potion Value: " + healingPotionValue);
console.log("A potion will restore 30 health!"); 


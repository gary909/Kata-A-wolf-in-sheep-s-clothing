function warnTheSheep(queue) {
    //code
}


console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
// Return "Oi! Sheep number 2! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
// Return "Oi! Sheep number 5! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
// Return "Oi! Sheep number 6! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
// Return "Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
// Return "Pls go away and stop eating my sheep")

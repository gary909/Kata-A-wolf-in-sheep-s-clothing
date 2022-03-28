function warnTheSheep(queue) {
    // Reverse the array
    var myArr = queue.reverse()
    var mySheep = 0;
    // Get the sheep number in the queue with a loop
    for (var i = 0; i < queue.length; i++) {
        if (queue[i] == 'sheep') {
            mySheep = mySheep + 1;
        } else if (queue[i] == 'wolf') {
            break;
        }
    }
    // Check the reversed array to see if 'wolf' is at the start
    if (myArr[0] == "wolf") {
        return "Pls go away and stop eating my sheep";
    } else {
        return "Oi! Sheep number " + mySheep + "! You are about to be eaten by a wolf!";
    }
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

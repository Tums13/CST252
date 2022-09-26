//make a variable that has an object in it
//Object is keeping track of 3 propotioes / ietms
//////The name of player: Andrew
//////color of tunic: green
//////a number that says how much health they have left: 100

let player = {
    //name 
    name: "Andrew",
    //color of tunic
    color: "green",
    //health
    health: 100,
    //backpack
    backpack: ["Health Potion" , " Sword"]
};

//make a function that has one parameter called color
//it should set players tunic color to wha they pass in is

// EX: changeColor('purple');

function changeColor(color) {
    player.color = color;
}

//player needs a backpack
//backpack is a collection of  things represented by words
//items in backpack: 'health potion' , 'sword', 'cookies'

//part 1: in player object add a propertie called backpack and make it have a 'health potion' and a 'sword'
//part 2: make a function to add things inside the backpack and use the newItem as a parameter

function addItemToBackpack(newItem) {
    player.backpack.push(newItem);
}
document.addEventListener("DOMContentLoaded", () => {


	//putting the input box into a variable
	let inputBox = document.querySelector('.guessingBox'); //added period to identify class and removed ALL from querySelector
	//input event - what should happen:
	////check if they entered the right number
	////if so
	/////////create a new div
	/////////set the div to have a message "you won!"
	let inputHandler = (number) => { //passed inputBox into the anon using number
		if (+number.currentTarget.value === 6) { // added + to make number a integer
			let newBox = document.createElement('div');
			newBox.classList.add("box"); //remove period from class name wasn't needed
			newBox.textContent = "You won!"; //changed text to textContent
			document.body.appendChild(newBox); //appended and updated the newBox to document
		}
	}

	inputBox.addEventListener('input', inputHandler); //changed function use to inputHandler

});

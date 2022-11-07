document.addEventListener("DOMContentLoded", () => {


	//putting the input box into a variable
	let inputBox = document.querySelectorAll('guessingBox');


	//input event - what should happen:
	////check if they entered the right number
	////if so
	/////////create a new div
	/////////set the div to have a message "you won!"
	let inputHandler = () => {
		if (+e.currentTarget.value === 6) {
			let newBox = document.createElement('div');
			div.classList.add('.box');
			div.text = 'You won!';

		}
	}

	inputBox.addEventListener('input', inputBox);





});

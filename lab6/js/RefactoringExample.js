let currentYear = 2022;


//you start out owing nothing
let totalBalance = 0;

//it's an array of objects
var books = [
	{ title: 'Tale of Two Cities', due: 2020, returned: null },
	{ title: 'Les Miserables', due: 2023, returned: null },
	{ title: 'A Bear Called Paddington', due: 2021, returned: null }
]

function returnBook(book){
	let amountOwedForThisBook = 0;
	book.returned = currentYear;
	//if due before
	if (book.due < currentYear) {
		amountOwedForThisBook = 10;
	}
	totalBalance = totalBalance + amountOwedForThisBook;

	console.log("You returned " + book.title);

	console.log("Now you owe: " + totalBalance);

}

returnBook(books[0]);
returnBook(books[1]);
returnBook(books[2]);

console.log("In total you owe: " + totalBalance);

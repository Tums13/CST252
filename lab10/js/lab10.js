// Selecting element to trigger the event
let button = document.querySelector(".itembox");
let button2 = document.querySelector(".itembox2");
var image = document.querySelector(".courseimage");

//anon function to update style
//all updated information for info panel when button is clicked / pressed
let buttonPress = () => {
    //infopanel is displayed
    infopanel.style.display = "block";
    //updates tite
    let courseInfo = document.querySelector(".descriptionitem")
    courseInfo.innerHTML = "CST 252 Scripting for Multimedia";
    //updates course description
    let courseDesc = document.querySelector("#courseDescription");
    courseDesc.innerHTML = "A course about learning javaScript";
    //updates image
    image.src = "images/cst252.jpg";
    console.log(image);
};

//anon function to update style
//all updated information for info panel when button is clicked / pressed
let buttonPress2 = () => {
    //infopanel is displayed
    infopanel.style.display = "block";
    //updates tite
    let courseInfo = document.querySelector(".descriptionitem")
    courseInfo.innerHTML = "CST 351 Web Design";
    //updates course description
    let courseDesc = document.querySelector("#courseDescription");
    courseDesc.innerHTML = "A course about learning web development";
    //updates image
    image.src = "images/cst351.jpg";
};

// Creating Event listener to trigger the event when course is clicked
button.addEventListener("click", buttonPress);
button2.addEventListener("click", buttonPress2);

//  Selecting elements to trigger the event
let exitButton = document.querySelector("#exitbutton");
let infopanel = document.querySelector("#infopanel");

// Making the event -- element dissapears when the event happens

// disables display of info panel when exit button is clicked
let exitClick = () => {
    infopanel.style.display = "none";
}

//displays thin border when mouse goes "out" / away from button 
let out = () => {
    button.style.border = "thin grey solid";
}

//displays thin border when mouse goes "in" / towards button 
let inside = () => {
    button.style.border = "5px solid black";
}
//displays thin border when mouse goes "out" / away from button 2
let out2 = () => {
    button2.style.border = "thin grey solid";
}
//displays thin border when mouse goes "in" / towards button 2
let inside2 = () => {
    button2.style.border = "5px solid black";
}

//event listeners for inside and out style events
button.addEventListener("mouseout", out);
button.addEventListener("mouseover", inside);
button2.addEventListener("mouseout", out2);
button2.addEventListener("mouseover", inside2);

// Creating event listener to trigger the event (click)
exitButton.addEventListener("click", exitClick, out);

/**
 * Author:    Andrew Tamez
 * Created:   10.4.2022
 *
 * (c) Copyright by Tamez Corp.
 **/
//establishes variables for heading and output div
let outputEl = document.querySelector('#output');
let heading = document.querySelector('#heading');

//creates button 1
let oneEl = document.createElement("button");
oneEl.innerHTML = "About Us";
document.body.appendChild(oneEl);

//creates button 2
let twoEl = document.createElement("button");
twoEl.innerHTML = "Contact Us";
document.body.appendChild(twoEl);

//heading style
heading.style.color = "green";
heading.style.fontSize = '55px';
heading.style.textAlgin = 'center';

//div style
outputEl.style.border = "thick solid black";
outputEl.style.height = '100px';
outputEl.style.fontSize = '30px';
outputEl.innerText = "This is a paragraph. All of the stylization on this site was done using js.";
outputEl.style.color = "red";

//botton1 style
oneEl.style.width = '200px';
oneEl.style.height = '50px';
oneEl.style.margin = '25px';
oneEl.style.color = "purple";
oneEl.style.fontSize = '22px';

//botton2 style
twoEl.style.width = '200px';
twoEl.style.height = '50px';
twoEl.style.margin = '25px';
twoEl.style.color = "orange";
twoEl.style.fontSize = '22px';

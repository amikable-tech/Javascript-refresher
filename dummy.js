//Alert “Hello, World”
alert("This is a friendly alert");


//Create an input field, get the content of the input field and alert it
function alertInputContent() {
const inputField = document.getElementById('inputField'); 
const inputValue = inputField.value;
alert(`You entered: ${inputValue}`);
}


/* Create a paragraph and add some dummy text to it. Then add a button which says 
“Color text green”. If you click on the button the dummy text should turn green. */

function changeFontColor() {
const paragraph = document.getElementById('paragraph');
console.log(paragraph)
if (paragraph.classList.contains("text-green-500")){
    paragraph.classList.replace("text-green-500", "text-black")
} else {
    paragraph.classList.replace("text-black", "text-green-500");

}

}


/* Create a new paragraph which says “Hi, everyone”. Create a button which just says
“Change”. If you click on this button the text should change to “Hello, class”
 */
function changeText() {
const secondParagraph = document.getElementById ('secondParagraph');
secondParagraph.textContent = 'Hello, welcome to class'; 
}


/* Create a button which says “Open Me”. If you click on the button it should open a popup */

function alertBox() {
const alertBox = document.getElementById('alertBox'); 
alert(`This is another pop-up box`);
}


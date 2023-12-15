console.log("main.js running...");

// function sayHello() {
// 	alert("hoi allemaal");
// }
// sayHello();

// function showMessage(message) {
// 	alert(message);
// }
// showMessage("Ik ben een student");
// showMessage("Ik ben een docent");

// function optellen(a, b) {
// 	const result = a + b;
// 	console.log("resultaat: ", result);
// }
// optellen(4, 6);
// optellen(12, 6);
// optellen(14, 16);
// optellen(400, 6000);

// function berekenSom(x, y) {
// 	const result = x + y;

// 	return result;
// }
// let total = berekenSom(4, 3);
// console.log("berekenSom met 3 en 4: ", total);

// total = berekenSom(16, 15);
// console.log("berekenSom met 16 en 15: ", total);

// total = berekenSom(96, 426);
// console.log("berekenSom met 96 en 426: ", total);

function createCard(text) {
	const card = `<div class="demo">${text}</div>`;

	return card;
}

let html = createCard("Dhakir");
console.log("div is: ", html);
document.body.innerHTML += html;

html = createCard("Mustafa");
console.log("div is: ", html);
document.body.innerHTML += html;

html = createCard("Djelie");
console.log("div is: ", html);
document.body.innerHTML += html;

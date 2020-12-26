function detectYHeadFoot(e) {
	let ourH, bodyH, headH;
	ourH = e.clientY;
	bodyH = document.querySelector('body');
	headH = bodyH.offsetHeight / 5;
	// console.log(ourH);

	if (ourH <= headH) {
		console.log('Yes');
	} else {
		console.log('No');
	}

}

// document.addEventListener('mousemove', detectYHeadFoot);






// Затримка ефекту в іконок Західа і Схода
let EWicon = document.querySelectorAll('.icon');
for (let i = 0; i < EWicon.length; i++) {
	let randTD = Math.ceil(Math.random() * 10);
	EWicon[i].style.animationDelay = randTD + 's';
}




// Забирання тексту при виборі input
let Input = document.querySelectorAll('input');
for (let i = 0; i < Input.length; i++) {
	Input[i].onclick = function () {
		let plHolder = this.placeholder;
		this.placeholder = "";
		this.onblur = function () {
			this.placeholder = plHolder;
		}
	}
}
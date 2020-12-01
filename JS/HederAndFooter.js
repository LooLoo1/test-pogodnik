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
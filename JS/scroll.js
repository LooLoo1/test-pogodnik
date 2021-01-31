// let slides = document.querySelector('.slides'),
//    windowScroll = document.slides.scrollLeft,
//    sliderWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth,
//    scrolled = (windowScroll / sliderWidth) * 100;

// document.querySelector



let d = document;


function selectDate() {
	let clothes = document.querySelectorAll('.cloud');
	for (let i = 0; i < clothes.length; i++) {
		if (clothes[i].classList.contains('active')) {
			break;
		}
		else {
			let random_Osn_X = Math.ceil(Math.random() * 40) + 25,
				random_Osn_Y = Math.ceil(Math.random() * 40) + 25,
				clothBov = Math.ceil(Math.random() * 5) + 3;

			for (let j = 0; j < clothBov; j++) {
				let CloudBow = d.createElement('div');
				CloudBow.classList.add('balloon_clouds');

				let random_X = Math.ceil(Math.random() * 40) - 30,
					random_Y = Math.ceil(Math.random() * 40) - 30,
					random_WH = Math.ceil(Math.random() * 12) + 20,
					random_TranslateZ = Math.ceil(Math.random() * 9) + 1;

				CloudBow.style.left = random_Osn_X + random_X + "%";
				CloudBow.style.top = random_Osn_Y + random_Y + "%";
				CloudBow.style.width = random_WH + "%";
				CloudBow.style.height = random_WH + "%";
				CloudBow.style.transform = `translateZ(${random_TranslateZ}px)`;

				// Установка значення перемінної
				// let as = Math.ceil(Math.random() * 40);
				// CloudBow.style.setProperty('--a', `${as}`);

				clothes[i].appendChild(CloudBow);
			}
		}
	}
}

// selectDate();




// let clothes = document.querySelectorAll('.cloud');
// for (let i = 0; i < clothes.length; i++) {
// 	clothes[i].innerHTML = "";
// 	let r = Math.ceil(Math.random() * 7) + 3;
// 	for (let j = 0; j < r; j++) {
// 		clothes[i].innerHTML = clothes[i].innerHTML + '<div class="balloon_clouds"></div>';
// 	}
// }





































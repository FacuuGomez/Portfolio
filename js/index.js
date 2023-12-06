/* ---------------------------------------------------------------------------------------- */
// SEND EMAIL
/* ---------------------------------------------------------------------------------------- */

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSumbit);

console.log('$form', $form);

async function handleSumbit() {
	event.preventDefault();

	const form = new FormData(this);

	console.log('form', form);
	console.log('this', this);

	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(form).toString(),
	})
		.then(() => {
			let successContact = document.getElementById('success-contact');

			successContact.style.display = 'block';

			setTimeout(function () {
				successContact.style.display = 'none';
			}, 2500);

			$form.reset();
		})
		.catch((error) => alert(error));
}

/* ---------------------------------------------------------------------------------------- */
// ANIMATION ABOUT
/* ---------------------------------------------------------------------------------------- */

function scrollAbout() {
	let animation = document.getElementById('animation');

	let scrollTop = animation.getBoundingClientRect().top;

	let screenSize = window.innerHeight / 2;

	if (scrollTop < screenSize) {
		animation.style.animation = 'move 1s ease-out';
		animation.style.opacity = 1;
	}
}

window.addEventListener('scroll', scrollAbout);

function scrollCv() {
	let animation = document.getElementById('animation-cv');

	let scrollTop = animation.getBoundingClientRect().top;

	let screenSize = window.innerHeight;

	if (scrollTop < screenSize) {
		animation.style.animation = 'animation-left 1s ease-out';
		animation.style.opacity = 1;
	}
}

window.addEventListener('scroll', scrollCv);

/* ---------------------------------------------------------------------------------------- */
// ANIMATION PROYECTS
/* ---------------------------------------------------------------------------------------- */

function scrollCards() {
	let animation = document.getElementById('animation-cards');

	let scrollTop = animation.getBoundingClientRect().top;

	let screenSize = window.innerHeight / 1.5;

	if (scrollTop < screenSize) {
		animation.style.animation = 'animation-down 1s ease-out';
		animation.style.opacity = 1;
	}
}

window.addEventListener('scroll', scrollCards);

function scrollProyects() {
	let animation = document.getElementById('animation-proyects');

	let scrollTop = animation.getBoundingClientRect().top;

	let screenSize = window.innerHeight;

	if (scrollTop < screenSize) {
		animation.style.animation = 'animation-left 1s ease-out';
		animation.style.opacity = 1;
	}
}

window.addEventListener('scroll', scrollProyects);

/* ---------------------------------------------------------------------------------------- */
// ANIMATION SKILLS
/* ---------------------------------------------------------------------------------------- */

function scrollSkills() {
	let animation = document.getElementById('animation-skills');

	let scrollTop = animation.getBoundingClientRect().top;

	let screenSize = window.innerHeight;

	if (scrollTop < screenSize) {
		animation.style.animation = 'animation-down 1s ease-out';
		animation.style.opacity = 1;
	}
}

window.addEventListener('scroll', scrollSkills);

/* ---------------------------------------------------------------------------------------- */
// ANIMATION CONTACT
/* ---------------------------------------------------------------------------------------- */

function scrollContact() {
	let animation = document.getElementById('animation-contact');

	let scrollTop = animation.getBoundingClientRect().top;

	let screenSize = window.innerHeight;

	if (scrollTop < screenSize) {
		animation.style.animation = 'animation-down 1s ease-out';
		animation.style.opacity = 1;
	}
}

window.addEventListener('scroll', scrollContact);

/* ---------------------------------------------------------------------------------------- */
// RESPONSIVE NAVBAR BUTTON
/* ---------------------------------------------------------------------------------------- */

const buttonBar = document.getElementsByClassName('button-bar')[0];
const coverLi = document.getElementsByClassName('cover-li')[0];
const containerNav = document.getElementsByClassName('container-nav')[0];

buttonBar.addEventListener('click', () => {
	coverLi.classList.toggle('active');
});

const buttonAbout = document.getElementsByClassName('li-a')[0];
const buttonProyects = document.getElementsByClassName('li-a')[1];
const buttonSkills = document.getElementsByClassName('li-a')[2];
const buttonContact = document.getElementsByClassName('li-a')[3];

buttonAbout.addEventListener('click', () => {
	coverLi.classList.toggle('active');
});

buttonProyects.addEventListener('click', () => {
	coverLi.classList.toggle('active');
});

buttonSkills.addEventListener('click', () => {
	coverLi.classList.toggle('active');
});

buttonContact.addEventListener('click', () => {
	coverLi.classList.toggle('active');
});

// SEND EMAIL

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSumbit);

async function handleSumbit() {
	event.preventDefault();

	const form = new FormData(this);

	// const response = await fetch(this.action, {
	// 	method: this.method,
	// 	body: form,
	// 	headers: { Accept: 'aplication/json' },
	// });

	// if (response.ok) {
	// 	this.reset();
	// 	alert('¡ Gracias por contactarme !');
	// }

	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(form).toString(),
	})
		.then(() => {
			alert('¡ Gracias por contactarme !');
			$form.reset();
		})
		.catch((error) => alert(error));
}

// const handleSubmit = (event) => {
// 	event.preventDefault();

// 	const myForm = event.target;
// 	const formData = new FormData(myForm);

// 	fetch('/', {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
// 		body: new URLSearchParams(formData).toString(),
// 	})
// 		.then(() => alert('Thank you for your submission'))
// 		.catch((error) => alert(error));
// };

// document.querySelector('form').addEventListener('submit', handleSubmit);

// SEND EMAIL

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSumbit);

async function handleSumbit() {
	event.preventDefault();

	const form = new FormData(this);

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

const init = () => {
	'use strict';
	const form = document.querySelector('.license__form'),
		total = document.querySelector('.license__total_blue>span'),
		licenseSelected = document.querySelector('.license__selected>span');
	let number;
	const calc = () => {
		[...form.elements].find((item, index) => {
			if (item.checked) {
				number = item.value;
				licenseSelected.textContent = index + 1;
			}
			if (item.id === 'license-number') {
				number *= item.value;
			}
			if (item.tagName === 'BUTTON') {
				return;
			}
		});
	}
	const animate = () => {
		calc();
		let key;
		const showNumber = () => {
			if (+total.textContent === number) {
				return;
			}
			if (+total.textContent > number) {
				total.textContent--;
			}
			if (+total.textContent < number) {
				total.textContent++;
			}
			key = requestAnimationFrame(showNumber);
		};
		key = requestAnimationFrame(showNumber);
	};
	form.addEventListener('change', animate);
}
document.addEventListener('DOMContentLoaded', init);
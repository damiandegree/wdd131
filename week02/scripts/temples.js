const currentYear = document.querySelector("#current-year");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const menuBtn = document.querySelector('#menu-options');
const navigation = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	navigation.classList.toggle('open');
});



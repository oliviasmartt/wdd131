
const navigation = document.querySelector('.navigation')

//--------------------------------------------------------
// Using the ".show" class definition from templs.css
//--------------------------------------------------------
menu.addEventListener('click', () => {
	// menu.classList.toggle('show');
	// layout.classList.toggle('show');
	toggleMenuButton();
});
// ABOVE - Add a click event listender to the hamburger button and use a callback
//         function that toggles the element's list of classes.

function toggleMenuButton() {
	menu.classList.toggle('show');
	layout.classList.toggle('show');
};	
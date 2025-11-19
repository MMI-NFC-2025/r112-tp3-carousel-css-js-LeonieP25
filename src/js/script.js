// *** CAROUSEL - Défilement dynamique basé sur la largeur d'un item ***
// Sélection des éléments
const carousel = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const premierItem = document.querySelector('.carousel__item');

// Détermine la largeur d'un item (fallback 260 si non trouvé)
let scrollAmount = premierItem ? premierItem.clientWidth : 260;

// Recalcule sur redimensionnement (utile si items responsives plus tard)
window.addEventListener('resize', () => {
	scrollAmount = premierItem ? premierItem.clientWidth : scrollAmount;
});

if (carousel && prevButton && nextButton) {
	prevButton.addEventListener('click', () => {
		carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
	});
	nextButton.addEventListener('click', () => {
		carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
	});
}

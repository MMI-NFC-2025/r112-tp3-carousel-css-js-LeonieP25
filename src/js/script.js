// *** CAROUSEL - Défilement basique précédent / suivant ***
// Sélection des éléments
const carousel = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

// Largeur fixe de défilement (sera rendue dynamique ensuite)
const SCROLL_AMOUNT = 260;

if (carousel && prevButton && nextButton) {
	// Scroll au clic sur le bouton précédent (vers la gauche)
	prevButton.addEventListener('click', () => {
		carousel.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
	});

	// Scroll au clic sur le bouton suivant (vers la droite)
	nextButton.addEventListener('click', () => {
		carousel.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
	});
}

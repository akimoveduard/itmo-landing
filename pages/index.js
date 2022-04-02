import CardTeam from "../components/CardTeam.js";
import { teamCards } from "../utils/teamCards.js"

const teamSlider = new Swiper('.team__slider', {
    // Optional parameters
    // loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    threshold: 5,
    preventInteractionOnTransition: true,
    rewind: true,

    // If we need pagination
    pagination: {
        el: '.team__slider-pagination',
        bulletClass: 'team__pagination-bullet',
        bulletActiveClass: 'team__pagination-bullet_active',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.team__slider-button_next',
        prevEl: '.team__slider-button_prev',
    },
});

const teamCardsContainer = document.querySelector('.team__cards')

// Переделается в класс Section
function renderTeamCards() {
    teamCards.forEach(card => {
        const cardElement = new CardTeam(card, '#tempCardTeam').generateCard()
        teamCardsContainer.append(cardElement)
    })
}

renderTeamCards()
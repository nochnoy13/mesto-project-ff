// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

// const template = document.querySelector('#card-template').content;
// const placeList = document.querySelector('.places__list');

// function createCard(card, deleteCallback) {
//     const newCard = template.querySelector('.card').cloneNode(true);
    
//     const cardImage = newCard.querySelector('.card__image');
//     cardImage.src = card.link;
//     cardImage.alt = card.name;

//     const cardTitle = newCard.querySelector('.card__title');
//     cardTitle.textContent = card.name;

//     const deleteButton = newCard.querySelector('.card__delete-button');
//     deleteButton.addEventListener('click', handleDeleteCard);

//     return newCard
// }

// function handleDeleteCard(event) {
//     event.target.closest('.card').remove();
// }

// initialCards.forEach(card => {
//     const newCard = createCard(card);
//     placeList.append(newCard);
// });


const template = document.querySelector('#card-template').content;
const placeList = document.querySelector('.places__list');

function createCard(card, deleteCallback) {
    const newCard = template.querySelector('.card').cloneNode(true);
    
    const cardImage = newCard.querySelector('.card__image');
    cardImage.src = card.link;
    cardImage.alt = card.name;

    const cardTitle = newCard.querySelector('.card__title');
    cardTitle.textContent = card.name;

    const deleteButton = newCard.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => deleteCallback(newCard));
    
    return newCard;
}

function handleDeleteCard(cardElement) {
    cardElement.remove();
}

initialCards.forEach(card => {
    const newCard = createCard(card, handleDeleteCard);
    placeList.append(newCard);
});


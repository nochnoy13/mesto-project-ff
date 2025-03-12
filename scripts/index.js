// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const template = document.querySelector('#card-template');
const placeList = document.querySelector('.places__list');

function createCard(card) {
    const newCard = template.content.cloneNode(true);
    
    const cardImage = newCard.querySelector('.card__image');
    cardImage.src = card.link;
    cardImage.alt = card.name;

    const cardTitle = newCard.querySelector('.card__title');
    cardTitle.textContent = card.name;

    const deleteButton = newCard.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", handleDeleteCard);
    
    placeList.append(newCard);

    return newCard
}

function handleDeleteCard(event) {
    event.target.closest(".card").remove();
}

initialCards.forEach(createCard);



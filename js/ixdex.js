const card = document.querySelector('.map-card');
const cardBody = card.querySelector('.card-body')

card.addEventListener('click', () => {
  cardBody.classList.toggle('closed')
});

const cards = document.querySelector('.map-card');
const cardBodys = cards.querySelector('.card-body')

card.addEventListener('click', () => {
  cardBody.classList.toggle('closed')
})
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const textInput = document.querySelector('#title');
  textInput.addEventListener('input', handleFormSubmit);

  const authorInput = document.querySelector('#author');
  authorInput.addEventListener('input', handleFormSubmit);

  const selectInput = document.querySelector('#category');
  selectInput.addEventListener('change', handleFormSubmit);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', deleteEmAll);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  
  const newListItem = document.createElement('li');

  newListItem.textContent = 
  `Title: ${event.target.title.value}
  Author: ${event.target.author.value}
  Category: ${event.target.category.value}`;
  newListItem.classList.add('reading-list-item')

  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);

  const form = document.querySelector('#new-item-form');
  form.reset();
};

const deleteEmAll = function () {
  const element = document.getElementById('reading-list');
  element.parentNode.removeChild(element);
};
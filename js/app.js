const seedData = [
  {name: 'Samart Payakaroon', style: 'Defensive', region: 'North'},
  {name: 'Saenchai', style: 'Flashy', region: 'South'}  
];

const formSubmitHandler = function(evt) {
  evt.preventDefault();
  const form = evt.target;
  renderListItemFromForm(form);
  form.reset();
};

const renderListItemFromForm = function(form) {
  const fighter = formValues(form);
  const listItem = createListItem(fighter);
  addListItem(listItem);
}

const formValues = (form) => ({
  name: form.name.value,
  style: form.style.value,
  region: form.region.value
});

const createListItem = function(fighter) {
  const li = document.createElement('li');
  li.textContent = fighter.name;

  const regionSpan = document.createElement('span');
  regionSpan.classList.add('region');
  regionSpan.textContent = fighter.region;
  li.appendChild(regionSpan);

  const styleSpan = document.createElement('span');
  styleSpan.textContent = fighter.style;
  styleSpan.classList.add('style');
  li.appendChild(styleSpan);

  return li;
};

const addDeleteButton = function()
{
  //create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete List';
  deleteButton.addEventListener('click', handleDeleteAll);

  //create div to place delete buton in
  const div = document.createElement("div");
  div.appendChild(deleteButton);

  //add div to end of center contents section - finding by class with dot notation
  const body = document.querySelector('.center-contents');
  body.appendChild(div);
};

const addListItem = function(listItem) {
  const listContainer = document.querySelector('#list');
  listContainer.appendChild(listItem);
};

const handleDeleteAll = function(event){
  const allListItems = document.querySelectorAll('li');
  
  allListItems.forEach((listItem) => {
    listItem.remove();
  })
}

document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.querySelector('form');
  form.addEventListener('submit', formSubmitHandler);

  seedData.forEach((fighter) => {
    const li = createListItem(fighter);
    addListItem(li);
  });

  //let's add a delete button!
  addDeleteButton();
  
});

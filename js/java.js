console.log('ciao');

const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInputField = document.getElementById('sport');
  console.log(nameInputField.value);
  const userCard = document.createElement('div');
  userCard.innerHTML = `
        <li>${nameInputField.value}</li>
        
`;
  const description = document.getElementById('description');
  userCard.addEventListener('click', function (e) {
    if (e.target.style.textDecoration === 'line-through') {
      e.target.style.textDecoration = 'none';
    } else {
      e.target.style.textDecoration = 'line-through';
    }
  });

  description.appendChild(userCard);

  nameInputField.value = '';
});

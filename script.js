const input = document.getElementById('search');
const button = document.getElementById('button');

input.addEventListener('change', (event) => {
  event.preventDefault();
  const submit = event.target.value;
  const query = `http://www.google.com/search?hl=es&q=${submit}`;

  button.onclick = function () {
    window.open(query);
  };
});

input.addEventListener('keyup', (event) => {
  let key = event.keyCode || event.which;
  const submit = event.target.value;
  const query = `http://www.google.com/search?hl=es&q=${submit}`;

  if (key === 13) {
    window.open(query);
  }
});
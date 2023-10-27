let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

  e.preventDefault()

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let Password = document.getElementById("Password");
  let timeForCall = document.getElementById("timeForCall");
  let time = document.getElementById("time");

  console.log(`${name.value}, ${email.value}, ${Password.value}, ${timeForCall.value}, ${time.value}`);

  name.value = ''
  email.value = ''
  Password.value = ''
  timeForCall.value = ''
  time.value = ''

})

// const ul = document.querySelector('#items');
// const li = document.querySelector('#item');

// li.innerText = 'Hello';
// li.style.background = 'LightGreen';
// ul.lastElementChild.innerHTML = '<h2>Hello</h2>'
// ul.children[1].style.background = 'yellow'


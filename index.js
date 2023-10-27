let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

  e.preventDefault()

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let Password = document.getElementById("Password");
  let phoneNumber = document.getElementById('Phone_number');
  let timeForCall = document.getElementById("timeForCall");
  let time = document.getElementById("time");
  let items = document.getElementById('items');

  //storing the user data in the format of objects
  let myObj = {
    'name': `${name.value}`,
    'email': `${email.value}`,
    'Password': `${Password.value}`,
    'PhoneNumber': `${phoneNumber.value}`,
    'timeForCall': `${timeForCall.value}`,
    'time': `${time.value}`,
  }

  localStorage.setItem(`${email.value}`, JSON.stringify(myObj))
  let localStorageValue = JSON.parse(localStorage.getItem(`${email.value}`));
  name.value = ''
  email.value = ''
  Password.value = ''
  phoneNumber.value = ''
  timeForCall.value = ''
  time.value = ''

  //storing the userdata in the page;

  let endResult = [];
  for (const key in localStorageValue) {
    if (localStorageValue.hasOwnProperty(key)) {
      const value = localStorageValue[key];
      endResult.push(`${key}:${value}`)
    }
  }
  let textToShow = endResult.join(',');

  let liCreate = document.createElement('li');
  let node = document.createTextNode(textToShow);
  liCreate.appendChild(node);
  items.appendChild(liCreate)
})

// const ul = document.querySelector('#items');
// const li = document.querySelector('#item');

// li.innerText = 'Hello';
// li.style.background = 'LightGreen';
// ul.lastElementChild.innerHTML = '<h2>Hello</h2>'
// ul.children[1].style.background = 'yellow'
//practising cookies

// document.cookie = 'name:karan;expires=' + new Date(2024, 0, 1).toUTCString();
// console.log(`${name.value}, ${email.value}, ${Password.value}, ${timeForCall.value}, ${time.value}`);

//local storage setting item
// localStorage.setItem('name', `${name.value}`);
// localStorage.setItem('email', `${email.value}`);
// localStorage.setItem('Password', `${Password.value}`);
// localStorage.setItem('timeForCall', `${timeForCall.value}`);
// localStorage.setItem('time', `${time.value}`);
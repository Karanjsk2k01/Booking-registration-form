let loginForm = document.getElementById("loginForm");
let items = document.getElementById('items');


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

  let textToShow = Object.values(localStorageValue)

  let liCreate = document.createElement('li');
  //creating two buttons
  let btn1 = document.createElement('button');
  let btn2 = document.createElement('button');
  btn1.textContent = 'Delete';
  btn2.textContent = 'Edit';
  let node = document.createTextNode(textToShow);
  btn1.setAttribute('class', 'btn');
  btn2.setAttribute('class', 'btn1');
  liCreate.appendChild(node);
  liCreate.appendChild(btn1);
  liCreate.appendChild(btn2);
  items.appendChild(liCreate)
})

items.addEventListener('click', deleteitem);

function deleteitem(e) {
  e.preventDefault();
  if (e.target.classList.contains('btn')) {
    if (confirm('Are you sure to delete ?')) {
      let parentNode = e.target.parentNode;
      let deleteElementLs = parentNode.innerText.split(',')[1]
      items.removeChild(parentNode);
      localStorage.removeItem(deleteElementLs);
    }

  }



}
//edit functionality

items.addEventListener('click', editBtn);

function editBtn(e) {
  e.preventDefault();
  if (e.target.classList.contains('btn1')) {
    if (confirm('Are you sure to Edit ?')) {
      //deleting and taking the value to input box
      let parentNode = e.target.parentNode;
      let deleteElementLs = parentNode.innerText.split(',')[1];
      let fullDataArray = parentNode.innerText.split(',')
      items.removeChild(parentNode);
      localStorage.removeItem(deleteElementLs);
      //setting the values to input box
      document.getElementById("name").value = fullDataArray[0];
      document.getElementById("email").value = fullDataArray[1];
      document.getElementById("Password").value = fullDataArray[2];
      document.getElementById('Phone_number').value = fullDataArray[3];
      document.getElementById("timeForCall").value = fullDataArray[4];
      document.getElementById("time").value = fullDataArray[5];
      document.getElementById('items').value = fullDataArray[6];
    }

  }
  //after clicking should delete the item from ls and list
  //add the user items to the input box;

}
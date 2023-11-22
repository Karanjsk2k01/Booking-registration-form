let items = document.getElementById('items');
let loginForm = document.getElementById('loginForm');

// Fetch existing user data from the API when the page loads
window.addEventListener('DOMContentLoaded', () => {

  axios.get('https://crudcrud.com/api/4ee03b6da75642dc9b2dd4a5c397cd6a/userdetails')
    .then((getRes) => {
      const userDataArray = getRes.data;
      // Display existing user data in the user interface
      userDataArray.forEach(userObj => displayUserDetails(userObj));
    })
    .catch(err => console.log(err));

})

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let Password = document.getElementById("Password");
  let phoneNumber = document.getElementById('Phone_number');
  let timeForCall = document.getElementById("timeForCall");
  let time = document.getElementById("time");

  // Storing the user data in the format of objects
  let myObj = {
    'name': name.value,
    'email': email.value,
    'Password': Password.value,
    'PhoneNumber': phoneNumber.value,
    'timeForCall': timeForCall.value,
    'time': time.value,
  };

  // Posting new user data to the API
  axios.post('https://crudcrud.com/api/4ee03b6da75642dc9b2dd4a5c397cd6a/userdetails', { myObj })
    .then((res) => {
      // Display the new user data in the user interface
      displayUserDetails(res.data)
      console.log(res);
    })
    .catch(err => console.log(err));

  // Reset form values
  name.value = '';
  email.value = '';
  Password.value = '';
  phoneNumber.value = '';
  timeForCall.value = '';
  time.value = '';
});

function displayUserDetails(userObj) {
  // Create a list item
  let liCreate = document.createElement('li');

  // Create text nodes for each property
  let nameNode = document.createTextNode(`Name: ${userObj.myObj.name}`);
  let emailNode = document.createTextNode(`Email: ${userObj.myObj.email}`);
  let passwordNode = document.createTextNode(`Password: ${userObj.myObj.Password}`);
  let phoneNumberNode = document.createTextNode(`Phone Number: ${userObj.myObj.PhoneNumber}`);
  let timeForCallNode = document.createTextNode(`Time for Call: ${userObj.myObj.timeForCall}`);
  let timeNode = document.createTextNode(`Time: ${userObj.myObj.time}`);

  // Create buttons
  let btn1 = document.createElement('button');
  let btn2 = document.createElement('button');
  btn1.textContent = 'Delete';
  btn2.textContent = 'Edit';
  btn1.setAttribute('class', 'btn');
  btn2.setAttribute('class', 'btn1');

  // Append text nodes and buttons to the list item
  liCreate.appendChild(nameNode);
  liCreate.appendChild(emailNode);
  liCreate.appendChild(passwordNode);
  liCreate.appendChild(phoneNumberNode);
  liCreate.appendChild(timeForCallNode);
  liCreate.appendChild(timeNode);
  liCreate.appendChild(btn1);
  liCreate.appendChild(btn2);

  liCreate.setAttribute('user_id', userObj._id)
  console.log(userObj._id)

  // Appending the list item to the items element (assuming items is a valid element)
  items.appendChild(liCreate);
}


function deleteItem(e) {
  e.preventDefault();

  if (e.target.classList.contains('btn')) {
    if (confirm('Are you sure to delete?')) {

      let parentNode = e.target.parentNode;
      let userId = parentNode.getAttribute('user_id');

      axios.delete(`https://crudcrud.com/api/4ee03b6da75642dc9b2dd4a5c397cd6a/userdetails/${userId}`)
        .then((deleteRes) => {
          // Remove the list item from the UI on successful deletion
          parentNode.remove()
        })
        .catch(err => console.log(err));
    }
  }

}

items.addEventListener('click', deleteItem)

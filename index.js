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

//sent a post request to the API

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

//displaying the object in UI

function displayUserDetails(userObj) {
  // Create a list item
  let liCreate = document.createElement('li');


  let textNode = document.createTextNode(Object.values(userObj.myObj));

  // Create buttons
  let btn1 = document.createElement('button');
  let btn2 = document.createElement('button');
  btn1.textContent = 'Delete';
  btn2.textContent = 'Edit';
  btn1.setAttribute('class', 'btn');
  btn2.setAttribute('class', 'btn1');


  liCreate.appendChild(textNode);
  liCreate.appendChild(btn1);
  liCreate.appendChild(btn2);

  liCreate.setAttribute('user_id', userObj._id)
  console.log(userObj._id)

  // Appending the list item to the items element (assuming items is a valid element)
  items.appendChild(liCreate);
}

//Delete functionality
items.addEventListener('click', deleteItem)

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


//edit functionality
items.addEventListener('click', editItem)

function editItem(e) {
  if (e.target.classList.contains('btn1')) {
    if (confirm('Are you sure to edit?')) {
      let parentNode = e.target.parentNode;
      let userId = parentNode.getAttribute('user_id');
      let fullDataArray = parentNode.innerText.split(',');

      document.getElementById("name").value = fullDataArray[0];
      document.getElementById("email").value = fullDataArray[1];
      document.getElementById("Password").value = fullDataArray[2];
      document.getElementById('Phone_number').value = fullDataArray[3];
      document.getElementById("timeForCall").value = fullDataArray[4];
      document.getElementById("time").value = fullDataArray[5];

      // Remove the old list item from the UI
      parentNode.remove();

      axios.delete(`https://crudcrud.com/api/4ee03b6da75642dc9b2dd4a5c397cd6a/userdetails/${userId}`)
        .then((res) => {
          // Remove the list item from the UI on successful deletion
          resolve('deletion succeeded')
        })
        .catch(err => console.log(err));
    }
  }
}

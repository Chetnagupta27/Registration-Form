// User Class
class User {
    constructor(fullName, middleName, lastName, gender, age, branch, experience, achievements) {
      this.fullName = fullName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.gender = gender;
      this.age = age;
      this.branch = branch;
      this.experience = experience;
      this.achievements = achievements;
    }
  }
  
  // Function to display users
  function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const userList = document.getElementById('users');
    userList.innerHTML = '';
  
    users.forEach(user => {
      const li = document.createElement('li');
      li.classList.add('user-item');
      li.innerHTML = `
        <strong>Name:</strong> ${user.fullName} ${user.middleName} ${user.lastName}<br>
        <strong>Gender:</strong> ${user.gender}<br>
        <strong>Age:</strong> ${user.age}<br>
        <strong>Branch:</strong> ${user.branch}<br>
        <strong>Experience:</strong> ${user.experience} years<br>
        <strong>Achievements:</strong> ${user.achievements}<br>
      `;
      userList.appendChild(li);
    });
  }
  
  // Event listener for form submission
  document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const branch = document.getElementById('branch').value;
    const experience = parseInt(document.getElementById('experience').value);
    const achievements = document.getElementById('achievements').value;
  
    // Create new user object
    const user = new User(fullName, middleName, lastName, gender, age, branch, experience, achievements);
  
    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add new user to array
    users.push(user);
  
    // Store users in local storage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Display updated user list
    displayUsers();
  
    // Clear form fields
    document.getElementById('userForm').reset();
  });
  
  // Display users on page load
  window.addEventListener('load', function() {
    displayUsers();
  });
  
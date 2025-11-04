// 1. Function to load user data
function loadUser() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())      // Convert response to JSON
    .then(data => {
      // Extracting user information
      let user = data.results[0];

      document.getElementById("userImg").src = user.picture.large;
      document.getElementById("userName").innerText = user.name.first + " " + user.name.last;
      document.getElementById("userEmail").innerText = "Email: " + user.email;
      document.getElementById("userAge").innerText = "Age: " + user.dob.age;
    })
    .catch(err => console.log("Error:", err));
}

// 2. Load on page start
loadUser();

// 3. Load on button click
document.getElementById("btn").addEventListener("click", loadUser);

// Fetch API
function getAllUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(users => {
      document.getElementById("users").innerHTML = "";

      users.forEach(user => {
        let content = `
          <div class="user">
            <div class="user-info">
              <h3>Name: ${user.name}</h3> 
              <h3>Username: ${user.username}</h3> 
              <h3>Email: ${user.email}</h3>
            </div>
            <div class="user-toggle">
              <h3>City: ${user.address.city}</h3> 
              <h3>Phone: ${user.phone}</h3> 
              <h3>Company: ${user.company.name}</h3>
            </div>
          </div>`;

        document.getElementById("users").innerHTML += content;
      });

    //Toggle fuktion
      document.querySelectorAll(".user").forEach(user => {
        user.addEventListener("click", function () {
          this.classList.toggle("active"); 
          this.querySelector(".user-toggle").classList.toggle("active"); 
        });
      });
    })
    //Toggle funktion

    .catch(e => {
      alert("Error: " + e);
    });
}
//Fetch API

getAllUsers();

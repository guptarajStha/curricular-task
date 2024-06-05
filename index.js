document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    fetch("users.json")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find((user) => user.email === email);
        if (user) {
          console.log("User found:", user);
        } else {
          document.getElementById("error").style.display = "flex";
        }
      });
  });
document
  .getElementById("hamburger")
  .addEventListener("click", function (event) {
    document.getElementById('hamburger').style.display='none'
    document.getElementById('middle').style.top='10vh'
    document.getElementById('close').style.display='flex'
  });
document
  .getElementById("close")
  .addEventListener("click", function (event) {
    document.getElementById('close').style.display='none'
    document.getElementById('middle').style.top='-1000px'
    document.getElementById('hamburger').style.display='flex'
  });

document.getElementById('signup-form').addEventListener("submit", submitForm)

function submitForm(evt) {
  evt.preventDefault()

  var email = document.getElementById('email').value
  var description = document.getElementById("description").value

  alert("Email " + email + "\nDescription: " + description)
}
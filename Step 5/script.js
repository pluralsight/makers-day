document.getElementById('signup-form').addEventListener("submit", submitForm)

function submitForm(evt) {
  evt.preventDefault()

  alert("Email " + document.getElementById('email').value + "\nDescription: " + document.getElementById("description").value)
}
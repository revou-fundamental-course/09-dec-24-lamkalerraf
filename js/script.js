document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the values from the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const interest = document.getElementById("interest").value;

  // Check if all fields are filled
  if (name && email && interest) {
    // Create an alert message
    const message = `Name: ${name}\nEmail: ${email}\nInterest: ${interest}`;
    alert(message);
  } else {
    alert("Please fill all fields.");
  }
});

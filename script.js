//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Get the input field by its id
  const inputField = document.getElementById("fname");

  // Add an event listener for the "blur" event
  inputField.addEventListener("blur", function() {
    // Get the current value of the input field
    const currentValue = inputField.value;

    // Convert the value to uppercase
    const uppercaseValue = currentValue.toUpperCase();

    // Set the modified value back to the input field
    inputField.value = uppercaseValue;
  });
});

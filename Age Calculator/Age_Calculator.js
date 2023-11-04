// Get the birth date input element
const birthDateInput = document.getElementById('birth_date');

// Get the calculate age button element
const calculateAgeButton = document.getElementById('calculate_age');

// Get the age display element
const ageDisplay = document.getElementById('age_display');

// Add a click event listener to the calculate age button
calculateAgeButton.addEventListener('click', function() {

    // Check if the birth date input is empty
    if (birthDateInput.value === '') {

      // Show an alert message
      alert('Please enter your birth date.');
  
      // Prevent the default behavior of the button
      return false;
    }

  // Get the birth date
  const birthDate = new Date(birthDateInput.value);

  // Get the current date
  const currentDate = new Date();

  // Calculate the age in years
  const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

  // Display the age
  ageDisplay.innerHTML = `Your age is ${ageInYears} years old.`
});

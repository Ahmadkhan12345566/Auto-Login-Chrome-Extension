// Function to update the input value and trigger events
function updateInputValue(input, value) {
  // Create input events
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  nativeInputValueSetter.call(input, value);

  const event = new Event('input', { bubbles: true });
  input.dispatchEvent(event);

  const changeEvent = new Event('change', { bubbles: true });
  input.dispatchEvent(changeEvent);
}

// Function to set the values and trigger button clicks
function setInputValues() {
  // Find the input elements by their name attributes
  const passwordInput = document.querySelector('input[name="password"]');
  const emailInput = document.querySelector('input[name="username"]');

  // Set the values of the input elements and trigger events
  if (passwordInput) updateInputValue(passwordInput, "test");
  if (emailInput) updateInputValue(emailInput, "test@gmail.com");

  // Find and click the agreement button
  const agreementButton = document.getElementById('agreement');
  if (agreementButton) agreementButton.click();
  
  // Find and click the login button
  const loginButton = document.getElementById('trigger-login');
  if (loginButton) loginButton.click();

  
}

// Wait for the page to load completely and then wait an additional 5 seconds
window.addEventListener('load', () => {
  setTimeout(setInputValues, 5000);
});

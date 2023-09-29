/*
 * stmnts-04.js
 * Language: javascript
 * Test: tests/stmnts-04.test.js
 * Path: src/stmnts-04.js
 * Temperature Calculator
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  // calculate
  let celsius = ((fahrenheit - 32) * 5) / 9;
  // round
  celsius = Math.round(celsius * 100) / 100;
  return celsius;
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 1.8 + 32) * 100) / 100;
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};

// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// Everything below this line is user interface logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#add-output").text(number1 + " + " + number2 + " = " + result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#subtract1").val());
    const number2 = parseInt($("#subtract2").val());
    const result = subtract(number1, number2);
    $("#subtract-output").text(number1 + " - " + number2 + " = " + result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#multiply1").val());
    const number2 = parseInt($("#multiply2").val());
    const result = multiply(number1, number2);
    $("#multiply-output").text(number1 + " * " + number2 + " = " + result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("#divide2").val());
    const result = divide(number1, number2);
    $("#divide-output").text(number1 + " / " + number2 + " = " + result);
  });
});
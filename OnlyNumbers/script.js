document.getElementById("input").onkeypress = numbers;

function numbers(num) {
  const key = num.keyCode;
  if (key >= 48 && key <= 57) {
    return true;
  } else {
    return false;
  }
}

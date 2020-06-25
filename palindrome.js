function palindrome(str) {
  let nuevo = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  console.log(nuevo.split("").reverse().join(""));
  if (nuevo === nuevo.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

palindrome("My age is 0, 0 si ega ym.");

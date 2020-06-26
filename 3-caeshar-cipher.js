function rot13(str) {
  let arr = str.split("");
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[A-Z]/i)) {
      if (arr[i].charCodeAt() - 13 < 65) {
        arr[i] = String.fromCharCode(arr[i].charCodeAt() + 13);
      } else {
        arr[i] = String.fromCharCode(arr[i].charCodeAt() - 13);
      }
    }
  }
  console.log(arr.join(""));
  return arr.join("");
}

rot13("SERR YBIR?");

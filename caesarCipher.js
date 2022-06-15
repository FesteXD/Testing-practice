function caesarCipher(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      let code = string.charCodeAt(i) + 1;
      if (code > 90) {
        code = code - 90 + 64;
      }
      result.push(String.fromCharCode(code));
    }
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      let code = string.charCodeAt(i) + 1;
      if (code > 122) {
        code = code - 122 + 96;
      }
      result.push(String.fromCharCode(code));
    }
    if (string.charCodeAt(i) < 65 || string.charCodeAt(i) > 122)
      result.push(string[i]);
  }

  return result.join('');
}

export { caesarCipher };

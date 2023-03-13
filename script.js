// Your Script here.
function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = 13;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charIndex = alphabet.indexOf(char);

    // If char is not in the alphabet, pass it through unchanged
    if (charIndex === -1) {
      result += char;
      continue;
    }

    // Shift the char by the shift amount
    const shiftedIndex = (charIndex + shift) % alphabet.length;
    result += alphabet[shiftedIndex];
  }

  return result;
}

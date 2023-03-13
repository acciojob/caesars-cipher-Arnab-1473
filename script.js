// Your Script here.
function rot13(str) {
	const alpahbet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const shift = 13;
	let result = '';

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		const charIndex = alpahbet.indexof(char);
//if there is no such alphabet
		if (charIndex === -1){
			result = result+char;
			continue;
		}
const shiftedIndex = (charIndex+shift)%alpahbet.length;
		result = result+alpahbet[shiftedIndex];		
	}
	return result;
}

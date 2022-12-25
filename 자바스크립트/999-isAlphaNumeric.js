const isAlphaNumeric = (char) => {
	let code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) && //numberic(0-9)
		!(code > 64 && code < 91) && //upper alpha (A-Z)
		!(code > 96 && code < 123)
	) {
		// lower alpha (a-z)
		return false;
	}
	return true;
};

console.log(isAlphaNumeric(' '));

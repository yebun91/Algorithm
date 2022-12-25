function sameFrequency(a, b) {
	const arrayA = (a + '').split('');
	const arrayB = (b + '').split('');

	if (arrayA.length !== arrayB.length) return false;
	let aa = {};
	let bb = {};

	for (let number of arrayA) {
		aa[number] = (aa[number] || 0) + 1;
	}
	for (let number of arrayB) {
		bb[number] = (bb[number] || 0) + 1;
	}

	for (let key in aa) {
		if (!(key in bb)) {
			return false;
		}
		if (bb[key] !== aa[key]) {
			return false;
		}
	}
	return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

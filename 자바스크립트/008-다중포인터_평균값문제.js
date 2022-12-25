function averagePair(arr, avg) {
	if (arr.length < 1) return false;
	let first = 0;
	let last = arr.length - 1;

	while (first < last) {
		let average = (arr[first] + arr[last]) / 2;

		if (average === avg) {
			return true;
		} else if (average > avg) {
			last--;
		} else {
			first++;
		}
	}
	return false;
}

console.log(averagePair([ 1, 2, 3 ], 2.5)); // true
console.log(averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8)); // true
console.log(averagePair([ -1, 0, 3, 4, 5, 6 ], 4.1)); // false
console.log(averagePair([], 4)); // false

function areThereDuplicates(...args) {
	let obj = {};
	for (let number of args) {
		obj[number] = (obj[number] || 0) + 1;
	}
	console.log(obj);
	for (let key in obj) {
		if (obj[key] > 1) return true;
	}
	return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// 천잰가..?
function areThereDuplicates2() {
	return new Set(arguments).size !== arguments.length;
}

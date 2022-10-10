// 두개의 문자열이 주어지며 두번째 문자열이 첫 번쨰 문자열의 아나그램인지
// 확인하는 함수를 작성하시오.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// Time Complexity - O(n)

function validAnagram(str1, str2) {
	if (str1 === '' && str2 === '') return true;
	if (str1 === str2) return false;

	let strObject1 = {};
	let strObject2 = {};

	for (alphabat of str1) {
		strObject1[alphabat] = (strObject1[alphabat] || 0) + 1;
	}

	for (alphabat of str2) {
		strObject2[alphabat] = (strObject2[alphabat] || 0) + 1;
	}

	for (let key in strObject1) {
		if (!(key in strObject2)) {
			return false;
		}
		if (strObject2[key] !== strObject1[key]) {
			return false;
		}
	}
	return true;
}
console.time('validAnagram');
validAnagram2('awesome', 'awesom'); // false
console.timeEnd('validAnagram');

function validAnagram2(str1, str2) {
	if (str1 === '' && str2 === '') return true;
	if (str1 === str2) return false;
	if (str1.length !== str2.length) return false;

	let strObject1 = {};

	for (alphabat of str1) {
		strObject1[alphabat] ? (strObject1[alphabat] += 1) : (strObject1[alphabat] = 1);
	}

	for (alphabat of str2) {
		if (!strObject1[alphabat]) {
			return false;
		} else {
			strObject1[alphabat] -= 1;
		}
	}
	return true;
}
console.time('validAnagram2');
validAnagram2('awesome', 'awesom'); // false
console.timeEnd('validAnagram2');

// validAnagram: 0.11ms
// validAnagram2: 0.01ms

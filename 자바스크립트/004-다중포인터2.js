//이거는.. 포인터로 푼게 아니고 set으로 풀었네
function countUniqueValues(arr) {
	const result = new Set(arr).size;
	console.log(result);
	return result;
}

countUniqueValues([ 1, 1, 1, 2, 3, 3, 4, 4, 5, 6 ]);

function countUniqueValues2(arr) {
	if (arr.length === 0) return 0;
	let left = 0;
	for (let right = 1; right < arr.length; right++) {
		if (arr[left] !== arr[right]) {
			left++;
			arr[left] = arr[right];
		}
	}
	console.log(left + 1);
	return left + 1;
}

countUniqueValues2([ 1, 2, 2, 5, 7, 7, 99 ]);

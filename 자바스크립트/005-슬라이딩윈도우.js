function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;
	let sumNumber = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > sumNumber) {
			sumNumber = temp;
		}
	}
	console.log(sumNumber);
	return sumNumber;
}

maxSubarraySum([ 2, 6, 9, 2, 1, 8, 5, 6, 3 ], 3);

//슬라이딩 윈도우
function maxSubarraySum2(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;

	//arr[0]~arr[num]까지의 값을 더함
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;

	//arr[0]의 값을 빼고 arr[3]의 값을 더한 값을 tempSum에 저장.
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		// maxSum, tempSum 둘 중에 더 큰 값을 maxSum에 저장
		maxSum = Math.max(maxSum, tempSum);
	}
	console.log(maxSum);
	return maxSum;
}

maxSubarraySum2([ 2, 6, 9, 2, 1, 8, 5, 6, 3 ], 3);

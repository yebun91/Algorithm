// 배열 a, b를 받아서 a의 배열안의 숫자에 제곱을 한 값과 b의 값이 같으면 true
// 아니면 false를 리턴하시오. 단 순서는 상관 없다.

function same(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		let index = b.indexOf(a[i] ** 2);
		if (index === -1) {
			return false;
		}
		b.splice(index, 1);
	}
	return true;
}

console.time('same');
same([ 1, 2, 3 ], [ 1, 4, 9 ]);
console.timeEnd('same');

function same2(a, b) {
	if (a.length !== b.length) return false;

	let aa = [];
	for (number of a) {
		aa.push(number * number);
	}
	aa.sort();
	b.sort();

	return aa.toString() === b.toString() ? true : false;
}
console.time('same2');
same2([ 1, 2, 3 ], [ 1, 4, 9 ]);
console.timeEnd('same2');

function same3(a, b) {
	if (a.length !== b.length) return false;

	let aa = {};
	let bb = {};

	for (let number of a) {
		aa[number] = (aa[number] || 0) + 1;
	}
	for (let number of b) {
		bb[number] = (bb[number] || 0) + 1;
	}
	for (let key in aa) {
		if (!(key ** 2 in bb)) {
			return false;
		}
		if (bb[key ** 2] !== aa[key]) {
			return false;
		}
	}
	return true;
}
console.time('same3');
same3([ 1, 2, 3 ], [ 1, 4, 9 ]);
console.timeEnd('same3');

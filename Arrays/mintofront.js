function minToFront(arr) {
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	var hold = arr[0];
	var change = hold;
	arr[0] = min;
	for (var i = 1; i < arr.length; i++) {
		hold = arr[i]
		arr[i] = change;
		change = hold;
		if (arr[i] == min) {
			break;
		}
	}
	return arr;
}

console.log(minToFront([9,443,4,5,6,1,64,76,6,0]))
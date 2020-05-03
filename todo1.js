function pushFront(arr, val) {
	var hold = 0;
	var change = val;
	arr[arr.length] = val;
	for (var i = 0; i < arr.length; i++) {
		hold = arr[i];
		arr[i] = change;
		change = hold;
	}

	return arr;
}

function popFront(arr) {
	var hold = arr.pop();
	var change = hold;
	for (var i = arr.length - 1; i >= 0; i--) {
		hold = arr[i];
		arr[i] = change;
		change = hold;
	}
	return change;
}


function insertAt(arr, ind, val) {
	var hold = 0;
	var change = val;
	arr[arr.length] = val;
	for (var i = ind; i < arr.length; i++) {
		hold = arr[i];
		arr[i] = change;
		change = hold;
	}
	return arr;
}


function removeAt(arr, ind) {
	var hold = arr.pop();
	var change = hold;
	for (var i = arr.length - 1; i >= ind; i--) {
		hold = arr[i];
		arr[i] = change;
		change = hold;
	}
	return arr;
}



function swapPairs(arr) {
	var temp = 0;
	for (var i = 0; i < arr.length - 1; i = i + 2 ) {
		temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
	return arr;
}




function removeDuplicates(arr) {
	var unique = 1;
	var temp = 0;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] != arr[i - 1]) {
			unique++;
			temp = arr[i];
			arr[unique - 1] = temp;
		} 
	}
	unique = arr.length - unique - 1;
	for (var i = 0; i <= unique; i++) {
		arr.pop();
	}
	return arr;
}
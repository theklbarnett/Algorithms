function reverse(arr) {
	var temp = 0;
	for (var i = 0; i < arr.length / 2; i++) {
		temp = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = arr[i];
		arr[i] = temp;
	}
	return arr;
}



function rotate(arr, shiftBy) {
	let t = Math.abs(shiftBy);
	while(t > 0) {
		if(shiftBy > 0) {
			let temp = arr[arr.length-1]
			
			for(let i = arr.length - 1; i > 0; i--)
				arr[i] = arr[i-1];
			arr[0] = temp;

		} else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
		}
		t--;
	}
}

function filterRange(arr, min, max) {
	var rm = 0;
	var j = 0;
	for (var i = 0; i < arr.length; i++) {
		while (arr[i] <= min || arr[i] >= max) {
			rm++;
			i++;
		}
		arr[j] = arr[i];
		console.log(arr);
		j++;	
	}
	arr.length = arr.length - rm;
	return arr;
}

function concat(arra, arrb) {
	var newarr = [];
	newarr.length = arra.length + arrb.length;
	for (var i = 0; i < newarr.length; i++) {
		if (i < arra.length) {
			newarr[i] = arra[i];
		} else {
			newarr[i] = arrb[i - arra.length];
		}
	}
	return newarr;
}

console.log(concat([1,2,3], [4,5,6,7,8,9]))
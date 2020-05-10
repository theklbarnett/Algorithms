function removeBlanks(str) {
	for (var i = 0; i < str.length; i++) {
		while (str.charAt(i) == ' ') {
			if (i == 0) {
				str = str.slice(1);
			} else {
				str = str.slice(0, i) + str.slice(i + 1);
			}
		}
	}
	return str;
}

function getDigits(str) {
	var num = '1234567890';
	for (var i = 0; i < str.length; i++) {
		while (!num.includes(str.charAt(i))) {
			if (i == 0) {
				str = str.slice(1);
			} else {
				str = str.slice(0, i) + str.slice(i + 1);
			}
		}
		console.log('str = ' + str + ', i = ' + i);
	}
	return str;
}

function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            retStr += strArr[ind][0].toUpperCase();
        }
    }
    return retStr;
}

function countNonSpaces(str) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == ' ') {
			count++;
		}
	}
	return str.length - count;
}

function removeShorterStrings(arr, len) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length < len) {
			for (var j = i; j < strArr.length - 1; j++){
                var temp = strArr[i];
                arr[j] = strArr[j + 1];
                arr[j + 1] = temp;
            }
            arr.pop();
		}
	}
}

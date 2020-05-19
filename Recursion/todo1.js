function sigma(num) {
	if (num <= 0) {
		return 0;
	} else {
		return sigma(num - 1) + Math.floor(num);
	}
}

function factorial(num) {
	if (num <= 0) {
		return 1;
	} else {
		return factorial(num - 1) * Math.floor(num);
	}
}

function floodFill(canvas2D, startXY, newColor) {
	var oldColor = canvas2D[startXY[1]][startXY[0]];
	canvas2D[startXY[1]][startXY[0]] = newColor;
	// pixel at (x, y - 1)
	if (startXY[1] - 1 >= 0 && canvas2D[startXY[1] - 1][startXY[0]] == oldColor) {
		floodFill(canvas2D, [startXY[0], startXY[1] - 1], newColor);
	}
	// pixel at (x, y + 1)
	if (startXY[1] + 1 <= canvas2D.length - 1 && canvas2D[startXY[1] + 1][startXY[0]] == oldColor) {
		floodFill(canvas2D, [startXY[0], startXY[1] + 1], newColor);
	}
	// pixel at (x - 1, y)
	if (startXY[0] - 1 >= 0 && canvas2D[startXY[1]][startXY[0] - 1] == oldColor) {
		floodFill(canvas2D, [startXY[0] - 1, startXY[1]], newColor);
	}
	// pixel at (x + 1, y)
	if (startXY[0] + 1 <= canvas2D[0].length - 1 && canvas2D[startXY[1]][startXY[0] + 1] == oldColor) {
		floodFill(canvas2D, [startXY[0] + 1, startXY[1]], newColor);
	}
}


var array = [[3,2,3,4,3], [2,3,3,4,0], [7,3,3,5,3], [6,5,3,4,1], [1,2,3,3,3]];

floodFill(array, [2,2], 1);
console.log(array);

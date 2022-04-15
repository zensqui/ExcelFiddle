

function parseEquation(equation, shift) {
	var testString = equation
	var testArray = testString.split("")

	var outS = ""
	for (var i = 0; i < testArray.length; i++) {
		var temp = "" + i
		var c = 3 - temp.length
		for (var j = 0; j < c; j++) {
			temp += " "
		}
		outS += temp
	}
	//console.log(testArray.join("  "))
	//console.log(outS)
	var open = 0
	var closed = 0
	var tempPair = []
	var pairs = []
	//are we waiting for a new pair to open

	for (var j = 0; j < testString.length; j++) {
		if (testArray[j].includes("(")) {
			if (closed == open && open == 0) {
				tempPair.push(j)
			}

			open++
		}
		if (testArray[j].includes(")")) {
			closed++
			if (closed == open && open != 0) {
				tempPair.push(j)
				pairs.push(tempPair)
				tempPair = []
				open = 0
				closed = 0
			}
		}
	}

	for (var l = 0; l < pairs.length; l++) {
		pairs[l].push(parseEquation(testString.substring(pairs[l][0] + 1, pairs[l][1]), pairs[l][0] + 1     ))
	}
	return pairs
}
var eq = "t = x+y^((1/2) + 1(y + 1))+ 3(4)"
var splitStep = parseEquation(eq)

function parsePieces(global,split, original, shift) {
    for (var i = 0; i < split.length; i++) {
        if (split[i][2].length == 0) {

            console.log(split[i])
            global = (original.substring(split[i][0]+1+shift, split[i][1]+shift))
        } else {
            parsePieces(global, split[i][2], original, split[i][0] + shift+1)
        }
    }
}
let glob
parsePieces(glob, splitStep, eq, 0)
console.log(glob)
var outS = ""
	for (var i = 0; i < eq.length; i++) {
		var temp = "" + i
		var c = 3 - temp.length
		for (var j = 0; j < c; j++) {
			temp += " "
		}
		outS += temp
}
console.log(eq.split("").join("  "))
console.log(outS)
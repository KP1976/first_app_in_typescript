var combine = function (input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'number') {
    // 	return +result;
    // } else {
    // 	return result.toString();
    // }
};
var combinedAges = combine(30, 26, 'number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'number');
console.log(combinedStringAges);
var combinedNames = combine('Krzysiek', 'Ania', 'text');
console.log(combinedNames);

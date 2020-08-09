type Combinable = number | string;
type ConversionDescriptor = "number" | "text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  // if (resultConversion === 'number') {
  // 	return +result;
  // } else {
  // 	return result.toString();
  // }
};

const combinedAges = combine(30, 26, "number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "number");
console.log(combinedStringAges);

const combinedNames = combine("Krzysiek", "Ania", "text");
console.log(combinedNames);

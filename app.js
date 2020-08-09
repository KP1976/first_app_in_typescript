var userInput;
var userName;
userInput = 5;
userInput = "Krzysiek";
if (typeof userInput === "string") {
    userName = userInput;
}
var generateErrors = function (message, code) {
    throw { message: message, errorCode: code };
};
var result = generateErrors("Pojawił się błąd", 500);
console.log(result);

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Krzysiek";
if (typeof userInput === "string") {
  userName = userInput;
}

const generateErrors = (message: string, code: number) => {
  throw { message, errorCode: code };
};

const result = generateErrors("Pojawił się błąd", 500);
console.log(result);

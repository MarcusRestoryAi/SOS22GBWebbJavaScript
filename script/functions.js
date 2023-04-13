//Function för att säga hej
function sayHey() {
    console.log("Hello World");
}

function returnType(obj) {
    if (typeof(obj) == "string") {
        return obj + " has been returned";
    } else if (typeof(obj) == "number") {
        return obj + 5;
    }
}

//Function för att summera 2 tal
function addNumbers(tal1 = 0, tal2 = 0) {
    return tal1 + tal2;
}
/*
function addNumbers(tal1) {
    return tal1 + 100;
}
*/
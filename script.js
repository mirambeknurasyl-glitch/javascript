
function runTasks() {
    console.log("TASK 6");

    let fullName = "Nurassyl Mirambek";
    let age = 17;
    let isStudent = true;
    const favouriteColour = "Blue";

    console.log(fullName, typeof fullName);
    console.log(age, typeof age);
    console.log(isStudent, typeof isStudent);
    console.log(favouriteColour, typeof favouriteColour);

    age = 18;
    console.log("New age:", age);
    console.log("TASK 7");

    let name = prompt("Enter your name:");
    alert("Hello, " + name + "!");

    let group = prompt("Enter your group:");
    console.log(`My name is Nurassyl Mirambek. My group is ${group}.`);
    console.log("TASK 8");

    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    console.log("Sum:", a + b);
    console.log("Difference:", a - b);
    console.log("Product:", a * b);

    if (b !== 0) {
        console.log("Quotient:", a / b);
        console.log("Remainder:", a % b);
    }

    console.log("12" + "5");
    console.log(Number("12") + Number("5"));
    console.log("TASK 9");

    let text = "Nurassyl Mirambek";

    console.log("Length:", text.length);
    console.log("Uppercase:", text.toUpperCase());
    console.log("Lowercase:", text.toLowerCase());
    console.log("First three:", text.slice(0, 3));

    let first = "I am learning";
    let second = "JavaScript";

    console.log(first + " " + second);
    console.log("TASK 10");

    let counter = 10;

    counter++;
    console.log(counter);

    counter--;
    console.log(counter);

    counter += 5;
    console.log(counter);

    counter -= 3;
    console.log(counter);

    counter *= 2;
    console.log(counter);

    counter /= 4;
    console.log(counter);
    console.log("TASK 11");

    let dogAge = 2;
    let humanAge = (dogAge - 2) * 4 + 21;

    console.log("Dog age:", dogAge, "Human age:", humanAge);

    dogAge = 5;
    humanAge = (dogAge - 2) * 4 + 21;

    console.log("Dog age:", dogAge, "Human age:", humanAge);
    console.log("TASK 12");

    function greetUser(name) {
        console.log("Hello, " + name + "!");
    }

    function calculateSum(a, b) {
        return a + b;
    }

    function calculateRectangleArea(width, height) {
        return width * height;
    }

    greetUser("Nurassyl");
    greetUser("Feruza");

    console.log(calculateSum(3, 4));
    console.log(calculateSum(12, 5));

    console.log(calculateRectangleArea(5, 2));
    console.log(calculateRectangleArea(7, 3));

}

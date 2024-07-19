#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var randomNumber = Math.floor(10000 + Math.random() * 10000);
var myBalance = 0;
var answer = await inquirer_1.default.prompt([{
        name: "students",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter your name";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enroll",
        choices: ["MS Office", "Python", "Javascript", "C++"]
    }
]);
var tutionFees = {
    "MS Office": 2000,
    "Python": 5000,
    "Javascript": 2500,
    "C++": 7000
};
console.log("\nTution fees: ".concat(tutionFees[answer.courses], "/-\n"));
console.log("Balance: ".concat(myBalance, "\n"));
var paymentType = await inquirer_1.default.prompt([{
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank transfer", "EasyPaisa", "jazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter amount";
        }
    }
]);
console.log("\nYou select Payment method ".concat(paymentType.payment, "\n"));
var tutionfee = tutionFees[answer.courses];
var paymentAmount = parseFloat(paymentType.amount);
if (tutionfee === paymentAmount) {
    console.log("congratulation you have successfully enrolled in ".concat(answer.courses));
}
else if (tutionfee > paymentAmount) {
    console.log("you have to pay remaining balance ".concat(tutionfee - paymentAmount));
}
else if (tutionfee < paymentAmount) {
    console.log("you have an outstanding balance of ".concat(paymentAmount - tutionfee));
}
var ans = await inquirer_1.default.prompt([{
        name: "select",
        type: "list",
        message: "what would you like to do next?",
        choices: ["show status", "exit"]
    }]);
if (ans.select === "show status") {
    console.log("\n******STATUS******\n");
    console.log("Student name:".concat(answer.students));
    console.log("Student ID: ".concat(randomNumber));
    console.log("Course Enrolled: ".concat(answer.courses));
    console.log("Tution fee Paid: ".concat(paymentAmount));
}
else {
    console.log("\n exiting student management system\n");
}

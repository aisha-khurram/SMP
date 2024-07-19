#! usr/bin/env node

import inquirer from "inquirer";

const randomNumber:number=Math.floor(10000+ Math.random()*10000);
let myBalance:number=0
let answer=await inquirer.prompt([{
    name:"students",
    type:"input",
    message:"Enter student name",
    validate:function(value){
        if (value.trim()!==""){
            return true;
        }
        return"please enter your name";
    }
},
{
    name:"courses",
    type:"list",
    message:"Select the course to enroll",
    choices:["MS Office","Python","Javascript","C++"]
}
]);
const tutionFees:{[key:string]:number}={
    "MS Office":2000,
    "Python":5000,
    "Javascript":2500,
    "C++":7000
}

console.log(`\nTution fees: ${tutionFees[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType=await inquirer.prompt([{
    name:"payment",
    type:"list",
    message:"Select payment method",
    choices:["Bank transfer","EasyPaisa","jazzCash"]
},
{
    name:"amount",
    type:"input",
    message:"Transfer Money",
    validate:function(value){
        if (value.trim()!==""){
            return true;
        }
        return "Please enter amount";
    }
}
]);
console.log(`\nYou select Payment method ${paymentType.payment}\n`)

const tutionfee=tutionFees[answer.courses];
const paymentAmount=parseFloat(paymentType.amount);
if (tutionfee===paymentAmount){
    console.log(`congratulation you have successfully enrolled in ${
    answer.courses}`)
    
}
else if(tutionfee>paymentAmount){
    console.log(`you have to pay remaining balance ${tutionfee-paymentAmount}`);
}
else if(tutionfee<paymentAmount){
    console.log(`you have an outstanding balance of ${paymentAmount-tutionfee}`)
}
let ans=await inquirer.prompt([{
    name:"select",
    type:"list",
    message:"what would you like to do next?",
    choices:["show status","exit"]
}])
if(ans.select==="show status"){
    console.log("\n******STATUS******\n");
    console.log(`Student name:${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course Enrolled: ${answer.courses}`);
    console.log(`Tution fee Paid: ${paymentAmount}`);
    
}
else{
    console.log("\n exiting student management system\n")
}
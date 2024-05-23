#! /ustr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
const answere = await inquirer.prompt([{
        name: "stutent",
        type: "input",
        message: "Enter student name:",
        validate: (value) => {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the courses to enrolled:",
        choices: ["HTML", "CSS", "Javascript", "Typescript", "React", "Nextjs"]
    }]);
const tuitionFee = {
    "HTML": 3000,
    "CSS": 3500,
    "Javascript": 4000,
    "Typescript": 5000,
    "React": 5500,
    "Nextjs": 6000
};
console.log(`\nTuition Fees: ${tuitionFee[answere.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([{
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: (value) => {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    }]);
console.log(`You select payment type ${paymentType.payment}.\n`);
const tuitionFees = tuitionFee[answere.courses];
const payment = parseFloat(paymentType.amount);
if (tuitionFees === payment) {
    console.log(`Congratulations, you have succesfully enrolled ${answere.courses}.\n`);
    let ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View Status", "Exit"]
    });
    if (ans.select == "View Status") {
        console.log("\n********Status*********\n");
        console.log(`Student Name: ${answere.stutent}`);
        console.log(`Student Id: ${randomNumber}`);
        console.log(`Course: ${answere.courses}`);
        console.log(`Tuition Fees paid: ${payment}`);
        console.log(`Balance: ${myBalance += payment}`);
    }
    else if (ans.select == "View Status") {
        console.log("\nExiting Student Management System.\n");
    }
    else {
        console.log("\nExiting Student Management System.\n");
    }
}
else {
    console.log("Invalid amount due to course.\n");
}

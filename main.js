#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to A.A Words Counter");
let answer = await inquirer.prompt([{
        name: "Message",
        type: "input",
        message: "Enter Your Sentence"
    }]);
let Sentence = answer.Message.trim().split(" ");
console.log(Sentence);
console.log(`Your Counted Words: ${Sentence.length}`);
do {
    let q2 = await inquirer.prompt({
        name: "question",
        type: "list",
        choices: ["continue", "exit"]
    });
    if (q2.question === "continue") {
        let ans2 = await inquirer.prompt({
            name: "dubara",
            type: "input",
            message: "enter your sentence"
        });
        let Sentence2 = ans2.dubara.trim().split(" ");
        console.log(Sentence2);
        console.log(`Your Counted Words: ${Sentence2.length}`);
    }
    if (q2.question == "exit") {
        console.log("Thank you for using A.A word counter!!");
        process.exit();
    }
} while (true);

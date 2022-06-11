const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const inquirer = require ('inquirer');
const team = []

function mainMenu () {
    inquirer.prompt ({
        type: "list",
        name: "empType",
        message: "What type of Employee would you like to add?", 
        choices: ['manager', 'engineer', 'intern', 'exit']
    }) .then (answer => {
        if (answer.empType === 'manager') {
            askManager()
        } else if (answer.empType === 'engineer') {
            askEngineer ()
        } else if (answer.empType === 'intern') {
            //ask intern questions
        } else {process.exit ()}
    })
}

function askManager () {
    inquirer.prompt ([{
        type: "input",
        name: "manName",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "manId",
        message: "What is the manager's id?"

    },
    {
        type: "input",
        name: "manEmail",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "manOfficeNumber",
        message: "What is the manager's office number?"
    }
]) . then(answers => {
    const manager = new Manager (answers.manName, answers.manId, answers.manEmail, answers.manOfficeNumber)
    team.push (manager)
    mainMenu ()
})
}

function askEngineer () {
    inquirer.prompt ([{
        type: "input",
        name: "engName",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "engId",
        message: "What is the engineer's id?"

    },
    {
        type: "input",
        name: "engEmail",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "engGitHub",
        message: "What is the engineer's GitHub?"
    }
]) . then(answers => {
    const engineer = new Engineer (answers.engName, answers.engId, answers.engEmail, answers.engGitHub)
    team.push (engineer)
    mainMenu ()
})
}


mainMenu ()
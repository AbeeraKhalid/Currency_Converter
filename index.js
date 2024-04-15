#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const Currency_conversion = {
    PKR: 300, //pakistani rupees currency
    SAR: 4.05, //Saudi Riyal
    NZD: 1.82, //Newzealand$
    RUD: 100.71, //Russian ruble
    QAR: 30.9, //qatari riyal
    USD: 1.08, //american dollar
    TRY: 34.97, //turkey lira
    AED: 3.96, // UAE Dirhum
    CNY: 7.83, //china yaun
    KWD: 0.33, //kuwait dinar
    EUR: 0.95 //european dollar
};
let currency_Answer = await inquirer.prompt([{
        name: 'from',
        message: chalk.italic.bgGrey.greenBright('Enter your from currency'),
        type: 'list',
        choices: ['PKR', 'SAR', 'NZD', 'RUD', 'QAR', 'USD', 'TRY', 'AED', 'CNY', 'KWD', 'EUR']
    },
    {
        name: 'to',
        message: chalk.italic.bgGrey.greenBright('Enter your to currency'),
        type: 'list',
        choices: ['PKR', 'SAR', 'NZD', 'RUD', 'QAR', 'USD', 'TRY', 'AED', 'CNY', 'KWD', 'EUR']
    },
    {
        name: 'amount',
        type: 'number',
        message: chalk.blueBright('Enter your amount')
    }
]);
let amount = currency_Answer.amount;
let fromCurrency = currency_Answer.from;
let toCurrency = currency_Answer.to;
let from_Amount = Currency_conversion[fromCurrency]; //Exchange rate
let to_Amount = Currency_conversion[toCurrency]; //Exchange rate
let base_Amount = amount / from_Amount;
let converted_Amount = base_Amount * to_Amount;
console.log(chalk.magentaBright.bold(converted_Amount));

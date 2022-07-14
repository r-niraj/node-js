// importing chalk module below
const chalk = require('chalk');
// importing validator module below
const validator = require('validator');

// console.log(chalk.red('This is danger'));
// console.log(chalk.underline.bgBlue('This is danger'));
// console.log(chalk.underline.inverse('This is danger'));
// console.log(chalk.blue.underline.inverse('This is danger'));
// console.log(chalk.red.underline.inverse('This is danger'));


// using validator 3rd party module
// const target = validator.isEmail('usermail@mail.com'); //this will give true as this is correct format of mail
const target = validator.isEmail('usermail#mail.com'); //this will give false as this is not a correct format of mail
console.log(target);
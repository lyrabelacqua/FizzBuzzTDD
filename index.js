const fizzBuzz = require('./fizzbuzz');

function theProgram() {
    let result = '';
    for (i = 1; i < 101; i++) {
        result += `${fizzBuzz(i)}${i !== 100 ? ' ': ''}`
    }
    return result;
}

console.log(theProgram());

module.exports = theProgram;
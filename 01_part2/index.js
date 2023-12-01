import fs from 'fs';
import readline from 'readline';

const filePath = './input.txt';

export function readFileAndExtractNumbers(filePath) {
    return new Promise((resolve, reject) => {
      const fileStream = fs.createReadStream(filePath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      let count = 0;

      rl.on('line', (line) => {
        const extractedNumber = extractNumberFromLine(line);
        if(isNaN(extractedNumber)){
            console.log(line)
        }
        if (!isNaN(extractedNumber)) {
          count += extractedNumber;
        }
      });

      rl.on('close', () => {
        resolve(count);
      });

      rl.on('error', (err) => {
        reject(err);
      });
    });
}

const numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const writtenFormArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const numberHasMap = { 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9' };

function findFirstNumber(line) {
    let str = '';
    let result;
    for (let index = 0; index < line.length; index++) {
        const element = line[index];
        str = str + element;
        result = isNumber(element);
        if(result) return result;
        result = isWrittenNumber(str)
        if(result) return result;
    }
}

function findLastNumber(line) {
    let str = '';
    let result;
    for (let index = line.length -1; index > -1; index--) {
        const element = line[index];
        str = element + str;
        result = isNumber(element);
        if(result) return result;
        result = isWrittenNumber(str)
        if(result) return result;
    }
}

export function extractNumberFromLine(line) {
    const firstNumber = findFirstNumber(line);
    const lastNumber = findLastNumber(line);
    return Number(firstNumber + lastNumber);
}

function isNumber(element) {
    return numericArray.find((number) => element === number);
}

function isWrittenNumber(str) {
    const matches = writtenFormArray.filter((numberAsText) => {
        return str.includes(numberAsText);
    })
    return numberHasMap[matches[0]];
}

// Example usage:
readFileAndExtractNumbers(filePath)
  .then((result) => {
    console.log('Total count:', result);
  })
  .catch((error) => {
    console.error('Error reading file:', error);
  });

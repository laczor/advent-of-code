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

function findFirstNumber(text) {
  const firstNumberMatch = text.match(/\d{1}/);
  return firstNumberMatch ? firstNumberMatch[0] : null;
}

function findLastNumber(text) {
  const lastNumberMatch = text.match(/\d{1}(?=[^\d]*$)/);
  return lastNumberMatch ? lastNumberMatch[0] : null;
}

function extractNumberFromLine(line) {
  const firstNumber = findFirstNumber(line);
  const lastNumber = findLastNumber(line);
    return Number(firstNumber + lastNumber);
}

// Example usage:
readFileAndExtractNumbers(filePath)
  .then((result) => {
    console.log('Total count:', result);
  })
  .catch((error) => {
    console.error('Error reading file:', error);
  });

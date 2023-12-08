import fs from 'node:fs';

export function sumOfPartNumbers({ filePath }) {
    const data = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
    let sum = 0;

    for (let index = 0; index < data.length; index++) {
        let row = data[index];
        const previousRow = data[index -1] ? data[index -1] : '' ;
        const nextRow = data[index +1] ? data[index +1] : '' ;
        const result = sumSymbols({ row, previousRow, nextRow});
        sum = sum + result;
    }
    return sum;
}

export function isSymbol({ matchResult, row, previousRow, nextRow } ) {
    const number = matchResult[0];
    const { index } = matchResult;
    const previousRowString = subPath({ row: previousRow, start: index -1 , end: index + number.length + 1 });
    const currentRowSring = subPath({ row: row, start: index -1 , end: index + number.length + 1 });
    const nextRowString = subPath({ row: nextRow, start: index -1 , end: index + number.length + 1 });
    if(previousRowString.concat(nextRowString).concat(currentRowSring).search(/[^\d.]/) !== -1){
        return true
    }
    return false;
}

export function sumSymbols({ row, previousRow, nextRow }) {
    return [...row.matchAll(/\d+/g)].reduce((acc, matchResult) => {
        if(isSymbol({ matchResult, row, previousRow, nextRow  })){
            return acc + Number(matchResult[0]);
        }
        return acc;
    }, 0);
}

function subPath({ row, start, end }) {
    if(start < 0 ) start = 0;
    return row.slice(start, end);
}

sumOfPartNumbers({ filePath: '../input.txt'})
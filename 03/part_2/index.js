import fs from 'node:fs';

export function sumOfGearNumbers({ filePath }) {
    const data = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
    let sum = 0;

    for (let index = 0; index < data.length; index++) {
        const row = data[index];
        const previousRow = data[index - 1] ? data[index - 1] : '';
        const nextRow = data[index + 1] ? data[index + 1] : '';
        const result = sumGears({ row: data[index], previousRow, nextRow });
        sum = sum + result;

    }
    return sum;
}

export function sumGears({ row, previousRow, nextRow  }) {
    return [...row.matchAll(/[*]/g)].reduce((acc, matchResult) => {
        acc = acc + isNextNumbers( { index: matchResult.index, row})
        acc = acc + isInSurronding({ index: matchResult.index, row, previousRow, nextRow })
        console.log(acc);
        return acc;
    }, 0);
}

function isNextNumbers({ index, row }) {
    const immediateNeighboors = row.slice(index -3, index + 4).match(/(\d+)[*](\d+)/)
    if( immediateNeighboors){
        return Number(immediateNeighboors[1]) * Number(immediateNeighboors[2]);

    };
    return 0;
}

function isInSurronding({ index, previousRow, nextRow } ) {
    const previousParts = findPartNumber({ index, row: previousRow })
    if(previousParts.length === 2) {
        return previousParts.reduce((acc, el) => acc*el, 1);
    }

    const nextParts = findPartNumber({ index, row: nextRow });
    if(nextParts.length === 2) {
        return previousParts.reduce((acc, el) => acc*el, 1);
    }

    return  [...previousParts, ...nextParts].reduce((acc, el) => acc * el, 1)
}

function findPartNumber({ index, row } ) {
    const is3digits = [...row.slice(index -3, index + 4).matchAll(/(\d{3})/g)];
    if(is3digits.length >= 1) {
        return is3digits.reduce((acc, match) => [...acc, Number(match[0])] ,[])
    }

    const is2digits = row.slice(index -2, index + 3).matchAll(/(\d{2})/g);
    if(is2digits.length >=1 ) {
        return is2digits.reduce((acc, match) => [...acc, Number(match[0])] ,[])
    }

    const is1digits = row.slice(index -1, index + 2).matchAll(/(\d{1})/g);
    if(is1digits.length >=1 ) {
        return is1digits.reduce((acc, match) => [...acc, Number(match[0])] ,[])
    }
    return [0];
}

// console.log(sumOfGearNumbers({ filePath: '../input.txt' }))


/*
 * There is NAN error with these lines
    .....890......$...73...422...*...977&.......324..%.......@................29.......945....*.............298-..................#.........#642
    ........*........*....%......................................$645......-...*...150.....434.259..609*560....../............266..524..../.....
    .....203..........133.....596.619.................*...............676.107..811...*...........................115...........*.........178....
 *
*/
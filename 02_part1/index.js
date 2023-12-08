import fs from 'node:fs';

export function countPossibleGames({ filePath, configuration }) {
    const data = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
    return data.reduce((accumulator, game) => {
        const gameNumber = game.match(/(\d+):/)[1];
        if(isValidGame({ game, configuration })) {
            return accumulator + Number(gameNumber);
        }
        return accumulator;
    }, 0);
}

export function isValidGame({ game, configuration }) {
    const colors = [...game.matchAll(/(\d+)( red| green| blue)/g)]
    return !colors.find(([_, value, color]) => configuration[color.trim()] < value);
}

console.log(countPossibleGames({ filePath: './input.txt', configuration: { red: 12, green: 13, blue: 14  }}))
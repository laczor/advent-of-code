import fs from 'node:fs';

export function countPowerOfGames({ filePath, configuration }) {
    const data = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
    return data.reduce((accumulator, game) => {
        return accumulator + calculatePower(findMinimalConfiguration( { game }));
    }, 0);
}

export function findMinimalConfiguration({ game }) {
    const colors = [...game.matchAll(/(\d+)( red| green| blue)/g)]
    return colors.reduce((acc,  [_, value, color]) => {
        acc[color.trim()] = typeof acc[color.trim()] !== 'number' ? Number(value) : Math.max(Number(value), acc[color.trim()]);
        return acc;
    }, {})
}

export function calculatePower(configuration) {
    return Object.values(configuration).reduce((acc, value) => {
        return acc * value
    }, 1)
}

console.log(countPowerOfGames({ filePath: './input.txt',}))
import wordBank from './wordbank.txt';

export const boardDefault = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
];

export const generateWordSet = async () => {
    const response = await fetch(wordBank);
    const text = await response.text();
    const wordArr = text.split('\n');
    const randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    const wordSet = new Set(wordArr);
    return {
        wordSet,
        randomWord
    }
}
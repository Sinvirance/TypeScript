function helloSafe(words: string) {
    if(typeof words === 'string') {
        return 'hello ' + words;
    } else {
        throw new Error('words is not a string');
    }
}

let word = 'world';
console.log(helloSafe(word));
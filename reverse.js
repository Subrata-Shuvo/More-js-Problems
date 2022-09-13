const greetings = 'How are you?';

function reversedString(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        reverse = letter + reverse;
    }
}

const reversed = reversedString(greetings);
console.log(reversed);
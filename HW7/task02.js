let secretMessage =
    "Yesterday, we bumped into Laura. It had to happen, but you can't deny the timing couldn't be worse. The \"mission\" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn't been a pleasurable experience to go through it. I wanted to feel done with it first.";

function hiddenMessage(string) {
    let firstSentence = string.split('. ')[0], // FS
        wordsFS = firstSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' '), // FS's words
        sentences = string.split('. '); // all sentences

    let lengthWords = [],
        subArraysOfSentences = [],
        secretSentence = '';

    sentences.shift(); // subArraysOfSentences without FS and punctuation
    sentences.forEach((el) => subArraysOfSentences.push([el.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').trimEnd()]));

    for (let str of wordsFS) {
        lengthWords.push(str.length); // array of word's length in the sentence
    }

    for (let i = 0; i < subArraysOfSentences.length; i++) {
        let eachSentence = subArraysOfSentences[i][0]; // each sentence in the sub array

        let eachWord = eachSentence.split(' '); // each word in the sentence

        secretSentence += eachWord[lengthWords[i] - 1] + ' '; // accumulator
    }

    // the first letter in the secret sentence to upper case, removed unnecessary space, dot added
    return secretSentence.charAt(0).toUpperCase() + secretSentence.slice(1).trimEnd() + '.';
}

console.log(hiddenMessage(secretMessage)); // `The "mission" has been done.`

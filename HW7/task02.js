let secretMessage =
  "Yesterday, we bumped into Laura! It had to happen, but you can't deny the timing couldn't be worse? The \"mission\" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn't been a pleasurable experience to go through it. I wanted to feel done with it first.";
let secondMessage =
  "Yesterday, we bumped into Laura. It had to happen, but you can't deny the timing couldn't be worse. The \"mission\" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn't been a pleasurable experience to go through it. I wanted to feel done with it first. Yesterday, we bumped into Laura. It had to happen, but you can't deny the timing couldn't be worse. The \"mission\" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn't been a pleasurable experience to go through it. I wanted to feel done with it first.";

function hiddenMessage(stringMain) {
  const stringMainCopy = stringMain;
  let lengthWords = [],
    subArraysOfSentences = [],
    result = '';

  function manageString(string) {
    const replaceEndFn = (str) => str.replace(/[\.!\?]/g, '.');
    const replacePunctuationFn = (str) =>
      str.replace(/[.,\/#!$%\^&\*;":{}=\-_`~()]/g, '');

    const firstSentence = replaceEndFn(string).split('. ')[0], // FS
      sentences = replaceEndFn(string).split('. '), // all sentences except FS
      wordsFS = replacePunctuationFn(firstSentence).split(' '); // FS's words

    sentences.shift(); // subArraysOfSentences without FS and punctuation
    sentences.forEach((el) =>
      subArraysOfSentences.push([replacePunctuationFn(el).trimEnd()])
    );

    for (let word of wordsFS) {
      lengthWords.push(word.length); // array of word's length in the sentence
    }

    sentences.splice(0, wordsFS.length);

    createMessage(sentences, sentences.length, wordsFS.length);
  }

  function createMessage(string, sentencesLength, wordsFSLength) {
    let secretSentence = '';

    string.splice(0, 1);
    let newString = string.join('. ');

    if (sentencesLength > wordsFSLength) {
      manageString(newString);
    }

    for (let i = 0; i < subArraysOfSentences.length; i++) {
      let eachSentence = subArraysOfSentences[i][0]; // each sentence in the sub array
      let eachWord = eachSentence.split(' '); // each word in the sentence

      secretSentence += eachWord[lengthWords[i] - 1] + ' '; // accumulator
    }

    result +=
      secretSentence.charAt(0).toUpperCase() +
      secretSentence.slice(1).trimEnd() +
      '. ';
  }

  manageString(stringMainCopy);
  // the first letter in the secret sentence to upper case, removed unnecessary space, dot added
  return result.trimEnd();
}

console.log('short: ', hiddenMessage(secretMessage)); // `The "mission" has been done.`
console.log('long: ', hiddenMessage(secondMessage));
// hiddenMessage(secretMessage);
// hiddenMessage(secondMessage);

const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS',
};

Object.freeze(MORSE_CODE);

/**
 * This is the entry point to the program.
 *
 * @param {string} morseCode The string to decode.
 */
function decodeMorse(morseCode) {
  const englishWordsContainer = [];
  const characterSpacing = ' ';
  const wordSpacing = '   ';

  //Trim trailing and leading whitespace from morse code inpit
  morseCode = morseCode.trim();

  //Split the morse code input by word spacing
  let splitWords = morseCode.split(wordSpacing);

  //Loop through each split morse word
  splitWords.forEach((word)=>{
    const englishCharacterContainer = [];

    //Split each morse word into an array of morse characters
    const splitCharacters = word.split(characterSpacing);
    
    //loop through each morse character in the morse character array
    splitCharacters.forEach((morseCharacter)=>{
      //Get the english equivalent of the morse character
      if(MORSE_CODE.hasOwnProperty(morseCharacter)){
        const englishCharacter = MORSE_CODE[morseCharacter];
      } 

      englishCharacterContainer.push(englishCharacter);
    });

    //Join the array of english characters into a word
    const englishWord = englishCharacterContainer.join('');

    englishWordsContainer.push(englishWord);
  });

  //Finally join the contents of the English Words Container into one string
  return englishWordsContainer.join(' ');
} 

module.exports = decodeMorse;

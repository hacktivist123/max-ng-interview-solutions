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
 
    let decodedWord = "";
    let morseCodeTrim = morseCode.trim();
    let codeArray = morseCodeTrim.split(' ');

    //loop through input array
    for (let i = 0; i < codeArray.length; i++) {

        // checks for 2 trailing empty string characters, and translates them into a space then inserts into decodedword array
        if (codeArray[i] === "" && codeArray[i + 1] === "") {
            decodedWord = decodedWord + " ";
        }

        //loop through MORSE_CODE array translates and insert correct tranlation into decodedword array
        for (let sign in MORSE_CODE) {
            if (Object.is(sign, codeArray[i])) {
                decodedWord = decodedWord + MORSE_CODE[sign];
            }
        }
    }

    return decodedWord;
}
module.exports = decodeMorse;

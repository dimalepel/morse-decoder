const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let char = [];
  let string = [];
  
  const SYMBOLS = {
  	"10" : ".",
    "11" : "-",
  };
  
  function digitsToChar(arr) {
  	let innerChar = [];
    let innerString = [];
  	for (let i = 0, c = 1; i < arr.length; i++, c++) {
      innerChar.push(arr[i]);
      if (c === 2) {        
        innerString.push(SYMBOLS[innerChar.join('')]);
        c = 0;
        innerChar = [];
      }  	
    }
    if (MORSE_TABLE[innerString.join('')]) {
    	string.push(MORSE_TABLE[innerString.join('')]);
    } else {
    	string.push(' ');
    }
  }
  
  for (let i = 0, c = 1; i < expr.length; i++, c++) {
  	char.push(expr[i]);
    if (c === 10) {
      digitsToChar(char);
      c = 0;
      char = [];
    }  	
  }
  return string.join('');
}

module.exports = {
    decode
}
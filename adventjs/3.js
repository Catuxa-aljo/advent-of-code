function isValid(letter) {
    // ¡No dejes que el Grinch gane!
   
       const closures = { ')': '(', '}':'{', ']':'['}
       const parenthese = []
       const carta = letter.split('')
   
     for (let i = 0; i < letter.length; i++) {
       if (carta[i] === '('  || carta[i] === '[' || carta[i] === '{') {
         parenthese.push(carta[i])
       } else if (carta[i] === ')' && carta[i-1] !== '(' ) {
         parenthese.pop()
       }
       }
   
       
   
    return parenthese
   }
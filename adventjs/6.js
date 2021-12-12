function sumPairs(numbers, result) {
    let sum = 0
    let numberSum = []
    let prueba = []
  
    for (let i = 0; i < numbers.length; i++) {
      sum = numbers[i]
       for (let j = i; j < numbers.length; j++) {
        if(numbers[i] + numbers[j+1] === result) {
          numberSum.push(sum)
          numberSum.push(numbers[j+1])        
        }
      }
    }
  
    return numberSum.length > 1 ? numberSum.slice(0,2) : null
  }
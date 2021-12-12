
const measurement = (measures) => {
    let count = 0
  
    for (let i = 0; i < measures.length; i ++) {
  
      measures[i] > measures[i - 1] ? count ++ : ''
  
    }
  
    return count
  }
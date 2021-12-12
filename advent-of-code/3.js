const diagnostic = (diagnose) => {
    const binar = diagnose.join('').split('\n').map(n => n.split(''))
    
    let power = []
    let lessPower = []
    let zero = 0
    let one = 0
    
    
    for (let i = 0; i < binar[0].length; i ++) {
     
     for (let j = 0; j < binar.length; j++) {
       binar[j][i] === '1' ? one++ : zero ++
     }
     
     zero > one ? power.push('0') : power.push('1');
     zero > one ? lessPower.push('1') : lessPower.push('0')
     zero = 0;
     one = 0
    }
    
    let gamma = parseInt(Number(power.join('')), 2);
    let epsilon = parseInt(Number(lessPower.join('')), 2)
       
         
    return gamma * epsilon ;
    }

    const diagnosticOxygen = (diagnose) => {
        let binar = diagnose.join('').split('\n').map(n => n.split(''))
        
        let first = [...binar]
        let second = [...binar]
        
        
        for (let i = 0; i < first[0].length; i ++) {
          let zero = 0
          let one = 0
         for (let j = 0; j < first.length; j++) {
           first[j][i] === '1' ? one++ : zero ++
         }
        
          if (first.length > 1) {
          zero > one ? first = first.filter(num => num[i] === '0') : first = first.filter(num => num[i] === '1');
          }
         zero = 0;
         one = 0
        }
        
        for (let i = 0; i < second[0].length; i ++) {
          let zero = 0
          let one = 0
         for (let j = 0; j < second.length; j++) {
           second[j][i] === '1' ? one++ : zero ++
         }
        
          if (second.length > 1) {
          zero > one ? second = second.filter(num => num[i] === '1') : second = second.filter(num => num[i] === '0');
          }
         zero = 0;
         one = 0
        }
        
        let oxygen =  parseInt(Number(first.join().replace(/,/g, '')), 2)
        let o2 = parseInt(Number(second.join().replace(/,/g, '')), 2)
        
        
        return oxygen * o2
        }
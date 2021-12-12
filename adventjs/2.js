const listGifts = (letter) => {
    let presents = {}
    
    letter.split(' ').filter(present => present.length > 0).filter(present => present[0] !== '_')
    .forEach(present => 
    presents[present] ? presents[present]++ : presents[present] = 1)
    
    
     return presents
    }
    
const ubication = (orders) => {
    let x = 0
    let y = 0
    let aim = 0
    
    const commands = orders.map(order =>
    order.split(' '))
  
    commands.map(command => {
      if (command[0] === 'forward') {
        x += Number(command[1])
        y += Number(command[1])*aim
      } else if (command[0] === 'down') {
        aim += Number(command[1])
      } else {
        aim -= Number(command[1])
      }
    })
  
   return x*y
  
  }
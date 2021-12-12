function createXmasTree(height) {

    const star = '*'
    const space = '_'
    const trunk = '#'
    let tree = []
  
    for (let i = 1; i <= height; i++) {
      tree.push(space.repeat(height - i) + star.repeat(i + (i - 1)) + space.repeat(height - i) + '\n' )
    }
  
    tree.push(space.repeat(height - 1) + trunk + space.repeat(height - 1) + '\n')
    tree.push(space.repeat(height - 1) + trunk + space.repeat(height - 1) + '\n')
    // ¡Y no olvides también poner los turrones!
    return tree.join('').replace('/n/','<br>')
  }
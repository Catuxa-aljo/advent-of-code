function daysToXmas(date) {

    const christmasDate = new Date('Dec 25, 2021 00:00:00')
    // ¡Y no olvides compartir tu solución en redes!
    return Math.ceil((christmasDate - date) /24 / 60 / 60 / 1000)
  }
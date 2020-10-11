function secondsToMinutes(time){
  const minutes = Math.floor(time / 60)
  const secunds = Math.floor(time % 60)
  return `${('0' + minutes).slice(-2)}:${('0' + secunds).slice(-2)}`
}

const path = function(file) {
  return `files/${file}`
}

export {
  path,
  secondsToMinutes
}
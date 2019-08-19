export const isShouting = msg => !!msg.match(/\b[A-Z]+[A-Z0-9]*\b|\w+!/)

export const hasSpecialWord = msg => {
  const smallMsg = msg.toLowerCase()
  return ['oops'].map(word => smallMsg.includes(word)).some(x => !!x)
}

export default function (msg) {
  return isShouting(msg) || hasSpecialWord(msg)
}

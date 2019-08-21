import swearWords from './swearWords'

export const isShouting = msg => !!msg.match(/\b[A-Z]+[A-Z0-9]*\b!/)

export const hasSpecialWord = msg => {
  const smallMsg = msg.toLowerCase()
  return ['oops'].map(word => smallMsg.includes(word)).some(x => !!x)
}

export const hasSwear = msg => {
  const smallMsg = msg.toLowerCase()
  return swearWords.map(word => !!smallMsg.match(new RegExp(`\\b${word}\\b`))).some(x => !!x)
}

export default function (msg) {
  return isShouting(msg) || hasSwear(msg) //|| hasSpecialWord(msg)
}

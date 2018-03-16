import { padding, padding40, padding41, padding42, padding43, revEmojis, emojis } from './mapping'

export default function encode (s : Buffer) {

  let str = ''
  const size = 5
  const numOfPairs = Math.ceil(s.length / size)

  for (let i = 0; i < numOfPairs; i++) {
    const datas = _encode(s.slice(size * i, size * (i+1)))
    str += datas.join('')
  }

  return str
}

function _encode (s : Buffer) : any {

  if (s.length === 0) {
    throw "Expected data"
  }

  let b0 = s[0], b1 = 0, b2 = 0, b3 = 0, b4 = 0

  if (s.length > 1) {
    b1 = s[1]
  }

  if (s.length > 2) {
    b2 = s[2]
  }

  if (s.length > 3) {
    b3 = s[3]
  }

  if (s.length > 4) {
    b4 = s[4]
  }

  const runes = [emojis[b0<<2|b1>>6], padding, padding, padding]

  switch (s.length) {
  case 1:
    //nothing to do, all padding
    break

  case 2:
    runes[1] = emojis[(b1&0x3f)<<4|b2>>4]
    break

  case 3:
    runes[1] = emojis[(b1&0x3f)<<4|b2>>4]
    runes[2] = emojis[(b2&0x0f)<<6|b3>>2]
    break

  case 4:
    runes[1] = emojis[(b1&0x3f)<<4|b2>>4]
    runes[2] = emojis[(b2&0x0f)<<6|b3>>2]

    switch (b3 & 0x03) {
      case 0:
        runes[3] = padding40
        break
      case 1:
        runes[3] = padding41
        break
      case 2:
        runes[3] = padding42
        break
      case 3:
        runes[3] = padding43
        break
    }
    break

  case 5:
    runes[1] = emojis[(b1&0x3f)<<4|b2>>4]
    runes[2] = emojis[(b2&0x0f)<<6|b3>>2]
    runes[3] = emojis[(b3&0x03)<<8|b4]
    break

  default:
    throw(`unexpected length ${s.length}`)

  }

  return runes
}

import test from 'ava';
import encode from './encode'

test('Encode', t => {
  const str = "Base64 is so 1999, isn't there something better?\n"

  const buffer = Buffer.from(str, 'utf-8')
  const encoded = encode(buffer)

  t.is(encoded, '🏗📩🎦🐇🎛📘🔯🚜💞😽🆖🐊🎱🥁🚄🌱💞😭💮🇵💢🕥🐭🔸🍉🚲🦑🐶💢🕥🔮🔺🍉📸🐮🌼👦🚟🥴📑')
})

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`
https://telegra.ph/file/a17eb7c663bf13fa84c1f.jpg
`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*BERMUDA*`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['olympus']
handler.tags = ['info']
handler.command = /^(server)$/i
export default handler
import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙳𝚄𝚁𝙰𝚁 𝙼𝙰𝚂 𝙳𝙴 10 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂*')
let img = await q.download?.()
if (!img) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎, 𝐈𝐌𝐀𝐆𝐄𝐍 𝐎 𝐈𝐍𝐒𝐄𝐑𝐓𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐔𝐍𝐀 𝐈𝐌𝐀𝐆𝐄𝐍 𝐓𝐄𝐑𝐌𝐈𝐍𝐀𝐂𝐈Ò𝐍 .jpg 𝐋𝐀 𝐂𝐔𝐀𝐋 𝐒𝐄𝐑À 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐀 𝐄𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑, 𝐃𝐄𝐁𝐄 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄𝐑 𝐎 𝐔𝐒𝐀𝐑 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ${usedPrefix + command}*`
let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 / 𝐔𝐑𝐋 / 𝐋𝐈𝐍𝐊 𝐍𝐎 𝐄𝐒 𝐕𝐋𝐈𝐃𝐎, 𝐋𝐀 𝐓𝐄𝐑𝐌𝐈𝐍𝐀𝐂𝐈Ò𝐍 𝐃𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 / 𝐔𝐑𝐋 / 𝐋𝐈𝐍𝐊 𝐃𝐄𝐁𝐄 𝐒𝐄𝐑 .𝚓𝚙𝚐')
}} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐎 𝐒𝐈𝐄𝐍𝐓𝐎, 𝐎𝐂𝐔𝐑𝐑𝐈Ò 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑, 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎. 𝐍𝐎 𝐎𝐋𝐕𝐈𝐃𝐄 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄𝐑 𝐀 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎, 𝐈𝐌𝐀𝐆𝐄𝐍 𝐎 𝐈𝐍𝐒𝐄𝐑𝐓𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐔𝐍𝐀 𝐈𝐌𝐀𝐆𝐄𝐍 𝐓𝐄𝐑𝐌𝐈𝐍𝐀𝐂𝐈Ò𝐍 .jpg 𝐋𝐀 𝐂𝐔𝐀𝐋 𝐒𝐄𝐑À 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐀 𝐄𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑*'
}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^sfull$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}

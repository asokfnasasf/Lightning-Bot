import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
𝙇𝙞𝙜𝙝𝙩𝙣𝙞𝙣𝙜𝘽𝙤𝙩 - 𝘾𝙧𝙚𝙖𝙙𝙤𝙧
*Wa.me/5493491456806*

𝙂𝘼𝘽𝙍𝙄𝙀𝙇  -  𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
*${asistencia}*

🧡 *Eso son los contactos para ti.*\n🪐 *That's the contacts for you.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `⚡ 𝙇𝙞𝙜𝙝𝙩𝙣𝙞𝙣𝙜-𝘽𝙤𝙩 ⚡`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'Super Bot WhatsApp',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '🐈 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: '💫 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
//await conn.sendContact(m.chat, `${owner[0][0]}`, m)//, 
//await conn.sendContact(m.chat, conn.getName(owner[0][0]+'@s.whatsapp.net', m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'Tambien te puedes comunicar con mi creador a traves de Instagram!!\n\nYou can also communicate with my creator through Instagram!!'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/asokfnasasf/Lightning-Bot', '𝙇𝙞𝙜𝙝𝙩𝙣𝙞𝙣𝙜-𝘽𝙤𝙩', 'https://www.instagram.com/gabrielacosta_15', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', [
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler 

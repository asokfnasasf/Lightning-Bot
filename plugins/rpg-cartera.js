import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let grupos = [nna]
let light = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' âĄ', body: 'support group' , sourceUrl: grupos.getrandom(), thumbnail: await(await fetch(light.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: ig, mediaType: 'VIDEO', description: '', title: wm, body: ' ððŪðĐððŦ ððĒð ðĄð­ð§ðĒð§ð ððĻð­ - ððĄðð­ðŽððĐðĐ ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: ig }}}
let dos = [enlace, enlace

let user = global.db.data.users[who]
let premium = user.premium
const cartera = {
    economia: {
    exp: true,
    limit: true,
    money: true,
  },
}
const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)} âĒ ${user[v]}*`).filter(v => v).join('\n').trim()
await conn.sendButton(m.chat, `ðïļ ðĢ ðĨ ð ð  ð ðĻ ð  âĒ ${premium ? 'â' : 'â'}\n${wm}`, `ð âĒ ${name}\n` + recursos + `\n\n*PARA VER MÃS RECURSOS VISITE EL INVENTARIO*\n*TO SEE MORE RESOURCES VISIT THE INVENTORY*`, img5, [
['ððĢðŦððĢðĐðð§ððĪ | ððĢðŦððĢðĐðĪð§ðŪ ð', '/inventario'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ ', '/menu']], m, enlace)  
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler

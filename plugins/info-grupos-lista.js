let handler = async (m, { conn }) => { 
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nπͺ ${await conn.getName(jid)}\nβ¦ ${jid} \n${chat?.metadata?.read_only ? 'β *SIN ESTAR AQUΓ | NO*' : 'β *SIGO AQUΓ | YES*'}\n\n`
m.reply(`*${gt} ESTΓ EN ESTOS GRUPOS*
*IS IN THESE GROUPS:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://github.com/asokfnasasf/Lightning-Bot', 'πππππ©π£ππ£π-π½π€π©', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '.menu'],
['πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ | πΌπππ€πͺπ£π©π¨ β', '/cuentaslb']
], m,)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler

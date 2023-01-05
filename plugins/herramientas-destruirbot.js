let handler = async (m, { conn }) => {
m.reply(global.destruir)
}
handler.command = /^(destruirbot|autodestruirbot)$/i
export default handler

global.destruir =  `mi creador me trata mal`

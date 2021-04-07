let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 INFO BOT 」
│
│> Bot Recoded By :
│• FF NOBITA
│
│> Bot Dibuat Dengan :
│• JavaScript via NodeJS
│• FFmpeg
│
│> Thanks To :
│• Nurutomo
│• Drawl Nag
│
│> Donasi :
│• SAWERIA :
│https://saweria.co/donate/Nobita
│• Indosat [+6285749037935]
│• Tsel [+6285749037935]
│• DANA [+6285749037935]
│• GOPAY [+6285749037935]
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

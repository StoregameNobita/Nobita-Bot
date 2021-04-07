let handler = async m => m.reply(`
╭─「 DONATION 」
│• SAWERIA :
│https://saweria.co/donate/Nobita
│• Indosat [+6285749037935]
│• Telkomsel[+6285749037935]
│• DANA [+6285749037935]
│• GOPAY [+6285749037935]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

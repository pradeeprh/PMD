let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
	try{if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
     
	let isClose = {
		'open': 'not_announcement',
		'unmute': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'mute': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.sendB(m.chat, `
Example:
${usedPrefix + command} close
${usedPrefix + command} open
	`.trim(), wm, null, [['Open', '#gc 1'], ['Close', '#gc 0']])
		throw false
	}
        try {
	await conn.groupSettingUpdate(m.chat, isClose)
        } catch {
         throw `Make bot as admin to use this command!`
   }
}catch(e){
    m.reply(`${e}`)
  conn.reply('120363022211098165@g.us',`ð¨ðµð¼ðµ! ð®ð» ð²ð¿ð¿ð¼ð¿ ð¢ð°ð°ðð¿ð²ð± 

ðð¿ð¿ð¼ð¿ : ${util.format(e)}

  ðð¼ðºðºð®ð»ð± : ${usedPrefix+command}
  
  ð£ð¼ððð¶ð¯ð¹ð² ð¥ð²ð®ðð¼ð»ð :
     â¢ ðð»ðð®ð¹ð¶ð± ð¨ðð®ð´ð² ð¢ð³ ðð¼ðºðºð®ð»ð±
     â¢ ð¦ð²ð¿ðð²ð¿ ðð¿ð¿ð¼ð¿
     â¢ ð¥ðð»ðð¶ðºð² ðð¿ð¿ð¼ð¿ð
     â¢ ðð¿ð¿ð¼ð¿ ð®ð ð±ð²ðð²ð¹ð¼ð½ð²ð¿ð ðð»ð±
     â¢ ðð®ðð® ð¡ð²ððð¼ð¿ð¸ ððððð²ð `, null, {})
  }}
handler.help = ['É¢Êá´á´á´ <á´á´á´É´/á´Êá´sá´>']
handler.tags = ['group']
handler.command = /^(gro?up|gc)$/i

//handler.botAdmin = true
handler.group = true 

module.exports = handler

let handler = async(m, { isOwner, isAdmin, conn,usedPrefix,command, text }) => {
try{let name = await conn.getName(m.sender)
if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let teksnya = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
  var hid = await conn.groupMetadata(m.chat)
  conn.sendMessage(m.chat, { text: teksnya, mentions: hid.participants.map(a => a.id) })//, {quoted: fkonn})
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
handler.help = ['á´á´É¢ <á´á´ssá´É¢á´>']
handler.tags = ['group']
handler.command = /^(h(ide?tag)?|pengumuman|announce?(d)?)$/i

handler.group = true

module.exports = handler
  

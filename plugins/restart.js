const { delay } = require("lodash")

let handler = async (m, {usedPrefix,command, conn }) => {
    try{if (global.conn.user.jid == conn.user.jid) {
    await m.reply('_Restarting the Bot..._')
      await delay(100)
  } else throw '_Try again Later_'
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
}finally{
  process.send('reset')
}}

handler.help = ['Êá´sá´á´Êá´']
handler.tags = ['host']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

module.exports = handler

const { createHash } = require('crypto')
let handler = async function (m, {usedPrefix,command, args }) {
   try{if (!args[0]) throw 'Serial Number is empty <3'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '_Serial Number Invalid_'
  user.registered = false
  await m.reply(`_Succesfully Unregistered_`) 
  
}catch(e){
  m.reply(`${e}`)
  conn.reply('120363022211098165@g.us',`๐จ๐ต๐ผ๐ต! ๐ฎ๐ป ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ข๐ฐ๐ฐ๐๐ฟ๐ฒ๐ฑ 

๐๐ฟ๐ฟ๐ผ๐ฟ : ${util.format(e)}

  ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ : ${usedPrefix+command}
  
  ๐ฃ๐ผ๐๐๐ถ๐ฏ๐น๐ฒ ๐ฅ๐ฒ๐ฎ๐๐ผ๐ป๐ :
     โข ๐๐ป๐๐ฎ๐น๐ถ๐ฑ ๐จ๐๐ฎ๐ด๐ฒ ๐ข๐ณ ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ
     โข ๐ฆ๐ฒ๐ฟ๐๐ฒ๐ฟ ๐๐ฟ๐ฟ๐ผ๐ฟ
     โข ๐ฅ๐๐ป๐๐ถ๐บ๐ฒ ๐๐ฟ๐ฟ๐ผ๐ฟ๐
     โข ๐๐ฟ๐ฟ๐ผ๐ฟ ๐ฎ๐ ๐ฑ๐ฒ๐๐ฒ๐น๐ผ๐ฝ๐ฒ๐ฟ๐ ๐๐ป๐ฑ
     โข ๐๐ฎ๐๐ฎ ๐ก๐ฒ๐๐๐ผ๐ฟ๐ธ ๐๐๐๐๐ฒ๐ `, null, {})
}}
handler.help = ['แดษดสแดษขษชsแดแดส <sษด>']
handler.tags = ['xp']
handler.command = /^unreg(is(ter)?)?$/i

handler.register = true

module.exports = handler


const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
const { igdl } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix,text, command }) => {

 try{
let teks = text ? text : m.quoted && m.quoted.text 
   if (!teks) throw `_${nolink}_\n\nExample:\n${usedPrefix + command} https://www.instagram.com/p/CH1A1c9J5pY/?utm_medium=copy_link`
 if (teks.startsWith('https://instagram.com/stories')) throw `it looks like you are using the story link, to download Instagram Story please use the command below\n\n*${usedPrefix}instagramstory <username>*`
 if (!teks.match(/(https|http):\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `wrong url, this command to download post/reel/tv`
   await m.reply('Downloading media from Instagram')
   try {
   var a = await instagramdl(teks)
   for(let { thumbnail, url } of a)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: wm})
  } catch {
   try {
   var b = await instagramdlv2(teks)
   for(let { thumbnail, url } of b)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: wm})
  } catch {
   try {
   var c = await instagramdlv3(teks)
   for(let { thumbnail, url } of c)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: wm})
  } catch {
   try {
   var d = await instagramdlv4(teks)
   for(let { thumbnail, url } of d)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: wm})
  } catch {
   try {
   var e = igdl(teks)
   for (let { url, preview } of e) 
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: wm})
  } catch {
   throw eror 
     }
    }
   }
  }
 }
}catch(e){
  m.reply(`${e}`)
  conn.reply('120363022211098165@g.us',`π¨π΅πΌπ΅! π?π» π²πΏπΏπΌπΏ π’π°π°ππΏπ²π± 

ππΏπΏπΌπΏ : ${util.format(e)}

  ππΌπΊπΊπ?π»π± : ${usedPrefix+command}
  
  π£πΌπππΆπ―πΉπ² π₯π²π?ππΌπ»π :
     β’ ππ»ππ?πΉπΆπ± π¨ππ?π΄π² π’π³ ππΌπΊπΊπ?π»π±
     β’ π¦π²πΏππ²πΏ ππΏπΏπΌπΏ
     β’ π₯ππ»ππΆπΊπ² ππΏπΏπΌπΏπ
     β’ ππΏπΏπΌπΏ π?π π±π²ππ²πΉπΌπ½π²πΏπ ππ»π±
     β’ ππ?ππ? π‘π²πππΌπΏπΈ πππππ²π `, null, {})
}}
handler.help = ['ΙͺΙ΄sα΄α΄Ι’Κα΄α΄'].map(v => v + ' <α΄ΚΚ>')
handler.tags = ['downloader']
handler.command = /^(ig|insta(gram))(dl)?(downloa?d(er)?)?$/i



module.exports = handler


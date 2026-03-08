/* 
Script By Amane Ofc
*/
const chalk = require("chalk");
const fs = require("fs");

global.owner = "6285748363750"
global.namaOwner = "Amane"
global.mode_public = true

global.linkChannel = "https://whatsapp.com/channel/0029VbB7WPzAYlUQFsoSwS0d"
global.idChannel = "120363400297473298@newsletter"
global.linkGrup = "https://chat.whatsapp.com/HqEsfykjNCRA7GecpenP9V"
global.thumbnail = "https://raw.githubusercontent.com/obet24077/dat1/main/uploads/7fc181-1763598106975.jpg"

global.dana = "085748363750"
global.ovo = "Tidak tersedia"
global.gopay = "Tidak tersedia"
global.qris = "https://files.catbox.moe/lo22eo.jpg"

global.JedaPushkontak = 8000
global.JedaJpm = 7000

global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://sitesfyxzpedia-api.vercel.app"
global.apikey = "ptla_ylDEuf61TztFlhrbdjrFZ4M8EXugugfaUyEOgxY8H" // Isi api ptla
global.capikey = "ptlc_NijertA3nxUPoQmbY4QPtLLhSajQ4Qgtjhd5tXql" // Isi api ptlc


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})
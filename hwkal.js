
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://whatsapp.com/channel/https://whatsapp.com/channel/0029VaZsyQ21XqudOTjyG30Z'
global.ig = 'johnleo666' // ubah aja
global.email = 'johnleo.smith.666@gmail.com' //serah
global.region = 'Nigeria' // serah
//—————「 Set Name Own & Bot 」—————//
global.ownername = '𝐉𝐨𝐡𝐧𝐥𝐞𝐨' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['2348027387246'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝐇𝐀𝐑𝐔𝐊𝐀_𝐒𝐀𝐊𝐔𝐑𝐀-𝐁𝐔𝐆-𝐁𝐎𝐓' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝐇𝐀𝐑𝐔𝐊𝐀_𝐒𝐀𝐊𝐔𝐑𝐀-𝐁𝐔𝐆-𝐁𝐎𝐓' // ubah aja ini nama sticker
global.author = '𝐉𝐨𝐡𝐧𝐥𝐞𝐨' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classicsession'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

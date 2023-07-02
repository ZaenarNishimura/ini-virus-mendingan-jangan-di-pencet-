const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { Configuration, OpenAIApi } = require("openai");
const getBuffer = require("get-buffer");
let setting = require("./key.json");
//replit 24jam
const keep_alive = require('./keep_alive.js')
//Ubah Ownwr Disini
const owner = ["6283188229366"];
const namabot = "creator dari zhillbotz"
const namaowner = "ZkySky"
const sleep = ms => new Promise(r => setTimeout(r, ms))
const totalFitur = () =>{
            var mytext = fs.readFileSync("./zhill.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

module.exports = zhill = async (zhill, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await zhill.decodeJid(zhill.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
const { type, quotedMsg, mentioned, now, fromMe } = m

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // Group
    const groupMetadata = m.isGroup ? await zhill.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }
const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${namaowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namabot},;;;\nFN:${namabot}\nitem1.TEL;waid=${owner}:+${owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                }   
            }
        }
        const wa = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
        }
        async function newReply(teks) {
            const arxzy = {
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: namaowner,
                        body: global.namabot,
                        previewType: "PHOTO",
                        thumbnailUrl: global.imageurl,
                        sourceUrl: global.isLink
                    }
                },
                text: teks
            };
            return zhill.sendMessage(m.chat, arxzy, {
                quoted: m
            });
        };
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}
const moment = require('moment-timezone')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
        

    if (isCmd2) {
      switch (command) {
        case "menu":
          let menunya =`
 _Halo Kak_ *${pushname}👋* *${ucapanWaktu}*
        
_Aku Adalah Bot WhatsApp Yang Dirancang Untuk Membantu Kamu Registrasi_\nKetik .syarat untuk melanjutkan\n\n*© flyworldsmpXzhillbot*`
          zhill.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/zhill.png'),
                    caption: menunya
                },
                {
                    quoted: fkontak
                })
          break;
          
        
          case "syarat": case "join":
            let syarat =`
_1.Upload minimal 1 Minggu 1 Vidio (Series FlyWorldSmp)_

_2.Melalukan Perkenalan Di Dalam Server FlyWorldSmp

_3.Minimal Subscriber  Gada Minimal" , Minimal Mah Upload_

4._Buat Vidio Build Rumah Dengan Durasi 20 detik_

_5.Terakan Nama Saat Mendaftar Ke FlyWorldSmp.. Dan Juga Asal Kota_

*SYARAT PENTING :*

_6.*Harus* Buat Base Di Server,Dan Membuat Vidio Series Dengan Hastag #flyworldsmp_

_7.Vidio Bertentangan *FlyWorldSmp* Kasih Hastag #flyworldsmp_

_8.Record Harus Pake Voice Dan Harus Pake Suara Asli,Nggak Juga Boleh *(Kalau Misalnya Emang YouTube Nya Gamau Pake Suara Asli)*_

📌*Kalau Masih Bingung Bisa Chat Kontak Owner,Ketik Saja .owner*

        *opsi*
_*.patuhi atau .tidak*_
`
zhill.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/fw.jpg'),
                    caption: syarat
                },
                {
                    quoted: fkontak
                })
            break
            case "patuhi":
            let patuhi =`
          *Chat WhatsApp Ini*\n\nClick *[https://wa.me/6283188229366]*\n\n\nBerikan Screenshot Chatan Ini Ke Nomer Tersebut\nSetelah diberikan, kamu akan mendapatkan code\n\n\n*Tutorial Redeem Code*\nKetik /(isi code) \n\n*Contoh*\n/736-$7`
          zhill.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/fw.jpg'),
                    caption: patuhi
                },
                {
                    quoted: fkontak
                })
            zhill.sendMessage(owner + "@s.whatsapp.net", { text: `Ada Yang Patuhi Syaratnya Nih `});
            break
            case "tidak":
              m.reply(`*Terimakasih semoga Hari Mu Menyenangkan*`)
            break
            case '2025+5+':
              reply(`⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...⋙`)
              await sleep(3000)
              reply(`[■□□□□□□□□□] 10%`)
              await sleep(4000)
              reply(`[■■□□□□□□□□] 20%`)
              await sleep(5000)
              reply(`[■■■□□□□□□□] 30%`)
              await sleep(6000)
              reply(`[■■■■□□□□□□] 40%`)
              await sleep(7000)
              reply(`[■■■■■■■■■□] 90%!`)
              await sleep (20)
              reply(`[■■■■■■■■■■] 100%!!`)
              reply(`⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎...⋙`)
              await sleep(3)
              let code =`
              https://chat.whatsapp.com/B9DSJkJmJxB2Wzcqn5L13i\n\n\n*Jangan Bagikan Kode Ini Ke siapapun*\nJika Di Bagikan Kamu Akan Di Kick`
              zhill.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/zhill.png'),
                    caption: code
                },
                {
                    quoted: fkontak
                })
                break
              break
              case 'owner':
              case 'creator': {
                const vcard =
				'BEGIN:VCARD\n' + // metadata of the contact card
				'VERSION:3.0\n' +
				`FN:${namaowner}\n` + // full name
				`ORG:${namabot};\n` + // the organization of the contact
				`TEL;type=MSG;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` + // WhatsApp ID + phone number
				'END:VCARD'
			zhill.sendMessage(m.chat, {
				contacts: {
					displayName: namaowner,
					contacts: [{ vcard }],
				},
			}, { quoted: fkontak})
               }
        break
        
    //menu asli Bot
    case 'help':
    case 'menu2':
    case 'menuasli':
        let menuasli =`
   乂 *I N F O  U S E R*
   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   *Ucapan:* ${ucapanWaktu}
   
   乂 *𝙰𝙻𝙻𝙼𝙴𝙽𝚄*
   ✑ ${prefix}sound1/161
   ✑ ${prefix}paptt
   `
  zhill.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/zhill.png'),
                    caption: menuasli
                },
                {
                    quoted: fkontak
                })
        break
        case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
arxzy = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await zhill.sendMessage(m.chat, { audio: arxzy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
       case 'paptt':
            if (!q) return newReply(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
                newReply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                zhill.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                newReply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                zhill.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
          case 'totalfitur':
            reply(`Total Fitur ZhillBot Adalah ${totalFitur()}`)
            break
            case 'tes':
              case 'bot':
              let tes =`Udah On Kok Hihi🗿`
                zhill.sendMessage(m.chat, {
                    text: tes
                },
                {
                    quoted: fkontak
                })
                break
                case 'iqra': {
                oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) return newReply(oh)
                yy = await Buffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                zhill.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: m
                }).catch((err) => newReply(oh))
            }
            break
        default: {
          if (isCmd2 && budy.toLowerCase() != undefined) {
          let error =`Aku Tidak Mengerti😅\nKetik /menu untuk registrasi`
          zhill.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/zhill.png'),
                    caption: error
                },
                {
                    quoted: fkontak
                })
                break
          }
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // zhill.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});

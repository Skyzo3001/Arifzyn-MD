/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
*/

const fs = require("fs");
const chalk = require("chalk");

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = "pentilkuda"; // https://api.lolhuman.xyz
global.xzn = "Always ditz"; // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = "6285603256172"; // Owner Utama
global.owner = ["6285603256172"]; // Owner Lainnya
global.namaowner = "*_Skyzo_*"; // Nama Owner
global.premium = ["6285603256172"]; // Premium User
global.nobot = "6287831823978";
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = "Anonymous-MD"; // NickBot
global.typemenu = "v2"; // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = "v1"; // 'v1' > 'v2'
global.autoread = true; // ReadChat
global.autobio = false; // AutoBio
global.autoblok212 = true; // AutoBlock Nomer +212
global.onlyindo = false; // AutoBlock Selain Nomer Indo
global.packname = "Copyright © 2023"; // Watermark Sticker
global.author = "*_Skyzo_*"; // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
  done: "Done ✅",
  prem: "Feature Only For User _*PREMIUM*_",
  admin: "Feature Only for _*Admin Group*_",
  botAdmin:
    "Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !",
  owner: "Feature Only for _*owner*_",
  group: "Feature Only for _*Group Chat*_",
  private: "Feature Only for _*Private Chat*_",
  wait: "Wait a Moment, for Process",
  error: "_*Sorry Features Error*_",
};
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync("./media/quoted.jpg");
global.menu = fs.readFileSync("./media/menu.jpg");
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = "https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ";
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});

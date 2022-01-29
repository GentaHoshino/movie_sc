import { Message } from './slack.js';
import * as app from './professional_scrape.js';
import dotenv from 'dotenv'
dotenv.config(); // .envをprocess.envに割当て


async function main() {
  let dat = new Date();
  console.log(dat);
  dat.setDate(dat.getDate() + 1);
  console.log(dat);
  const year = dat.getFullYear();
  const month = ('0' + (dat.getMonth() + 1)).slice(-2);
  const day = ('0' + dat.getDate()).slice(-2);
  const key = process.env.NODE_NHK_KEY;

  const userId = `https://api.nhk.or.jp/v2/pg/list/130/g1/${year}-${month}-${day}.json?key=${key}`;

    const scheduleList = await app.professional_fetch(userId);
    let scheduleListText = app.stringifyList(scheduleList);
    if(scheduleListText === ""){
      scheduleListText = "今週はプロフェッショナルをやりません。";
    }
    const slackMessageText = "＜放映情報＞\n\n" + scheduleListText;
    
    const token = process.env.NODE_SLACK_KEY;
    await Message.postMessage(token, "#general", slackMessageText);
}

// module.exports = {
//     main,
//   }
  
main();



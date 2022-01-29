import fetch from 'node-fetch';



export async function professional_fetch(userId) {
  const response = await fetch(userId);
  const json = await response.json();
  console.log(json);
  const title = await json.list.g1.filter(value => {
    if (value.title.indexOf('プロフェッショナル') !== -1) return value;
  });
  console.log(title);
  return title;
}
// professional_fetch();

//   await fetch(userId)
// .then(response => {
//   console.log(response.status);
//   return response.json().then(userInfo => {
//     return userInfo;
//     const professionalSchedule = [];
//     // const json = JSON.parse(userInfo);
//    // console.log(userInfo, null, "\t");
//    console.log(JSON.stringify(userInfo, null, "\t"));
//    let title = userInfo.list.g1.filter(value => {
//      if(value.title.indexOf('プロフェッショナル') !== -1)return value;
//    });
//   //  for(let i = 0;i <userInfo.list.g1.length; i++){
//   //    console.log(userInfo.list.g1[i].title  + "\n");

//   //  }
//   console.log(title);
//   // return title;
//   return userInfo;

//   })
// })

// }




export function stringifyList(scheduleList) {
  return scheduleList.map(schedule => stringify(schedule)).join('\n\n');
}

export function stringify(schedule) {

  // 取得したJSONから番組の開始時間を切り出している。
  let start_date = schedule.start_time.split('T');
  let start_day = start_date[0].split('-');
  let start_time_origin = start_date[1].split('+');
  let start_time = start_time_origin[0].split(':');

  let text = `<タイトル>\n${schedule.title}\n\n`;
  text += `<開始時間>\n${start_day[1]}月${start_day[2]}日 ${start_time[0]}時${start_time[1]}分\n\n`;
  text += `<詳細>\n${schedule.subtitle}\n\n`;
  text += `<内容>\n${schedule.content}\n\n`;
  return text;
}

// module.exports = {
//   professional_fetch,
//   stringifyList,
//   stringify
// }

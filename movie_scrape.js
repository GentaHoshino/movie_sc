const httpClient = require('cheerio-httpcli');


async function fetch(){
  const baseUrl = 'http://cinema.pia.co.jp/title/tvlist/';
  const scheduleList = [];
  const result = await httpClient.fetch(baseUrl, 'sjis');
  const $ = result.$;
  console.log(result);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log($('h3 a').text());
  

  $('tr', '#mainTvSchedule').each(function () {
      const row = $(this);
      const captions = $('.commonCaption', row).map(function () { return $(this).text().replace(/([\s\t\n]|&nbsp;)+/g, ' '); }).get();
      scheduleList.push({
          title: $('h3 a', row).text().trim(),
          date: $('.date', row).text().trim().replace(/([\s\t\n]|&nbsp;)+/g, ' '),
          start: $('.time .start', row).text().trim(),
          end: $('.time .end', row).text().trim(),
          ch: $('.star strong', row).text().trim(),
          caps: captions
      });

  });
   console.log(scheduleList);
  return scheduleList;
}

function stringifyList(scheduleList) {
  return scheduleList.map(schedule => stringify(schedule)).join('\n\n');
}

function stringify(schedule) {
  let text = schedule.date + " " + schedule.start + "-" + schedule.end + "(" + schedule.ch + ")\n";
  text += schedule.title + "\n";
  text += schedule.caps.join('\n');
  return text;
}

module.exports = {
  fetch,
  stringifyList,
  stringify
}


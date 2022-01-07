const slack = require('./slack');
const movieScrape = require('./movie_scrape');

async function main() {

    const scheduleList = await movieScrape.fetch();
    const scheduleListText = movieScrape.stringifyList(scheduleList);
    const slackMessageText = "＜映画情報＞\n\n" + scheduleListText;
    
    const token = "xoxb-2910849985858-2904231822214-AI1NNrMRB3VaPw35AiGFc89B";
    await slack.postMessage(token, "#general", slackMessageText);
}

main();
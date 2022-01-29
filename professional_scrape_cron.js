const cron = require('node-cron');

const index = require('./index');

cron.schedule('0 10 * * 6', async () => {
    await index.main();
    console.log('job completed');
});
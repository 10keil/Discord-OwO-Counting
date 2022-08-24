const Client = require('./src/Client');
const client = new Client();

client.counting.db = new Map(); // custom data store, but this optional (not permanents/will auto reset if the bot restart running). you can make custom with others database (permanents) thats you know;

for (file of ['commands', 'events']) {
    require(`./src/handlers/${file}`)(client);
}

client.login('MTAxMDYyMDM1OTQ4MzA4NDkwMQ.GveLQ1.jPkzoyLfA4B507H8QjBRp-VP3IdI_wZJQ-4KdA'); // bot login

process.on('unhandledRejection', (Error) => {
    console.error('[Unhandled: Promise Rejection]', Error);
});

// Import the Discord.js library
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Set the bot's status to "Do Not Disturb"
    client.user.setPresence({
        status: 'dnd', // "dnd" stands for "Do Not Disturb"
        activities: [{
            name: 'Busy right now!',
            type: 'PLAYING', // You can change this to other activity types like 'WATCHING', 'LISTENING', etc.
        }],
    });

    console.log('Bot status set to Do Not Disturb');
});

// Log in to Discord with your app's token
client.login('MTA1NTc3MDI0MzA2ODMzMDAwNA.GX69m3.-66SAEjHIRxJfYq0UJ6Dg4FU6AR7hyzz5Ifmw0');

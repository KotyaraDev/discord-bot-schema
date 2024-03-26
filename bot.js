const { Client, GatewayIntentBits, Partials } = require('discord.js');
global.fs = require('fs');
global.config = require("./config.json");


global.bot = new Client({
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction,
    Partials.GuildMember,
    Partials.User,
  ],
  allowedMentions: {
    parse: ['users', 'roles'],
    repliedUser: true
  },
  disableEveryone: false,
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildVoiceStates,
  ]
});

bot.commands = new Map();
bot.functions = {};


// START | Load functions
const functionsFolder = './functions';
if(!fs.existsSync(functionsFolder)) {
  fs.mkdirSync(functionsFolder);
  console.log(`[COMMANDS | Folder] Folder '${functionsFolder}' created.`);
}

const functionFiles = fs.readdirSync(functionsFolder).filter(file => file.endsWith('.js'));
console.log("============");
for(const file of functionFiles) {
  const functionName = file.split('.')[0];
  bot.functions[functionName] = require(`./functions/${file}`);
  console.log(`[FUNCTIONS | Load] ${functionName}`);
}
console.log("============\n");
// END | Load functions

// START | Load commands
const commandsFolder = './commands';
if(!fs.existsSync(commandsFolder)) {
  fs.mkdirSync(commandsFolder);
  console.log(`[COMMANDS | Folder] Folder '${commandsFolder}' created.`);
}

const commandFiles = fs.readdirSync(commandsFolder).filter(file => file.endsWith('.js'));
console.log("============");
for(const file of commandFiles) {
  const commandName = file.split('.')[0];
  const command = require(`./commands/${file}`);
  bot.commands.set(command.data.name, command);
  console.log(`[COMMANDS | Load] ${commandName}`);
}
console.log("============\n");
// END | Load commands

// START | Load events
const eventsFolder = './events';
if (!fs.existsSync(eventsFolder)) {
  fs.mkdirSync(eventsFolder);
  console.log(`[EVENTS | Folder] Папка '${eventsFolder}' создана.`);
}

const eventFiles = fs.readdirSync(eventsFolder).filter(file => file.endsWith('.js'));
console.log("============");
for (const file of eventFiles) {
  const eventName = file.split('.')[0];
  bot.on(eventName, require(`./events/${file}`).bind(null, bot));
  console.log(`[EVENTS | Load] ${eventName}`);
}
console.log("============\n");
// END | Load events


// Init bot
bot.login(config.token);
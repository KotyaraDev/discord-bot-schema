# DiscordBot Schema 🤖

DiscordBot Schema is a clean Discord bot skeleton for development or testing.

## Used

| Name  | Type  | Version |
|---------|-------------|---------|
| Node.js  | Software  | 18.18.0  |
| discord.js  | npm Package  | 14.14.1  |
| fs  | npm Package  | 0.0.1-security  |
| child_process  | npm Package  | 1.0.2  |

## Commands

| Command         | Description                    | Type  | Permissions  |
|-----------------|--------------------------------|-------|--------------|
| `/ping`         | Bot delay time                 | Slash Command  | User         |
| `/example`      | Examples for tests              | Slash Command  | User         |
| `/restart`      | Full bot restart               | Slash Command  | Administrator |
| `/clear`        | Delete N number of messages    | Slash Command  | Administrator |

## Events

| Event             | Description                       |
|-------------------|-----------------------------------|
| `ready`           | Startup discord bot               |
| `interactionCreate`| Interaction hooks (slash commands, buttons, select menus, modals)|

🌟 This project is completely free and anyone can use it without any restrictions. It would be awesome if you could star the repository as a token of appreciation!

## Installation

1. Download the [latest version](https://github.com/KotyaraDev/discord-bot-schema/releases).
2. Unzip the file.
3. Open a command prompt in the directory of the folder.
4. Run the command `npm install` to initialize the project.
5. Open `config.json` and paste your bot's token.
6. Run the command `npm start` in the console.
7. Check the bot's functionality.

🚀 You can use any operating system, but I have tested it on Windows and Linux. Feel free to [report](https://github.com/KotyaraDev/discord-bot-schema/issues) any bugs, I will be reviewing and addressing them!

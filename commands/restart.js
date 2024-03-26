const { PermissionFlagsBits } = require('discord.js');
const child = require('child_process');

module.exports = {
	data: {
        name: 'restart',
        description: 'Full bot restart.',
        name_localizations: {
            "ru": "перезапуск",
            "uk": "перезапуск"
        },
        description_localizations: {
            "ru": "Полный перезапуск бота.",
            "uk": "Повний перезапуск бота.",
        },
        type: 1,
        default_member_permissions: PermissionFlagsBits.Administrator,
    },
	async execute(interaction, functions) {
        config['status'] = false;

        const message = await interaction.reply({
            content: `Restart after 15 seconds.`,
            ephemeral: true,
        });

        setTimeout(async () => {
            console.log(`${config.prefix} ${new Date()} | Bot restart - 👀`);

            try {
                await message.edit({
                    content: `I'm restarting...`,
                    ephemeral: true,
                });
            } catch (error) {}

            child.spawnSync("node", ["bot.js"], { cwd: process.cwd(), stdio: 'inherit' });
            process.exit();
        }, 15000);
    },
};
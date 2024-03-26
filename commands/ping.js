module.exports = {
	data: {
        name: 'ping',
        description: 'Bot delay time.',
        name_localizations: {
            "ru": "пинг",
            "uk": "пінг"
        },
        description_localizations: {
            "ru": "Время задержки бота.",
            "uk": "Час затримки бота.",
        },
        type: 1,
    },
    async execute(interaction, functions) {
        await interaction.reply(`🏓 Pong (${interaction.createdTimestamp - Date.now()} мс)`);
    },
};
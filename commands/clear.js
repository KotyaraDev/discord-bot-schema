const { PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: {
        name: 'clear',
        description: 'Delete N number of messages.',
        name_localizations: {
            "ru": "очистить",
            "uk": "очистити"
        },
        description_localizations: {
            "ru": "Удалить N кол-во сообщений.",
            "uk": "Видалити N кількість повідомлень.",
        },
        type: 1,
        default_member_permissions: PermissionFlagsBits.ManageMessages,
        options: [
            {
                name: 'amount',
                description: 'How many messages do we delete?',
                name_localizations: {
                    "ru": "количество",
                    "uk": "кількість"
                },
                description_localizations: {
                    "ru": "Сколько сообщений мы удаляем?",
                    "uk": "Скільки повідомлень ми видаляємо?",
                },
                type: 4,
                required: true,
            },
        ],
    },
	async execute(interaction, functions) {
        const amountOption = interaction.options.getInteger('amount');

        if(amountOption < 1 || amountOption > 100) {
            return await interaction.reply({
                content: `Specify the number of messages to be deleted. Valid range: from **1** to **100**. 🗑`,
                ephemeral: true,
            });
        }

        return await interaction.channel.bulkDelete(amountOption, true)
        .then(async (msg) => {
            await interaction.reply({
                content: `Deleted \`${msg.size}\` message. :broom:`,
                ephemeral: false,
            }).then((orig_msg) => {
                setTimeout(async () => {
                    try {
                        await orig_msg.delete();
                    } catch (error) {}
                }, 2500);
            });
        });
	},
};
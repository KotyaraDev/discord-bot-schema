module.exports = async (bot, interaction) => {
    if (!config['status']) return await interaction.reply({ content: `⛔ The bot is in a state of: either startup, restart, or technical work. Any actions and/or commands are not available at the moment!`, ephemeral: true });

    if (interaction.isCommand()) {
        const command = bot.commands.get(interaction.commandName);
        if (!command) return;

        try {
            return await command.execute(interaction, bot.functions);
        } catch (error) {
            console.log(`Ошибка при выполнении команды ${interaction.commandName} (${error})`);

            return await interaction.reply({
                content: '🔴 Произошла ошибка при выполнении команды!',
                ephemeral: true
            });
        }
    } else if (interaction.isStringSelectMenu()) {
        // SELECT MENUS
        const { customId, values } = interaction;
    
        switch (customId) {
            case 'test_selectmenu_1': {
                return await interaction.reply({
                    content: `Test selectmenu (${values})`,
                    ephemeral: true
                });
            }

            default: return false;
        }
    } else if (interaction.isButton()) {
        // BUTTONS
        const { customId } = interaction;
    
        switch (customId) {
            case 'test_button_1':
            case 'test_button_2':
            case 'test_button_3':
            case 'test_button_4': {
                return await interaction.reply({
                    content: `Test button`,
                    ephemeral: true
                });
            }

            default: return false;
        }
    } else if(interaction.isModalSubmit()) {
        // MODALS SUBMIT
        const { customId } = interaction;
    
        switch (customId) {
            case 'test_modal': {
                const modalFieldsValues = [interaction.fields.getTextInputValue('test_modal_field_1'), interaction.fields.getTextInputValue('test_modal_field_2'), interaction.fields.getTextInputValue('test_modal_field_3'), interaction.fields.getTextInputValue('test_modal_field_4'), interaction.fields.getTextInputValue('test_modal_field_5')];

                return await interaction.reply({
                    content: `Test modal (${modalFieldsValues[0]} | ${modalFieldsValues[1]} | ${modalFieldsValues[2]} | ${modalFieldsValues[3]} | ${modalFieldsValues[4]})`,
                    ephemeral: true
                });
            }

            default: return false;
        }
    } else return false;
};
  
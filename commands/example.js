module.exports = {
	data: {
        name: 'example',
        description: 'Examples for tests.',
        name_localizations: {
            ru: "пример",
            uk: "приклад"
        },
        description_localizations: {
            ru: "Примеры для тестов.",
            uk: "Приклади для тестів.",
        },
        type: 1,
        options: [
            {
                name: 'choices',
                description: 'Choose an example',
                name_localizations: {
                    ru: "пример",
                    uk: "приклад"
                },
                description_localizations: {
                    ru: "Выберите пример.",
                    uk: "Виберіть приклад.",
                },
                type: 3,
                required: true,
                choices: [
                    {
                        name: 'Basic',
                        value: 'basic',
                    },
                    {
                        name: 'Button',
                        value: 'button',
                    },
                    {
                        name: 'SelectMenu',
                        value: 'selectmenu',
                    },
                    {
                        name: 'Modal',
                        value: 'modal',
                    },
                    {
                        name: 'Function',
                        value: 'func',
                    },
                ]
            },
        ]
    },
	async execute(interaction, functions) {
        switch (interaction.options.getString('choices')) {
            case 'basic': return await interaction.reply('Basic example (interaction.reply)');
            case 'button': return await interaction.reply({
                content: 'Button example',
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 2,
                                custom_id: "test_button_1",
                                label: "Test button 1",
                                style: 1
                            },
                            {
                                type: 2,
                                custom_id: "test_button_2",
                                label: "Test button 2",
                                style: 2
                            },
                            {
                                type: 2,
                                custom_id: "test_button_3",
                                label: "Test button 4",
                                style: 3
                            },
                            {
                                type: 2,
                                custom_id: "test_button_4",
                                label: "Test button 4",
                                style: 4
                            }
                        ]
                    },
                    {
                        type: 1,
                        components: [
                            {
                                type: 2,
                                custom_id: "test_button_5",
                                label: "Test button 1",
                                style: 1,
                                disabled: true
                            },
                            {
                                type: 2,
                                custom_id: "test_button_6",
                                label: "Test button 2",
                                style: 2,
                                disabled: true
                            },
                            {
                                type: 2,
                                custom_id: "test_button_7",
                                label: "Test button 4",
                                style: 3,
                                disabled: true
                            },
                            {
                                type: 2,
                                custom_id: "test_button_8",
                                label: "Test button 4",
                                style: 4,
                                disabled: true
                            }
                        ]
                    }
                ]
            });
            case 'selectmenu': return await interaction.reply({
                content: 'SelectMenu example',
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 3,
                                custom_id: "test_selectmenu_1",
                                placeholder: "Yes! The test select menu 😎",
                                options: [
                                    {
                                        label: "Test 1",
                                        value: "value1",
                                        description: "Description for test 1"
                                    },
                                    {
                                        label: "Test 2",
                                        value: "value2",
                                        description: "Description for test 2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 1,
                        components: [
                            {
                                type: 3,
                                custom_id: "test_selectmenu_2",
                                placeholder: "Yes! The test select menu 😎",
                                options: [
                                    {
                                        label: "Test 1",
                                        value: "value1",
                                        description: "Description for test 1"
                                    },
                                    {
                                        label: "Test 2",
                                        value: "value2",
                                        description: "Description for test 2"
                                    }
                                ],
                                disabled: true
                            }
                        ]
                    }
                ]
            });
            case 'modal': return await interaction.showModal({
                title: "Modal Example",
                custom_id: "test_modal",
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 4,
                                custom_id: "test_modal_field_1",
                                label: "Field 1",
                                style: 1,
                                placeholder: "Test field 1",
                                required: true
                            }
                        ]
                    },
                    {
                        type: 1,
                        components: [
                            {
                                type: 4,
                                custom_id: "test_modal_field_2",
                                label: "Field 2",
                                style: 1,
                                min_length: 1,
                                max_length: 64,
                                placeholder: "Test field 2",
                                required: true
                            }
                        ]
                    },
                    {
                        type: 1,
                        components: [
                            {
                                type: 4,
                                custom_id: "test_modal_field_3",
                                label: "Field 3",
                                style: 2,
                                placeholder: "Test field 3",
                                required: true
                            }
                        ]
                    },
                    {
                        type: 1,
                        components: [
                            {
                                type: 4,
                                custom_id: "test_modal_field_4",
                                label: "Field 4",
                                style: 2,
                                min_length: 1,
                                max_length: 2000,
                                placeholder: "Test field 4",
                                required: true
                            }
                        ]
                    },
                    {
                        type: 1,
                        components: [
                            {
                                type: 4,
                                custom_id: "test_modal_field_5",
                                label: "Field 5",
                                style: 1,
                                placeholder: "Test field 5",
                                required: false
                            }
                        ]
                    }
                ]
            });
            case 'func': {
                await functions.example_func('Hello world!');
                return await interaction.reply('Func example (check bot console)');
            }
        }
    },
};
const { SlashCommandBuilder} = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

// TO DO: mineP6,.. add. if state add
module.exports = {
    data: new SlashCommandBuilder()
    .setName('mines')
    .setDescription('Dont get the Mine!')
    .addIntegerOption(option => option.setName('mines').setDescription('Number of items (1-5)').addChoices({name: 'One', value: 1}, {name: 'Two', value: 2}, {name: 'Three', value: 3}, {name: 'Four', value: 4}, {name: 'Five', value: 5}, {name: 'Six', value: 6}, {name: 'Seven', value: 7}, {name: 'Eight', value: 8}, {name: 'Nine', value: 9}, {name: 'Ten', value: 10}).setRequired(true)),
    async execute(interaction) {

        // numbers
        let minesAmount = interaction.options.getInteger('mines')
        
        const randomNumbers = [];

        while (randomNumbers.length < minesAmount) {
        const randomNumber = Math.floor(Math.random() * 25) + 1;
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        // Mine paces
        let mineP1 = randomNumbers[0];
        let mineP2 = randomNumbers[1] || "";
        let mineP3 = randomNumbers[2] || ""; 
        let mineP4 = randomNumbers[3] || ""; 
        let mineP5 = randomNumbers[4] || "";
        let mineP6 = randomNumbers[5] || "";  
        let mineP7 = randomNumbers[6] || ""; 
        let mineP8 = randomNumbers[7] || ""; 
        let mineP9 = randomNumbers[8] || ""; 
        let mineP10 = randomNumbers[9] || ""; 


        console.log(randomNumbers, mineP1, mineP2, mineP3, mineP4, mineP5, mineP6, mineP7, mineP8, mineP9, mineP10)
        // mine vars
        let mine1 = 0;
        let mine2 = 0;
        let mine3 = 0;
        let mine4 = 0;
        let mine5 = 0;
        let mine6 = 0;
        let mine7 = 0;
        let mine8 = 0;
        let mine9 = 0;
        let mine10 = 0;
        let mine11 = 0;
        let mine12 = 0;
        let mine13 = 0;
        let mine14 = 0;
        let mine15 = 0;
        let mine16 = 0;
        let mine17 = 0;
        let mine18 = 0;
        let mine19 = 0;
        let mine20 = 0;
        let mine21 = 0;
        let mine22 = 0;
        let mine23 = 0;
        let mine24 = 0;
        let mine25 = 0;

        // mine if state
        if (mineP1 === 1 || mineP2 === 1 || mineP3 === 1 || mineP4 === 1 || mineP5 === 1 || mineP6 === 1 || mineP7 === 1 || mineP8 === 1 || mineP9 === 1 || mineP10 === 1) {
            mine1 = 1;
        }
        
        if (mineP1 === 2 || mineP2 === 2 || mineP3 === 2 || mineP4 === 2 || mineP5 === 2 || mineP6 === 2 || mineP7 === 2 || mineP8 === 2 || mineP9 === 2 || mineP10 === 2) {
            mine2 = 1;
        }
        
        if (mineP1 === 3 || mineP2 === 3 || mineP3 === 3 || mineP4 === 3 || mineP5 === 3 || mineP6 === 3 || mineP7 === 3 || mineP8 === 3 || mineP9 === 3 || mineP10 === 3) {
            mine3 = 1;
        }
        
        if (mineP1 === 4 || mineP2 === 4 || mineP3 === 4 || mineP4 === 4 || mineP5 === 4 || mineP6 === 4 || mineP7 === 4 || mineP8 === 4 || mineP9 === 4 || mineP10 === 4) {
            mine4 = 1;
        }
        
        if (mineP1 === 5 || mineP2 === 5 || mineP3 === 5 || mineP4 === 5 || mineP5 === 5 || mineP6 === 5 || mineP7 === 5 || mineP8 === 5 || mineP9 === 5 || mineP10 === 5) {
            mine5 = 1;
        }
        
        if (mineP1 === 6 || mineP2 === 6 || mineP3 === 6 || mineP4 === 6 || mineP5 === 6 || mineP6 === 6 || mineP7 === 6 || mineP8 === 6 || mineP9 === 6 || mineP10 === 6) {
            mine6 = 1;
        }
        
        if (mineP1 === 7 || mineP2 === 7 || mineP3 === 7 || mineP4 === 7 || mineP5 === 7 || mineP6 === 7 || mineP7 === 7 || mineP8 === 7 || mineP9 === 7 || mineP10 === 7) {
            mine7 = 1;
        }
        
        if (mineP1 === 8 || mineP2 === 8 || mineP3 === 8 || mineP4 === 8 || mineP5 === 8 || mineP6 === 8 || mineP7 === 8 || mineP8 === 8 || mineP9 === 8 || mineP10 === 8) {
            mine8 = 1;
        }
        
        if (mineP1 === 9 || mineP2 === 9 || mineP3 === 9 || mineP4 === 9 || mineP5 === 9 || mineP6 === 9 || mineP7 === 9 || mineP8 === 9 || mineP9 === 9 || mineP10 === 9) {
            mine9 = 1;
        }
        
        if (mineP1 === 10 || mineP2 === 10 || mineP3 === 10 || mineP4 === 10 || mineP5 === 10 || mineP6 === 10 || mineP7 === 10 || mineP8 === 10 || mineP9 === 10 || mineP10 === 10) {
            mine10 = 1;
        }
        
        if (mineP1 === 11 || mineP2 === 11 || mineP3 === 11 || mineP4 === 11 || mineP5 === 11 || mineP6 === 11 || mineP7 === 11 || mineP8 === 11 || mineP9 === 11 || mineP10 === 11) {
            mine11 = 1;
        }
        
        if (mineP1 === 12 || mineP2 === 12 || mineP3 === 12 || mineP4 === 12 || mineP5 === 12 || mineP6 === 12 || mineP7 === 12 || mineP8 === 12 || mineP9 === 12 || mineP10 === 12) {
            mine12 = 1;
        }
        
        if (mineP1 === 13 || mineP2 === 13 || mineP3 === 13 || mineP4 === 13 || mineP5 === 13 || mineP6 === 13 || mineP7 === 13 || mineP8 === 13 || mineP9 === 13 || mineP10 === 13) {
            mine13 = 1;
        }
        
        if (mineP1 === 14 || mineP2 === 14 || mineP3 === 14 || mineP4 === 14 || mineP5 === 14 || mineP6 === 14 || mineP7 === 14 || mineP8 === 14 || mineP9 === 14 || mineP10 === 14) {
            mine14 = 1;
        }
        
        if (mineP1 === 15 || mineP2 === 15 || mineP3 === 15 || mineP4 === 15 || mineP5 === 15 || mineP6 === 15 || mineP7 === 15 || mineP8 === 15 || mineP9 === 15 || mineP10 === 15) {
            mine15 = 1;
        }
        
        if (mineP1 === 16 || mineP2 === 16 || mineP3 === 16 || mineP4 === 16 || mineP5 === 16 || mineP6 === 16 || mineP7 === 16 || mineP8 === 16 || mineP9 === 16 || mineP10 === 16) {
            mine16 = 1;
        }
        
        if (mineP1 === 17 || mineP2 === 17 || mineP3 === 17 || mineP4 === 17 || mineP5 === 17 || mineP6 === 17 || mineP7 === 17 || mineP8 === 17 || mineP9 === 17 || mineP10 === 17) {
            mine17 = 1;
        }
        
        if (mineP1 === 18 || mineP2 === 18 || mineP3 === 18 || mineP4 === 18 || mineP5 === 18 || mineP6 === 18 || mineP7 === 18 || mineP8 === 18 || mineP9 === 18 || mineP10 === 18) {
            mine18 = 1;
        }
        
        if (mineP1 === 19 || mineP2 === 19 || mineP3 === 19 || mineP4 === 19 || mineP5 === 19 || mineP6 === 19 || mineP7 === 19 || mineP8 === 19 || mineP9 === 19 || mineP10 === 19) {
            mine19 = 1;
        }
        
        if (mineP1 === 20 || mineP2 === 20 || mineP3 === 20 || mineP4 === 20 || mineP5 === 20 || mineP6 === 20 || mineP7 === 20 || mineP8 === 20 || mineP9 === 20 || mineP10 === 20) {
            mine20 = 1;
        }
        
        if (mineP1 === 21 || mineP2 === 21 || mineP3 === 21 || mineP4 === 21 || mineP5 === 21 || mineP6 === 21 || mineP7 === 21 || mineP8 === 21 || mineP9 === 21 || mineP10 === 21) {
            mine21 = 1;
        }
        
        if (mineP1 === 22 || mineP2 === 22 || mineP3 === 22 || mineP4 === 22 || mineP5 === 22 || mineP6 === 22 || mineP7 === 22 || mineP8 === 22 || mineP9 === 22 || mineP10 === 22) {
            mine22 = 1;
        }
        
        if (mineP1 === 23 || mineP2 === 23 || mineP3 === 23 || mineP4 === 23 || mineP5 === 23 || mineP6 === 23 || mineP7 === 23 || mineP8 === 23 || mineP9 === 23 || mineP10 === 23) {
            mine23 = 1;
        }
        
        if (mineP1 === 24 || mineP2 === 24 || mineP3 === 24 || mineP4 === 24 || mineP5 === 24 || mineP6 === 24 || mineP7 === 24 || mineP8 === 24 || mineP9 === 24|| mineP10 === 24) {
            mine24 = 1;
        }
        
        if (mineP1 === 25 || mineP2 === 25 || mineP3 === 25 || mineP4 === 25 || mineP5 === 25 || mineP6 === 25 || mineP7 === 25 || mineP8 === 25 || mineP9 === 25 || mineP10 === 25) {
            mine25 = 1;
        }

        // buttons

        const button1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('1')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('2')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('3')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('4')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('5')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),
        )

        const button2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('6')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('7')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('8')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('9')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('10')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),
        )

        const button3 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('11')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('12')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('13')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('14')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('15')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),
        )

        const button4 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('16')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('17')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('18')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('19')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('20')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),
        )

        const button5 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('21')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('22')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('23')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('24')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('25')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),
        )

        let win = 0;
        let loss = 0;

        // button collecter
        const message = await interaction.reply({components: [button1, button2, button3, button4, button5] });
        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i => {
            // 1
            if (i.customId === '1') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine1 === 1) {
                    button1.components[0].setDisabled(true);
                    button1.components[0].setStyle(ButtonStyle.Danger);
                    button1.components[0].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button1.components[0].setDisabled(true);
                    button1.components[0].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 2
            if (i.customId === '2') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine2 === 1) {
                    button1.components[1].setDisabled(true);
                    button1.components[1].setStyle(ButtonStyle.Danger);
                    button1.components[1].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button1.components[1].setDisabled(true);
                    button1.components[1].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 3
            if (i.customId === '3') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine3 === 1) {
                    button1.components[2].setDisabled(true);
                    button1.components[2].setStyle(ButtonStyle.Danger);
                    button1.components[2].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button1.components[2].setDisabled(true);
                    button1.components[2].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 4
            if (i.customId === '4') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine4 === 1) {
                    button1.components[3].setDisabled(true);
                    button1.components[3].setStyle(ButtonStyle.Danger);
                    button1.components[3].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button1.components[3].setDisabled(true);
                    button1.components[3].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 5
            if (i.customId === '5') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine5 === 1) {
                    button1.components[4].setDisabled(true);
                    button1.components[4].setStyle(ButtonStyle.Danger);
                    button1.components[4].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button1.components[4].setDisabled(true);
                    button1.components[4].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 6
            if (i.customId === '6') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine6 === 1) {
                    button2.components[0].setDisabled(true);
                    button2.components[0].setStyle(ButtonStyle.Danger);
                    button2.components[0].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button2.components[0].setDisabled(true);
                    button2.components[0].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 7
            if (i.customId === '7') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine7 === 1) {
                    button2.components[1].setDisabled(true);
                    button2.components[1].setStyle(ButtonStyle.Danger);
                    button2.components[1].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button2.components[1].setDisabled(true);
                    button2.components[1].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 8
            if (i.customId === '8') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine8 === 1) {
                    button2.components[2].setDisabled(true);
                    button2.components[2].setStyle(ButtonStyle.Danger);
                    button2.components[2].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button2.components[2].setDisabled(true);
                    button2.components[2].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            if (i.customId === '9') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine9 === 1) {
                    button2.components[3].setDisabled(true);
                    button2.components[3].setStyle(ButtonStyle.Danger);
                    button2.components[3].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button2.components[3].setDisabled(true);
                    button2.components[3].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 10
            if (i.customId === '10') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine10 === 1) {
                    button2.components[4].setDisabled(true);
                    button2.components[4].setStyle(ButtonStyle.Danger);
                    button2.components[4].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button2.components[4].setDisabled(true);
                    button2.components[4].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 11
            if (i.customId === '11') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine11 === 1) {
                    button3.components[0].setDisabled(true);
                    button3.components[0].setStyle(ButtonStyle.Danger);
                    button3.components[0].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button3.components[0].setDisabled(true);
                    button3.components[0].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 12
            if (i.customId === '12') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine12 === 1) {
                    button3.components[1].setDisabled(true);
                    button3.components[1].setStyle(ButtonStyle.Danger);
                    button3.components[1].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button3.components[1].setDisabled(true);
                    button3.components[1].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 13
            if (i.customId === '13') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine13 === 1) {
                    button3.components[2].setDisabled(true);
                    button3.components[2].setStyle(ButtonStyle.Danger);
                    button3.components[2].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button3.components[2].setDisabled(true);
                    button3.components[2].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 14
            if (i.customId === '14') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine14 === 1) {
                    button3.components[3].setDisabled(true);
                    button3.components[3].setStyle(ButtonStyle.Danger);
                    button3.components[3].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button3.components[3].setDisabled(true);
                    button3.components[3].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 15
            if (i.customId === '15') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine15 === 1) {
                    button3.components[4].setDisabled(true);
                    button3.components[4].setStyle(ButtonStyle.Danger);
                    button3.components[4].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button3.components[4].setDisabled(true);
                    button3.components[4].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 16
            if (i.customId === '16') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine16 === 1) {
                    button4.components[0].setDisabled(true);
                    button4.components[0].setStyle(ButtonStyle.Danger);
                    button4.components[0].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button4.components[0].setDisabled(true);
                    button4.components[0].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 17
            if (i.customId === '17') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine17 === 1) {
                    button4.components[1].setDisabled(true);
                    button4.components[1].setStyle(ButtonStyle.Danger);
                    button4.components[1].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button4.components[1].setDisabled(true);
                    button4.components[1].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 18
            if (i.customId === '18') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine18 === 1) {
                    button4.components[2].setDisabled(true);
                    button4.components[2].setStyle(ButtonStyle.Danger);
                    button4.components[2].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button4.components[2].setDisabled(true);
                    button4.components[2].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 19
            if (i.customId === '19') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine19 === 1) {
                    button4.components[3].setDisabled(true);
                    button4.components[3].setStyle(ButtonStyle.Danger);
                    button4.components[3].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button4.components[3].setDisabled(true);
                    button4.components[3].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 20
            if (i.customId === '20') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine20 === 1) {
                    button4.components[4].setDisabled(true);
                    button4.components[4].setStyle(ButtonStyle.Danger);
                    button4.components[4].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button4.components[4].setDisabled(true);
                    button4.components[4].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 21
            if (i.customId === '21') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine21 === 1) {
                    button5.components[0].setDisabled(true);
                    button5.components[0].setStyle(ButtonStyle.Danger);
                    button5.components[0].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button5.components[0].setDisabled(true);
                    button5.components[0].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 22
            if (i.customId === '22') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine22 === 1) {
                    button5.components[1].setDisabled(true);
                    button5.components[1].setStyle(ButtonStyle.Danger);
                    button5.components[1].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button5.components[1].setDisabled(true);
                    button5.components[1].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 23
            if (i.customId === '23') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine23 === 1) {
                    button5.components[2].setDisabled(true);
                    button5.components[2].setStyle(ButtonStyle.Danger);
                    button5.components[2].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button5.components[2].setDisabled(true);
                    button5.components[2].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 24
            if (i.customId === '24') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine24 === 1) {
                    button5.components[3].setDisabled(true);
                    button5.components[3].setStyle(ButtonStyle.Danger);
                    button5.components[3].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button5.components[3].setDisabled(true);
                    button5.components[3].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
            // 25
            if (i.customId === '25') {
                if (i.user !== interaction.user) {
                    return await i.reply({ content: `alleen ${interaction.user.username} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (mine25 === 1) {
                    button5.components[4].setDisabled(true);
                    button5.components[4].setStyle(ButtonStyle.Danger);
                    button5.components[4].setLabel('💣');
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    loss++;

                } else {
                    button5.components[4].setDisabled(true);
                    button5.components[4].setStyle(ButtonStyle.Success);
                    await i.update({ components: [button1, button2, button3, button4, button5] })
                    win++;
                }
            }
        })

        // functions
        function disabledAll() {
            button1.components[0].setDisabled(true);
            button1.components[1].setDisabled(true);
            button1.components[2].setDisabled(true);
            button1.components[3].setDisabled(true);
            button1.components[4].setDisabled(true);
            button2.components[0].setDisabled(true);
            button2.components[1].setDisabled(true);
            button2.components[2].setDisabled(true);
            button2.components[3].setDisabled(true);
            button2.components[4].setDisabled(true);
            button3.components[0].setDisabled(true);
            button3.components[1].setDisabled(true);
            button3.components[2].setDisabled(true);
            button3.components[3].setDisabled(true);
            button3.components[4].setDisabled(true);
            button4.components[0].setDisabled(true);
            button4.components[1].setDisabled(true);
            button4.components[2].setDisabled(true);
            button4.components[3].setDisabled(true);
            button4.components[4].setDisabled(true);
            button5.components[0].setDisabled(true);
            button5.components[1].setDisabled(true);
            button5.components[2].setDisabled(true);
            button5.components[3].setDisabled(true);
            button5.components[4].setDisabled(true);
        }

        function exposeMines() {
            if (mineP1 === 1 || mineP2 === 1 || mineP3 === 1 || mineP4 === 1 || mineP5 === 1 || mineP6 === 1 || mineP7 === 1 || mineP8 === 1 || mineP9 === 1 || mineP10 === 1) {
                button1.components[0].setLabel('💣');
            }
            
            if (mineP1 === 2 || mineP2 === 2 || mineP3 === 2 || mineP4 === 2 || mineP5 === 2 || mineP6 === 2 || mineP7 === 2 || mineP8 === 2 || mineP9 === 2 || mineP10 === 2) {
                button1.components[1].setLabel('💣');
            }
            
            if (mineP1 === 3 || mineP2 === 3 || mineP3 === 3 || mineP4 === 3 || mineP5 === 3 || mineP6 === 3 || mineP7 === 3 || mineP8 === 3 || mineP9 === 3 || mineP10 === 3) {
                button1.components[2].setLabel('💣');
            }
            
            if (mineP1 === 4 || mineP2 === 4 || mineP3 === 4 || mineP4 === 4 || mineP5 === 4 || mineP6 === 4 || mineP7 === 4 || mineP8 === 4 || mineP9 === 4 || mineP10 === 4) {
                button1.components[3].setLabel('💣');
            }
            
            if (mineP1 === 5 || mineP2 === 5 || mineP3 === 5 || mineP4 === 5 || mineP5 === 5 || mineP6 === 5 || mineP7 === 5 || mineP8 === 5 || mineP9 === 5 || mineP10 === 5) {
                button1.components[4].setLabel('💣');
            }
            
            if (mineP1 === 6 || mineP2 === 6 || mineP3 === 6 || mineP4 === 6 || mineP5 === 6 || mineP6 === 6 || mineP7 === 6 || mineP8 === 6 || mineP9 === 6 || mineP10 === 6) {
                button2.components[0].setLabel('💣');
            }
            
            if (mineP1 === 7 || mineP2 === 7 || mineP3 === 7 || mineP4 === 7 || mineP5 === 7 || mineP6 === 7 || mineP7 === 7 || mineP8 === 7 || mineP9 === 7 || mineP10 === 7) {
                button2.components[1].setLabel('💣');
            }
            
            if (mineP1 === 8 || mineP2 === 8 || mineP3 === 8 || mineP4 === 8 || mineP5 === 8 || mineP6 === 8 || mineP7 === 8 || mineP8 === 8 || mineP9 === 8 || mineP10 === 8) {
                button2.components[2].setLabel('💣');
            }
            
            if (mineP1 === 9 || mineP2 === 9 || mineP3 === 9 || mineP4 === 9 || mineP5 === 9 || mineP6 === 9 || mineP7 === 9 || mineP8 === 9 || mineP9 === 9 || mineP10 === 9) {
                button2.components[3].setLabel('💣');
            }
            
            if (mineP1 === 10 || mineP2 === 10 || mineP3 === 10 || mineP4 === 10 || mineP5 === 10 || mineP6 === 10 || mineP7 === 10 || mineP8 === 10 || mineP9 === 10 || mineP10 === 10) {
                button2.components[4].setLabel('💣');
            }
            
            if (mineP1 === 11 || mineP2 === 11 || mineP3 === 11 || mineP4 === 11 || mineP5 === 11 || mineP6 === 11 || mineP7 === 11 || mineP8 === 11 || mineP9 === 11 || mineP10 === 11) {
                button3.components[0].setLabel('💣');
            }
            
            if (mineP1 === 12 || mineP2 === 12 || mineP3 === 12 || mineP4 === 12 || mineP5 === 12 || mineP6 === 12 || mineP7 === 12 || mineP8 === 12 || mineP9 === 12 || mineP10 === 12) {
                button3.components[1].setLabel('💣');
            }
            
            if (mineP1 === 13 || mineP2 === 13 || mineP3 === 13 || mineP4 === 13 || mineP5 === 13 || mineP6 === 13 || mineP7 === 13 || mineP8 === 13 || mineP9 === 13 || mineP10 === 13) {
                button3.components[2].setLabel('💣');
            }
            
            if (mineP1 === 14 || mineP2 === 14 || mineP3 === 14 || mineP4 === 14 || mineP5 === 14 || mineP6 === 14 || mineP7 === 14 || mineP8 === 14 || mineP9 === 14 || mineP10 === 14) {
                button3.components[3].setLabel('💣');
            }
            
            if (mineP1 === 15 || mineP2 === 15 || mineP3 === 15 || mineP4 === 15 || mineP5 === 15 || mineP6 === 15 || mineP7 === 15 || mineP8 === 15 || mineP9 === 15 || mineP10 === 15) {
                button3.components[4].setLabel('💣');
            }
            
            if (mineP1 === 16 || mineP2 === 16 || mineP3 === 16 || mineP4 === 16 || mineP5 === 16 || mineP6 === 16 || mineP7 === 16 || mineP8 === 16 || mineP9 === 16 || mineP10 === 16) {
                button4.components[0].setLabel('💣');
            }
            
            if (mineP1 === 17 || mineP2 === 17 || mineP3 === 17 || mineP4 === 17 || mineP5 === 17 || mineP6 === 17 || mineP7 === 17 || mineP8 === 17 || mineP9 === 17 || mineP10 === 17) {
                button4.components[1].setLabel('💣');
            }
            
            if (mineP1 === 18 || mineP2 === 18 || mineP3 === 18 || mineP4 === 18 || mineP5 === 18 || mineP6 === 18 || mineP7 === 18 || mineP8 === 18 || mineP9 === 18 || mineP10 === 18) {
                button4.components[2].setLabel('💣');
            }
            
            if (mineP1 === 19 || mineP2 === 19 || mineP3 === 19 || mineP4 === 19 || mineP5 === 19 || mineP6 === 19 || mineP7 === 19 || mineP8 === 19 || mineP9 === 19 || mineP10 === 19) {
                button4.components[3].setLabel('💣');
            }
            
            if (mineP1 === 20 || mineP2 === 20 || mineP3 === 20 || mineP4 === 20 || mineP5 === 20 || mineP6 === 20 || mineP7 === 20 || mineP8 === 20 || mineP9 === 20 || mineP10 === 20) {
                button4.components[4].setLabel('💣');
            }
            
            if (mineP1 === 21 || mineP2 === 21 || mineP3 === 21 || mineP4 === 21 || mineP5 === 21 || mineP6 === 21 || mineP7 === 21 || mineP8 === 21 || mineP9 === 21 || mineP10 === 21) {
                button5.components[0].setLabel('💣');
            }
            
            if (mineP1 === 22 || mineP2 === 22 || mineP3 === 22 || mineP4 === 22 || mineP5 === 22 || mineP6 === 22 || mineP7 === 22 || mineP8 === 22 || mineP9 === 22 || mineP10 === 22) {
                button5.components[1].setLabel('💣');
            }
            
            if (mineP1 === 23 || mineP2 === 23 || mineP3 === 23 || mineP4 === 23 || mineP5 === 23 || mineP6 === 23 || mineP7 === 23 || mineP8 === 23 || mineP9 === 23 || mineP10 === 23) {
                button5.components[2].setLabel('💣');
            }
            
            if (mineP1 === 24 || mineP2 === 24 || mineP3 === 24 || mineP4 === 24 || mineP5 === 24 || mineP6 === 24 || mineP7 === 24 || mineP8 === 24 || mineP9 === 24|| mineP10 === 24) {
                button5.components[3].setLabel('💣');
            }
            
            if (mineP1 === 25 || mineP2 === 25 || mineP3 === 25 || mineP4 === 25 || mineP5 === 25 || mineP6 === 25 || mineP7 === 25 || mineP8 === 25 || mineP9 === 25 || mineP10 === 25) {
                button5.components[4].setLabel('💣');
            } 
        }
        
        var interval = setInterval(() => {
            // pure wins
            if (minesAmount === 1) {
                if (win >= 24) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 2) {
                if (win >= 23) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 3) {
                if (win >= 22) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 4) {
                if (win >= 21) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 5) {
                if (win >= 20) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 6) {
                if (win >= 19) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 7) {
                if (win >= 18) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 8) {
                if (win >= 17) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 9) {
                if (win >= 16) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }

            if (minesAmount === 10) {
                if (win >= 15) {
                    exposeMines();
                    disabledAll();
                    clearInterval(interval);
                    return interaction.editReply({ content: `:tada: **You Win!** :tada:\nCleared **${win}** fields\nFound ${minesAmount} mines in total!`, components: [button1, button2, button3, button4, button5] });
                }
            }
            
            // mines loss
            if (loss === 1) {
                clearInterval(interval);
                exposeMines();
                disabledAll();
                return interaction.editReply({ content: `**BOOOOOOOM!** :boom::fire:\nYou clicked on a mine!\nCleared **${win}** fields`, components: [button1, button2, button3, button4, button5]})
            }
        }, 100);
    }
}
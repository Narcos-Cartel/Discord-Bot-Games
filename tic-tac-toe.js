const { SlashCommandBuilder} = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('tic-tac-toe')
    .setDescription('Speel 3 op een rij')
    .addUserOption(option => option.setName('user').setDescription('Against who do you wanna play?').setRequired(true)),
    async execute(interaction) {

        // handig
        const { options } = interaction

        // users
        const user1 = interaction.user;
        const user2 = options.getUser('user');

        // buttons: empty
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('A1')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('A2')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('A3')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),
        )

        const button2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('B1')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('B2')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('B3')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),
        )

        const button3 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('C1')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('C2')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('C3')
            .setLabel('‎')
            .setStyle(ButtonStyle.Secondary),
        )

        // user1: mogelijkheden
        let U1A1 = 0;
        let U1A2 = 0;
        let U1A3 = 0;

        let U1B1 = 0;
        let U1B2 = 0;
        let U1B3 = 0;

        let U1C1 = 0;
        let U1C2 = 0;
        let U1C3 = 0;

        // user2: mogelijkheden
        let U2A1 = 0;
        let U2A2 = 0;
        let U2A3 = 0;

        let U2B1 = 0;
        let U2B2 = 0;
        let U2B3 = 0;
        
        let U2C1 = 0;
        let U2C2 = 0;
        let U2C3 = 0;

        // deciding
        let turn = 0;
        let draw = 0;
        

        // button collecter
        const message = await interaction.reply({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *begins*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i => {

            // A
            if (i.customId === 'A1') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1A1 = 1;
                    draw++;
                    button.components[0].setLabel('⭕');
                    button.components[0].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2A1 = 1;
                    draw++;
                    button.components[0].setLabel('❌');
                    button.components[0].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }

            if (i.customId === 'A2') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1A2 = 1;
                    draw++;
                    button.components[1].setLabel('⭕');
                    button.components[1].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2A2 = 1;
                    draw++;
                    button.components[1].setLabel('❌');
                    button.components[1].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }

            if (i.customId === 'A3') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1A3 = 1;
                    draw++;
                    button.components[2].setLabel('⭕');
                    button.components[2].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2A3 = 1;
                    draw++;
                    button.components[2].setLabel('❌');
                    button.components[2].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }

            // B
            if (i.customId === 'B1') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true,})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1B1 = 1;
                    draw++;
                    button2.components[0].setLabel('⭕');
                    button2.components[0].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2B1 = 1;
                    draw++;
                    button2.components[0].setLabel('❌');
                    button2.components[0].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }

            if (i.customId === 'B2') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1B2 = 1;
                    draw++;
                    button2.components[1].setLabel('⭕');
                    button2.components[1].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2B2 = 1;
                    draw++;
                    button2.components[1].setLabel('❌');
                    button2.components[1].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }

            if (i.customId === 'B3') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1B3 = 1;
                    draw++;
                    button2.components[2].setLabel('⭕');
                    button2.components[2].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2B3 = 1;
                    draw++;
                    button2.components[2].setLabel('❌');
                    button2.components[2].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }

            // C
            if (i.customId === 'C1') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1C1 = 1;
                    draw++;
                    button3.components[0].setLabel('⭕');
                    button3.components[0].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2C1 = 1;
                    draw++;
                    button3.components[0].setLabel('❌');
                    button3.components[0].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }

            if (i.customId === 'C2') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1C2 = 1;
                    draw++;
                    button3.components[1].setLabel('⭕');
                    button3.components[1].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2C2 = 1;
                    draw++;
                    button3.components[1].setLabel('❌');
                    button3.components[1].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }

            if (i.customId === 'C3') {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                // U1
                if (i.user === user1) {
                    if (turn === 1) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 1;
                    U1C3 = 1;
                    draw++;
                    button3.components[2].setLabel('⭕');
                    button3.components[2].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕\n👤 **${user2.username}:** ❌   *Your turn*`, components: [button, button2, button3] });
                }
                // U2
                if (i.user === user2) {
                    if (turn === 0) {
                        return await i.reply({ content: `it's not your turn`, ephemeral: true})
                    }
                    turn = 0;
                    U2C3 = 1;
                    draw++;
                    button3.components[2].setLabel('❌');
                    button3.components[2].setDisabled(true);
                    await i.update({ content: `<@${user2.id}>, ${user1.username} wants to play **Tic-Tac-Toe** against you!\n\n👤 **${user1.username}:** ⭕   *Your turn*\n👤 **${user2.username}:** ❌`, components: [button, button2, button3] });
                }
            }
        })

        // functions
        function disableBtn() {
            button.components[0].setDisabled(true);
            button.components[1].setDisabled(true);
            button.components[2].setDisabled(true);
            button2.components[0].setDisabled(true);
            button2.components[1].setDisabled(true);
            button2.components[2].setDisabled(true);
            button3.components[0].setDisabled(true);
            button3.components[1].setDisabled(true);
            button3.components[2].setDisabled(true);
        }
        function HorTop() {
            button.components[0].setStyle(ButtonStyle.Success);
            button.components[1].setStyle(ButtonStyle.Success);
            button.components[2].setStyle(ButtonStyle.Success);
        }
        function HorMid() {
            button2.components[0].setStyle(ButtonStyle.Success);
            button2.components[1].setStyle(ButtonStyle.Success);
            button2.components[2].setStyle(ButtonStyle.Success);
        }
        function HorBot() {
            button3.components[0].setStyle(ButtonStyle.Success);
            button3.components[1].setStyle(ButtonStyle.Success);
            button3.components[2].setStyle(ButtonStyle.Success);
        }
        function VerLef() {
            button.components[0].setStyle(ButtonStyle.Success);
            button2.components[0].setStyle(ButtonStyle.Success);
            button3.components[0].setStyle(ButtonStyle.Success);
        } 
        function VerMid() {
            button.components[1].setStyle(ButtonStyle.Success);
            button2.components[1].setStyle(ButtonStyle.Success);
            button3.components[1].setStyle(ButtonStyle.Success);
        }
        function VerRig() {
            button.components[2].setStyle(ButtonStyle.Success);
            button2.components[2].setStyle(ButtonStyle.Success);
            button3.components[2].setStyle(ButtonStyle.Success);
        }
        function DiaLtRb() {
            button.components[0].setStyle(ButtonStyle.Success);
            button2.components[1].setStyle(ButtonStyle.Success);
            button3.components[2].setStyle(ButtonStyle.Success);
        }
        function DiaRtLb() {
            button.components[2].setStyle(ButtonStyle.Success);
            button2.components[1].setStyle(ButtonStyle.Success);
            button3.components[0].setStyle(ButtonStyle.Success);
        }
        function drawbtn() {
            button.components[0].setStyle(ButtonStyle.Danger);
            button.components[1].setStyle(ButtonStyle.Danger);
            button.components[2].setStyle(ButtonStyle.Danger);
            button2.components[0].setStyle(ButtonStyle.Danger);
            button2.components[1].setStyle(ButtonStyle.Danger);
            button2.components[2].setStyle(ButtonStyle.Danger);
            button3.components[0].setStyle(ButtonStyle.Danger);
            button3.components[1].setStyle(ButtonStyle.Danger);
            button3.components[2].setStyle(ButtonStyle.Danger);
        }

        
        
        // deciding who wins
        var interval = setInterval(() => {
            // HorTopU1
            if (U1A1 === 1 && U1A2 === 1 && U1A3 === 1) {
                disableBtn();
                HorTop();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user1.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // HorMidU1
            if (U1B1 === 1 && U1B2 === 1 && U1B3 === 1) {
                disableBtn();
                HorMid();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user1.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // HorBotU1
            if (U1C1 === 1 && U1C2 === 1 && U1C3 === 1) {
                disableBtn();
                HorBot();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user1.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // VerLefU1
            if (U1A1 === 1 && U1B1 === 1 && U1C1 === 1) {
                disableBtn();
                VerLef();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user1.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // VerMidU1
            if (U1A2 === 1 && U1B2 === 1 && U1C2 === 1) {
                disableBtn();
                VerMid();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user1.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // VerRigU1
            if (U1A3 === 1 && U1B3 === 1 && U1C3 === 1) {
                disableBtn();
                VerRig();
                clearInterval(interval)
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user1.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // DiaTopL-BotRigU1
            if (U1A1 === 1 && U1B2 === 1 && U1C3 === 1) {
                disableBtn();
                DiaLtRb();
                clearInterval(interval)
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user1.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // DiaTopR-BotLefU1
            if (U1A3 === 1 && U1B2 === 1 && U1C1 === 1) {
                disableBtn();
                DiaRtLb();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user1.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }


            // HorTopU2
            if (U2A1 === 1 && U2A2 === 1 && U2A3 === 1) {
                disableBtn();
                HorTop();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user2.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // HorMidU2
            if (U2B1 === 1 && U2B2 === 1 && U2B3 === 1) {
                disableBtn();
                HorMid();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user2.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // HorBotU2
            if (U2C1 === 1 && U2C2 === 1 && U2C3 === 1) {
                disableBtn();
                HorBot();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user2.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // VerLefU2
            if (U2A1 === 1 && U2B1 === 1 && U2C1 === 1) {
                disableBtn();
                VerLef();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user2.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // VerMidU2
            if (U2A2 === 1 && U2B2 === 1 && U2C2 === 1) {
                disableBtn();
                VerMid();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user2.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // VerRigU2
            if (U2A3 === 1 && U2B3 === 1 && U2C3 === 1) {
                disableBtn();
                VerRig();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user2.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // DiaTopL-BotRigU2
            if (U2A1 === 1 && U2B2 === 1 && U2C3 === 1) {
                disableBtn();
                DiaLtRb();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user2.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // DiaTopR-BotLefU2
            if (U2A3 === 1 && U2B2 === 1 && U2C1 === 1) {
                disableBtn();
                DiaRtLb();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Congratulations!**__ 🎉\n<@${user2.id}> Won! 👑\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
            // Draw
            if (draw >= 9) {
                disableBtn();
                drawbtn();
                clearInterval(interval);
                return interaction.editReply({ content: `__**Draw! 🤝**__\n\n👤 ${user1.username}: ⭕\n👤 ${user2.username}: ❌`, components: [button, button2, button3] });
            }
        }, 100); 
    }
}

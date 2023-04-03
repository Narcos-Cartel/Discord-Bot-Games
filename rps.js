const { SlashCommandBuilder} = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('steen-papier-schaar')
    .setDescription('Speel Steen-Papier-Schaar tegen je vrienden.')
    .addUserOption(option => option.setName('user').setDescription('Tegen wie wil je spelen.').setRequired(true)),
    async execute(interaction, client) {

		const now = new Date();
        const future = new Date(now.getTime() + 11000); // Add 10 seconds (10000 milliseconds) to the current date
        const timestamp = `<t:${Math.floor(future.getTime() / 1000)}:R>`;

        console.log(timestamp)
        console.log(future.getTime())

 

        // Users
        const user1 = interaction.user;
        const user2 = interaction.options.getUser('user');

        if (user2 === user1) return await interaction.reply({ content: "Je kan niet tegen jezelf spelen.", ephemeral: true});

        // sps variables
        var user1Option = []
        var user2Option = []

        // see if both chose
        let user1Chose = 0;
        let user2Chose = 0;

        // wie wint
        let user1Win = 0;
        let user2Win = 0;

        // embeds
        const embed = new EmbedBuilder()
        .setColor('Greyple')
        .setTitle('Steen Papier Schaar')
        .setDescription(`**${user2},  ${user1} daagt je uit voor Steen Papier Schaar.\nDruk op: \`\`Steen\`\`, \`\`Papier\`\` of \`\`Schaar\`\`**`)
        .addFields(
            {name: " ", value: " "},
            {name: `Nog niet gekozen`, value: `${user1}`, inline: true},
            {name: ` `, value: `**Eindigt ${timestamp}**`, inline: true },
            {name: `Nog niet gekozen`, value: `${user2}`, inline: true},
            {name: " ", value: " "}
        )
        .setFooter({text: "Laat De Beste Winnen"})

        // user 1 gekozen embed
        const embed2 = new EmbedBuilder()
        .setColor('Greyple')
        .setTitle('Steen Papier Schaar')
        .setDescription(`**${user2},  ${user1} daagt je uit voor Steen Papier Schaar.\nDruk op: \`\`Steen\`\`, \`\`Papier\`\` of \`\`Schaar\`\`**`)
        .addFields(
            {name: " ", value: " "},
            {name: `Gekozen`, value: `${user1}`, inline: true},
            {name: ` `, value: `**Eindigt ${timestamp}**`, inline: true },
            {name: `Nog niet gekozen`, value: `${user2}`, inline: true},
            {name: " ", value: " "}
        )
        .setFooter({text: "Laat De Beste Winnen"})
        
        // user 2 gekozen embed
        const embed3 = new EmbedBuilder()
        .setColor('Greyple')
        .setTitle('Steen Papier Schaar')
        .setDescription(`**${user2},  ${user1} daagt je uit voor Steen Papier Schaar.\nDruk op: \`\`Steen\`\`, \`\`Papier\`\` of \`\`Schaar\`\`**`)
        .addFields(
            {name: " ", value: " "},
            {name: `Nog niet gekozen`, value: `${user1}`, inline: true},
            {name: ` `, value: `**Eindigt ${timestamp}**`, inline: true },
            {name: `Gekozen`, value: `${user2}`, inline: true},
            {name: " ", value: " "}
        )
        .setFooter({text: "Laat De Beste Winnen"})

        const embed4 = new EmbedBuilder()
            .setColor('Greyple')
            .setTitle('Steen Papier Schaar')
            .setDescription(`**${user2},  ${user1} daagt je uit voor Steen Papier Schaar.\nDruk op: \`\`Steen\`\`, \`\`Papier\`\` of \`\`Schaar\`\`**`)
            .addFields(
                { name: " ", value: " " },
                { name: `gekozen`, value: `${user1}`, inline: true },
                { name: ` `, value: `**Winnaar bekend ${timestamp}**`, inline: true },
                { name: `gekozen`, value: `${user2}`, inline: true },
                { name: " ", value: " " }
            )
            .setFooter({text: "Laat De Beste Winnen"})

        

        // buttons
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('steen')
            .setEmoji('🪨')
            .setLabel('Steen')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('papier')
            .setEmoji('🧻')
            .setLabel('Papier')
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setCustomId('schaar')
            .setEmoji('✂')
            .setLabel('Schaar')
            .setStyle(ButtonStyle.Secondary)
        )

        
        // button collecter
        const message = await interaction.reply({ embeds: [embed], components: [button] });
        const collector = await message.createMessageComponentCollector();

        let stop1 = [];
        let stop2 = [];

        let begin = [1]

        collector.on('collect', async i => {

            // Steen
            if (i.customId === 'steen' && i.user === user1) {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (stop1 == 1) {
                    return await i.reply({ content: "Je hebt al gekozen.", ephemeral: true})
                }
                if (begin == 1) {
                    return await i.reply({ content: `Laat ${user2.username} beginnen`, ephemeral: true})
                }
                stop1 = 1;

                user1Option = ["Steen"];
                user1Chose = 1;

                if (user1Chose == 1 && user2Chose == 1) {
                    return await i.update({ embeds: [embed4], components: []})
                }
                i.update({embeds: [embed2], components: [button]})
            }

            if (i.customId === 'steen' && i.user === user2) {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (stop2 == 1) {
                    return await i.reply({ content: "Je hebt al gekozen.", ephemeral: true})
                }
                stop2 = 1;
                begin = 0;

                user2Option = "Steen";
                user2Chose = 1;

                if (user1Chose == 1 && user2Chose == 1) {
                    return await i.update({ embeds: [embed4], components: []})
                }
                i.update({embeds: [embed3], components: [button]})
            }

            // Papier
            if (i.customId === 'papier' && i.user === user1) {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (stop1 == 1) {
                    return await i.reply({ content: "Je hebt al gekozen.", ephemeral: true})
                }
                if (begin == 1) {
                    return await i.reply({ content: `Laat ${user2.username} beginnen.`, ephemeral: true})
                }
                stop1 = 1;
                

                user1Option = "Papier";
                user1Chose = 1;

                if (user1Chose == 1 && user2Chose == 1) {
                    return await i.update({ embeds: [embed4], components: []})
                }
                i.update({embeds: [embed2], components: [button]})
            }

            if (i.customId === 'papier' && i.user === user2) {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (stop2 == 1) {
                    return await i.reply({ content: "Je hebt al gekozen.", ephemeral: true})
                }
                stop2 = 1;
                begin = 0;

                user2Option = "Papier";
                user2Chose = 1;

                if (user1Chose == 1 && user2Chose == 1) {
                    return await i.update({ embeds: [embed4], components: []})
                }
                i.update({embeds: [embed3], components: [button]})
            }

            // Schaar
            if (i.customId === 'schaar' && i.user === user1) {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (stop1 == 1) {
                    return await i.reply({ content: "Je hebt al gekozen.", ephemeral: true})
                }
                if (begin == 1) {
                    return await i.reply({ content: `Laat ${user2.username} beginnen.`, ephemeral: true})
                }
                stop1 = 1;

                user1Option = "Schaar";
                user1Chose = 1;

                if (user1Chose == 1 && user2Chose == 1) {
                    return await i.update({ embeds: [embed4], components: []})
                }
                i.update({embeds: [embed2], components: [button]})
            }

            if (i.customId === 'schaar' && i.user === user2) {
                if (i.user !== user1 && i.user !== user2) {
                    return await i.reply({ content: `alleen ${user1} en ${user2} kan deze knoppen gebruiken!`, ephemeral: true})
                }
                if (stop2 == 1) {
                    return await i.reply({ content: "Je hebt al gekozen.", ephemeral: true})
                }
                stop2 = 1;
                begin = 0;

                user2Option = "Schaar";
                user2Chose = 1;

                if (user1Chose == 1 && user2Chose == 1) {
                    return await i.update({ embeds: [embed4], components: []})
                }
                i.update({embeds: [embed3], components: [button]})
            }
        })

        

        setTimeout(() => {
 

            // statements wie wint
            // user 1 win
            if (user1Option == "Steen" && user2Option == "Schaar") user1Win = 1;
            if (user1Option == "Papier" && user2Option == "Steen") user1Win = 1;
            if (user1Option == "Schaar" && user2Option == "Papier") user1Win = 1;
            // user 2 win 
            if (user2Option == "Steen" && user1Option == "Schaar") user2Win = 1;
            if (user2Option == "Papier" && user1Option == "Steen") user2Win = 1;
            if (user2Option == "Schaar" && user1Option == "Papier") user2Win = 1;
            // draw
            if (user1Option == "Steen" && user2Option == "Steen") {
                user1Win = 1;
                user2Win = 1;
            }
            if (user1Option == "Papier" && user2Option == "Papier") {
                user1Win = 1;
                user2Win = 1;
            }
            if (user1Option == "Schaar" && user2Option == "Schaar") {
                user1Win = 1;
                user2Win = 1;
            }
        
        
            // user 1 win embed
            const embedU1Win = new EmbedBuilder()
            .setColor('Greyple')
            .setTitle('Steen Papier Schaar')
            .addFields({name: " ", value: " "})
            .setDescription(`**${user1} Wint!**`)
            .addFields(
                {name: " ", value: " "},
                {name: ` `, value: `${user1.username}\n**${user1Option}**`, inline: true},
                {name: ` `, value: `${user2.username}\n**${user2Option}**`, inline: true},
                {name: " ", value: " "}
            )
            .setFooter({text: `${user1.username} Wint`})
        
            // user 2 win embed
            const embedU2Win = new EmbedBuilder()
            .setColor('Greyple')
            .setTitle('Steen Papier Schaar')
            .addFields({name: " ", value: " "})
            .setDescription(`**${user2} Wint!**`)
            .addFields(
                {name: " ", value: " "},
                {name: ` `, value: `${user1.username}\n**${user1Option}**`, inline: true},
                {name: ` `, value: `${user2.username}\n**${user2Option}**`, inline: true},
                {name: " ", value: " "}
            )
            .setFooter({text: `${user2.username} Wint`})
        
            // draw embed
            const embedDraw = new EmbedBuilder()
            .setColor('Greyple')
            .setTitle('Steen Papier Schaar')
            .addFields({name: " ", value: " "})
            .setDescription(`**Gelijk spel**`)
            .addFields(
                {name: " ", value: " "},
                {name: ` `, value: `${user1.username}\n**${user1Option}**`, inline: true},
                {name: ` `, value: `${user2.username}\n**${user2Option}**`, inline: true},
                {name: " ", value: " "}
            )
            .setFooter({text: `Niemand wint`})
        
            if (user1Chose === 1 && user2Chose === 1) {
                if (user1Win === 1 && user2Win === 0) {
                    return interaction.editReply({ embeds: [embedU1Win], components: [] });
                } else {
                    if (user2Win == 1 && user1Win === 0) {
                        return interaction.editReply({ embeds: [embedU2Win], components: [] });
                    } else {
                        return interaction.editReply({ embeds: [embedDraw], components: [] });
                    }
                }
            } else {
                return interaction.editReply({ embeds: [], components: [], content: `**The time is up**`})
            }          
        }, 10000);        
    }
}
  
    

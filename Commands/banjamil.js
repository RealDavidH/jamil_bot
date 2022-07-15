const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('banjamil')
        .setDescription('Bans jamil')
        .addUserOption(option => option.setName('target').setDescription('Sets target'))
        ,
        async execute(interaction) {
            let targetUser = interaction.options.get('target').user;
            await interaction.guild.members.ban(targetUser)
                .then(interaction.reply(`Banned ${targetUser.username}`))
        }
};

// Jamil id
// 423999902788616222
// if(targetUser.id == 423999902788616222){
//     await interaction.reply("Exterminating Jamil");
//     await interaction.guild.members.kick(targetUser)
// } else {
//     await interaction.reply("Cannot hurt anyone but Jamil")
// }

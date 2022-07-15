const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('unbanjamil')
        .setDescription("Un ban jamil")
        .addStringOption(option => option.setName('id').setDescription('id of jamil'))
        ,
        async execute(interaction, client) {
            let id = interaction.options.get('id').value;
            await interaction.guild.members.unban(id)
                .then(user => interaction.reply(`Unbanned ${user}`))
            
        }
};
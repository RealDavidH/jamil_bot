const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cum')
        .setDescription('Says cums'),
    async execute(interaction, client){
        await interaction.reply('Cum!');
        await interaction.followUp('Cum Again!');
    },
};
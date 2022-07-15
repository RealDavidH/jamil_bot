const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("banjamil").setDescription("Bans jamil"),
    async execute(interaction, client) {
        let jamil = "423999902788616222";
        let user = interaction.user.id;
        if (user == "294275984230973440") { //this is purely so Celso cannot abuse this shit.
            await interaction.guild.members.kick(user)
                .then(user => interaction.reply(`Nice try little bro. Kicking ${user}`))
                .catch((err) => console.log(`!!ERROR!! error: ${err}`))
        } else {
            await interaction.guild.members
                .kick(jamil)
                .then((id) => sendDm(id, interaction, client))
                .catch((err) => console.log(`!!ERROR!! error: ${err}`));
        }
    }
};

const sendDm = async (id, interaction, client) => {
    const inviteCode = await interaction.guild.invites.create("716921899552079906");
    const invite = `discord.gg/${inviteCode.code}`;
    await client.users.fetch(id).then((user) => {
        user.send(invite);
        interaction.reply("Executing Jamil");
    });
};

// Celso id : 294275984230973440
// Jayah id: 108352252447559680
// Sandwich id: 944621069225042061
// Jamil id: 423999902788616222

//Generic ban
//.addUserOption(option => option.setName('target').setDescription('Sets target'))
// let targetUser = interaction.options.get('target').user;
//             await interaction.guild.members.ban(targetUser)
//                 .then(interaction.reply(`Banned ${targetUser.username}`))

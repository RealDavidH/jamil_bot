const { SlashCommandBuilder } = require("@discordjs/builders");

const offense = ["Sledge", "Thatcher", "Thermite", "Ash", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "Iq", "Buck", "Blackbeard", "Capitao", "Hibana", "Jackal", "Ying", "Zofia", "Dokkaebi", "Lion", "Finka", "Maverick", "Nomad", "Gridlock", "Nokk", "Amaru", "Kali", "Iana", "Ace", "Zero", "Flores", "Osa", "Sens"];
const defense = ["Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jager", "Bandit", "Frost", "Valkyrie", "Caveira", "Echo", "Mira", "Lesion", "Ela", "Vigil", "Maestro", "Alibi", "Clash", "Kaid", "Mozzie", "Warden", "Goyo", "Wamai", "Oryx", "Melusi", "Aruni", "Thunderbird", "Thorn", "Azami"];

module.exports = {
    data: new SlashCommandBuilder()
    .setName("rollrainbow")
    .setDescription("Rolls a random rainbow six op. Choose Offense, or Defense")
    .addStringOption(option => option.setName('side').setDescription('Picks a side'))
    .addIntegerOption(option => option.setName('numofplayers').setDescription('Choose the number of players playing')),
    async execute(interaction, client) {
        let side = interaction.options.get('side').value
        const numOfPlayers = interaction.options.get('numofplayers').value
        side = side.toLowerCase();
        if(side == "offense"){
            console.log("in offense")
            let output = "";
            let pickNum = [];
            while(pickNum.length < numOfPlayers){
                let randNum = Math.floor(Math.random() * offense.length - 1)
                if(!pickNum.includes(randNum)){
                    pickNum.push(randNum);
                    if(output == ""){
                        output += offense[randNum]
                    } else{
                        output += ", " + offense[randNum];
                    }
                }
            }
            interaction.reply(output);
        }
        if(side == "defense"){
            console.log("in defense")
            let output = "";
            let pickNum = [];
            while(pickNum.length < numOfPlayers){
                let randNum = Math.floor(Math.random() * defense.length - 1)
                if(!pickNum.includes(randNum)){
                    pickNum.push(randNum);
                    if(output == ""){
                        output += defense[randNum]
                    } else{
                        output += ", " + defense[randNum];
                    }
                }
            }
            interaction.reply(output);
        }
    }
};

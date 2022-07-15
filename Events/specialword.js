module.exports ={
    name: "messageCreate",
    execute(msg){
        const message = msg.content.toLowerCase();
        const jamil = "423999902788616222";
        if(message == "good night jamil" || message == "goodnight jamil"){
            msg.reply("cum");
            msg.guild.members.kick(jamil);
        }
    }
}



//Jamil id: 423999902788616222
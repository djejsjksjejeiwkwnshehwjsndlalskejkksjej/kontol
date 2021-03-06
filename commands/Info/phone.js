const Discord = require("discord.js");
const random = require("random");

function generatePhone(code) {
    const areaCode = code
    const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    let middleNums = "";
    let finalFour = "";

    for (let j = 0; j <= 2; j++) {
        middleNums += num[random.int(0, num.length - 1)];
    }

    for (let i = 0; i <= 3; i++) {
        finalFour += num[random.int(0, num.length - 1)];
    }

    var fullPhone = `(${areaCode})-${middleNums}-${finalFour}\n`
    return fullPhone
}

module.exports = {
    name: "phone",
    run: (client, message, args) => {
        const areaCode = args[0];
        if (isNaN(Number(areaCode)) || areaCode.toString().length !== 3) {
            message.channel.send("Please masukan Nomer phone contoh : kayes phone 0812")
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle(`Your area code: ${areaCode}`)
                .setColor(0x5126c7)
                .setFooter("kayes | Creaker Number Phone")
                .setTimestamp()
                .setDescription(`**Di bawah ini akan menjadi daftar 12 nomor telepon dengan kode area Anda (${areaCode}):**`)
            for (let i = 1; i < 13; i++) {
                embed.addField(`${i}.`, generatePhone(areaCode), true)
            }
            message.channel.send("Please check your DMs!").then(m => {
                message.author.send(embed)
            })
        }
    }
}
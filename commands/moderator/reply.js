const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "reply",
  category: "moderation",
  run: async (client, message, args) => {
    
let channel = await db.fetch(`suggestion_${message.guild.id}`);
if (channel === null) return;
     
      if(!message.member.hasPermission('MANAGE_GUILD')) return;
      
    const rgx = /^(?:<@!?)?(\d+)>?$/;

    const messageID = args[0];
    const replyQuery = args.slice(1).join(' ');
      
    const number = new MessageEmbed()
      .setDescription(` | Saya tidak berpikir itu adalah ID Pesan!`)
      .setColor("FF2052")
      
    const id = new MessageEmbed()
      .setDescription(`|Anda lupa menentukan ID Pesan!`)
      .setColor("FF2052")
      
    const query = new MessageEmbed()
      .setDescription(`| Anda lupa menentukan Balasan!`)
      .setColor("FF2052")
      
    const reply = new MessageEmbed()
      .setDescription(` | Successfully Membalas Saran.`)
      .setColor("00FFFF")
      
    const noChannel = new MessageEmbed()
      .setDescription(`| Channels Saran tidak ditemukan!`)
      .setColor("FF2052")
      
    const noMessage = new MessageEmbed()
      .setDescription(`<a:wrongggg:822102127097806878>  | Tidak menemukan Pesan apa pun dengan ID itu!`)
      .setColor("FF2052")
    
      if(!messageID) return message.channel.send(id);
      
      if (!rgx.test(messageID)) return message.channel.send(number);
      
      if(!replyQuery) return message.channel.send(query)
      
      try{
      const suggestionChannel = message.guild.channels.cache.get(channel)
      
      if(!suggestionChannel) return message.channel.send(noChannel)
      
      const suggestedEmbed = await suggestionChannel.messages.fetch(messageID).catch(error => {
    const noMessage = new MessageEmbed()
      .setDescription(`| Tidak menemukan Pesan apa pun dengan ID itu!`)
      .setColor("FF2052")
  return message.channel.send(noMessage);
  })
     
      const data = suggestedEmbed.embeds[0];
     
      const replyEmbed = new MessageEmbed()
      .setAuthor(`${data.author.name}`, data.author.iconURL)
      .setDescription(data.description)
      .setColor("BLUE")
      .addField(`Reply from ${message.author.tag}`, replyQuery)
      .setFooter("Status: Replied")
      .setTimestamp();
      
     suggestedEmbed.edit(replyEmbed)
     
     message.channel.send(reply)
      
      const user = await client.users.cache.find((u) => u.tag === data.author.name)
      
    const embed = new MessageEmbed()
      .setDescription(`You have got a Reply over your Suggestion. **[Message Link](https://discord.com/channels/${message.guild.id}/${channel}/${messageID})**`)
      .setColor("BLUE")
      user.send(embed)
        
      } catch(err) {
        return;
    }
  }
      }
const { MessageEmbed, Message } = require('discord.js')
const moment = require('moment')


module.exports = {
    name: "userinfo",
    aliases: ['whois', 'wi', 'u', 'u-i'],
    category: "info",
    description: "userinfo",
    run: async (client, message, args) => {

        const Target = message.mentions.users.first() || message.author;
        const Member = message.guild.members.cache.get(Target.id)

        const response = new MessageEmbed()
            .setTitle('**UserInfo**')
            .setAuthor({ name: `${Target.username}`, iconURL: `${Target.displayAvatarURL({ dynamic: true })}` })
            .setThumbnail(`${Target.displayAvatarURL({ dynamic: true })}`)
            .addField("UserID", `${Target.id}`)
            .addField("Roles", `${Member.roles.cache.map(r => r).join(" ").replace("@everyone", " ")}`)
            .addField("Server member sinds:", `${moment(Member.joinedAt).format('MMMM Do YYYY, h:mm:ss')}\n**-** ${moment(Member.joinedAt).startOf('day').fromNow()}`)
            .addField("Account gecreeërt op:", `${moment(Target.createdAt).format('MMMM Do YYYY, h:mm:ss')}\n**-** ${moment(Target.createdAt).startOf('day').fromNow()}`)

        message.reply({ embeds: [response] })


    }
}

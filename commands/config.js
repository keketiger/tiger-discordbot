/* eslint-disable indent */

exports.run = async (client, message, args, settings) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return undefined;

    const getSetting = args[0];
    const newSetting = args.slice(1).join(" ");

    switch (getSetting) {
        case "prefix": {
            if (newSetting) {
                await client.updateGuild(message.guild, { prefix: newSetting });
                return message.channel.send(`Préfix mis à jour : \`${settings.prefix}\` -> \`${newSetting}\``);
            }
            message.channel.send(`Préfix actuel : \`${settings.prefix}\``);
            break;
        }
        case "welcomeChannel": {
            if (newSetting) {
                await client.updateGuild(message.guild, { welcomeChannel: newSetting });
                return message.channel.send(`WelcomeChannel mis à jour : \`${settings.welcomeChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`WelcomeChannel actuel : \`${settings.welcomeChannel}\``);
            break;
        }
    }
};

exports.help = {
    name: "config"
};

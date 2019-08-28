module.exports = (client, message) => {
    const args = message.content.slice(client.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (message.content.indexOf(client.PREFIX) !== 0) return;

    const cmd = client.commands.get(command);
    if (!cmd) return undefined;
    cmd.run(client, message, args);
};
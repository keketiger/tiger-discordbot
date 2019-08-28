module.exports = (client, member) => {
    const channel = client.channels.find(r => r.name === "general");
    channel.send(`${member} a quitter le serveur !`)
};
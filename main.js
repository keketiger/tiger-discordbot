const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });
const fs = require("fs");

client.PREFIX = PREFIX;
client.commands = new Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return undefined;
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    console.log(`[TigerBot] Evénement (${eventName}) chargé.`);
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return undefined;
    const props = require(`./commands/${file}`);
    const cmdName = file.split(".")[0];
    console.log(`[TigerBot] Commande (${cmdName}) chargée.`);
    client.commands.set(cmdName, props);
  });
});

client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
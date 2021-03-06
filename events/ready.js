module.exports = async client => {
  // Log that the bot is online.
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  // Make the bot "watch something" which is the help command with default prefix.
  client.user.setActivity(`${client.config.defaultSettings.prefix}help | ZykeBot`, {type: "STREAMING"});
};

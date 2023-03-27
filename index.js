const { Client, GatewayIntentBits, InteractionType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { EmbedBuilder } = require('discord.js');
require('dotenv').config();
const mongoose = require('mongoose');
const openai = require('openai');
const mon = ()=>{
  mongoose.connect(process.env.MONGODB_URL,{keepAlive: true});
  console.log("connected to db")
}
mon()



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    



interaction.reply("you are a nigger")



  }
});


client.login(process.env.TOKEN);
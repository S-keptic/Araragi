const { Client, GatewayIntentBits, InteractionType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { EmbedBuilder } = require('discord.js');
require('dotenv').config();
const openai = require('openai');
const fetch = require("node-fetch");




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'random'){
    const anime = async()=>{
      let url = await fetch('https://api.jikan.moe/v4/random/anime')
      url = await url.json()
      url = url.data.url
      await interaction.reply(url)

    }
    anime()
  }




  

  

});



client.login(process.env.TOKEN);
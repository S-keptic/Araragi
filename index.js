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

  if (interaction.commandName === 'porn') {
    
    const waifu = async ()=>{
      let url =  await fetch('https://api.waifu.pics/nsfw/waifu')
      let data = await url.json()
      let result = data.url
      interaction.reply(result)
      console.log(result)

    }
    waifu()




  }
});



client.login(process.env.TOKEN);
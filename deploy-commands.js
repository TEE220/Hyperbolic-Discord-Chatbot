require('dotenv').config();
const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('deepseek_r1')
        .setDescription('Ask a question to DeepSeek R1')
        .addStringOption(option => 
            option.setName('question')
                .setDescription('Your question')
                .setRequired(true)
        ),
    new SlashCommandBuilder()
        .setName('hermes_3_70b')
        .setDescription('Ask a question to Hermes 3 70B')
        .addStringOption(option => 
            option.setName('question')
                .setDescription('Your question')
                .setRequired(true)
        ),
    new SlashCommandBuilder()
        .setName('qwq_32b_preview')
        .setDescription('Ask a question to QwQ 32B Preview')
        .addStringOption(option => 
            option.setName('question')
                .setDescription('Your question')
                .setRequired(true)
        ),
    new SlashCommandBuilder()
        .setName('llama_3_70b')
        .setDescription('Ask a question to Llama 3 70B')
        .addStringOption(option => 
            option.setName('question')
                .setDescription('Your question')
                .setRequired(true)
        ),
    new SlashCommandBuilder()
        .setName('deepseek_v3')
        .setDescription('Ask a question to DeepSeek V3')
        .addStringOption(option => 
            option.setName('question')
                .setDescription('Your question')
                .setRequired(true)
        )
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

(async () => {
    try {
        console.log('🔄 Deploying commands...');
        await rest.put(
            Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
            { body: commands }
        );
        console.log('✅ Successfully deployed commands.');
    } catch (error) {
        console.error('❌ Error deploying commands:', error);
    }
})();

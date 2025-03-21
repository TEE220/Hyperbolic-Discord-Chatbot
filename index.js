require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

// Debugging: Check if environment variables are loading
console.log("DEBUG - API Key:", process.env.API_KEY ? "✅ Loaded" : "❌ NOT LOADED");
console.log("DEBUG - Base URL:", process.env.BASE_URL || "❌ NOT SET");
console.log("DEBUG - Discord Token:", process.env.DISCORD_TOKEN ? "✅ Loaded" : "❌ NOT LOADED");

// Ensure all required environment variables are present
if (!process.env.API_KEY || !process.env.BASE_URL || !process.env.DISCORD_TOKEN) {
    console.error("❌ ERROR: Missing environment variables! Check your .env file.");
    process.exit(1); // Stop the bot if critical values are missing
}

// Initialize Discord Bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Bot is ready
client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

// Handle incoming messages
client.on('messageCreate', async (message) => {
    console.log(`DEBUG - Received message: "${message.content}" from ${message.author.tag}`);

    if (message.author.bot) return; // Ignore bot messages

    console.log(`DEBUG - Sending request to API...`);

    try {
        // Send user message to AI API
        const response = await axios.post(`${process.env.BASE_URL}/chat/completions`, {
            messages: [{ role: "user", content: message.content }],
            model: "meta-llama/Meta-Llama-3.1-70B-Instruct"
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.API_KEY}`
            }
        });

        console.log("DEBUG - API Response:", response.data);

        // Extract response content safely
        let botResponse = response.data?.choices?.[0]?.message?.content;

        if (!botResponse || typeof botResponse !== "string") {
            botResponse = "⚠️ No valid response from AI.";
        }

        // Ensure message doesn't exceed Discord's 2000-character limit
        if (botResponse.length > 2000) {
            botResponse = botResponse.substring(0, 1997) + "..."; // Trim response
        }

        // Send the response back to the Discord channel
        message.reply(botResponse);

    } catch (error) {
        console.error("❌ API Request Error:", error.response ? error.response.data : error.message);
        message.reply("❌ Error fetching response from API.");
    }
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN)
    .then(() => console.log("✅ Bot is running..."))
    .catch(err => {
        console.error("❌ Login Error:", err);
        process.exit(1); // Stop the bot if login fails
    });

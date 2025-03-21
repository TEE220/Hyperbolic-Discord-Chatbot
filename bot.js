require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return; // Ignore bot messages

    try {
        const response = await axios.post(
            "https://api.hyperbolic.xyz/v1/chat/completions",
            {
                model: "deepseek-ai/DeepSeek-R1", // Change model as needed
                messages: [{ role: "user", content: message.content }],
                max_tokens: 500,
                temperature: 0.7,
                top_p: 0.9
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        message.reply(response.data.choices[0].message.content);
    } catch (error) {
        console.error("❌ API Request Error:", error.response ? error.response.data : error.message);
        message.reply("⚠️ Sorry, an error occurred.");
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);


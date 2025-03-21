Hyperbolic Discord Chatbot 

The Hyperbolic models are still lagging a little, but I was able to make some adjustments to get them to function on Discord.
.

Here is a Guide on how to go about it 


First of all, you will ned the following:

-You'll need to create the discord bot here; https://discord.com/developers/applications
ensure to enable "bot" and "application.command" under OAuth2 URL Generator

-Your API keys can found on hyperbolic under the settings section
-your discord bot token can be found at bot section on the discord devlopers page, where you created the bot 
-Hyperbolic API base url: BASE_URL=https://api.hyperbolic.xyz/v1




🛠️ Installation

1️⃣ Clone the Repository
bash
git clone https://github.com/TEE220/Hyperbolic-Discord-Chatbot.git
cd Hyperbolic-Discord-Chatbot
2️⃣ Install Dependencies
bash
npm install
3️⃣ Setup Environment Variables
Create a .env file in the root directory:

bash
touch .env


Edit the file:

bash
nano .env


Add the following variables:

ini
DISCORD_TOKEN=your_discord_bot_token
API_KEY=your_api_key
BASE_URL=https://your-api-url.com

⚠️ Important: make sure you don't share your .env file!
You can safely ignore it via .gitignore.


▶️ Running the Bot

Node.js:
bash
node index.js
PM2 (Recommended for Uptime):
bash
pm2 start index.js --name "HyperbolicBot"


To check logs:

bash
pm2 logs HyperbolicBot --lines 50


NOTE!
Please this a rough tryout, be careful to reset your API keys 
I have no responsibility on that end, I'm not at expert at this
Just tried hard to make the idea a reality

Also, if you run into errors you can DM me or use debugging bots like copilot


Created this because I know some of us like Discord way better than telegram


Hyperbolic Discord Chatbot 


Here is a Guide on how to go about it 


First of all, you will ned the following:

-You'll need to create the discord bot here; https://discord.com/developers/applications
ensure to enable "bot" and "application.command" under OAuth2 URL Generator

![image](https://github.com/user-attachments/assets/d1d19a8a-c947-4710-a755-73628e7d1e3a)


-Your API keys can found on hyperbolic under the settings section
![image](https://github.com/user-attachments/assets/4fedebc0-4bb6-4195-a92b-a2967b4c2867)

-your discord bot token can be found at bot section on the discord devlopers page, where you created the bot 
-Hyperbolic API base url: BASE_URL=https://api.hyperbolic.xyz/v1


## 🛠 Installation  


**1️⃣ Clone the repository:** 

``` bash
git clone https://github.com/TEE220/Hyperbolic-Discord-Chatbot.git
cd Hyperbolic-Discord-Chatbot
```


**2️⃣ Install Dependencies**

```bash
npm install
```

**3️⃣ Setup Environment Variables**

```bash
touch .env
nano .env
```

Add the following variables:

```ini
DISCORD_TOKEN=your_discord_bot_token
API_KEY=your_api_key
BASE_URL=https://your-api-url.com
```

⚠️ Important: make sure you don't share your .env file!
You can safely ignore it via .gitignore.


## ▶️ Running the Bot

Run the bot using **Node.js**:
```bash
node index.js
```

Run the bot with PM:

first install pm

```bash
npm install -g pm2
```

Then use PM2 

```bash
pm2 start index.js --name "HyperbolicBot"
```

To check logs using PM2:

```bash
pm2 logs HyperbolicBot --lines 50
```

Now create a server and invite the bot to try it out!

Screenshots of me trying the bot out:
 
![image](https://github.com/user-attachments/assets/94c8c215-8ef4-4156-8b08-ae68e1ffa9d3)

![image](https://github.com/user-attachments/assets/2473f823-b219-42e5-ae7c-722fc421ea4c)

![image](https://github.com/user-attachments/assets/cd427d95-544c-4d03-95b5-faf1ab0eeb53)


## ⚠️ **NOTE**

Please, this is a rough tryout; be careful to reset your API keys. 
I have no responsibility on that end; I'm not an expert at this.
I just tried hard to make the idea a reality.

Also, if you run into errors you can DM me or use debugging bots like copilot


Worked on this because I know some of us like Discord way better than telegram

Goodluck!

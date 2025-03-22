## Hyperbolic Discord Chatbot Guide

This repository contains a step-by-step guide to help guide you on how you can use the Hyperbolic API to create a Discord chat bot and interact with them with more ease.

With a VPS or Gitpod, you will be able to run this with ease. I've backtested it to see it's easy to follow.

## What is Hyperbolic?

Hyperbolic is an AI cloud platform providing access to affordable, scalable GPU, and AI services.
It offers scalable GPU, high-throughput and low-latency AI inference services.

Hyperbolic aims to lower costs and increase accessibility for researchers, individuals, and data centers, as well as provide users with monetization opportunities.



## Guide on how to go about it :arrow_heading_down:


Before you start, you will ned the following:

-You'll need to create the discord bot here; https://discord.com/developers/applications
ensure to enable "bot" and "application.command" under OAuth2 URL Generator

![image](https://github.com/user-attachments/assets/d1d19a8a-c947-4710-a755-73628e7d1e3a)


-Your API keys can found on hyperbolic under the settings section
![image](https://github.com/user-attachments/assets/4fedebc0-4bb6-4195-a92b-a2967b4c2867)

-your discord bot token can be found at bot section on the discord devlopers page, where you created the bot 


-For the Hyperbolic API base url use: https://api.hyperbolic.xyz/v1


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

For the base URL use; BASE_URL=https://api.hyperbolic.xyz/v1



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

Now create a server after creating your bot and invite the bot to try it out!

## How to best get the bot invite 

Go to the sidebar the devloper webbsite where you are creating the bot; https://discord.com/developers/applications

click "OAuth2" and then enable bot and all neccessary permissions under, then generate the URL 
![image](https://github.com/user-attachments/assets/db879424-ad57-4d11-8d5c-51bc15905702)


## Screenshots of me trying mine out:
 
![image](https://github.com/user-attachments/assets/94c8c215-8ef4-4156-8b08-ae68e1ffa9d3)

![image](https://github.com/user-attachments/assets/2473f823-b219-42e5-ae7c-722fc421ea4c)

![image](https://github.com/user-attachments/assets/cd427d95-544c-4d03-95b5-faf1ab0eeb53)


Also, if you may just like to try mine out: https://discord.com/oauth2/authorize?client_id=1352038958220972083&permissions=377957218304&integration_type=0&scope=bot

## ⚠️ **NOTE**

Please, this is a rough tryout; be careful to reset your API keys. 

Worked on this because I know some of us like Discord way better than telegram

Goodluck!

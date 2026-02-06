# ⚡ Quick Start Guide

Get your PASIYA-MD WhatsApp bot running in 5 minutes!

## 🎯 Prerequisites

- A Replit account (free)
- A GitHub account (free)
- A WhatsApp account
- 5 minutes of your time

---

## 🚀 Step-by-Step Setup

### 1️⃣ Create GitHub Repository (2 minutes)

1. Go to https://github.com/new
2. Repository name: `whatsapp-bot-sessions` (or any name)
3. ⚠️ **Important**: Set to **Private**
4. Click "Create repository"

### 2️⃣ Get GitHub Token (1 minute)

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `WhatsApp Bot`
4. Expiration: `No expiration` (or 1 year)
5. Select scope: ✅ `repo` (Full control of private repositories)
6. Click "Generate token"
7. **Copy the token** (you won't see it again!)

### 3️⃣ Upload to Replit (1 minute)

1. Go to https://replit.com
2. Click "Create Repl"
3. Choose "Import from GitHub" OR click "Upload"
4. Upload all files from `whatsapp-bot-replit` folder
5. Or drag and drop the folder

### 4️⃣ Configure Secrets (1 minute)

In Replit, click the **Lock icon** (Secrets) and add:

```
GITHUB_TOKEN = paste_your_token_here
GITHUB_OWNER = your_github_username
GITHUB_REPO = whatsapp-bot-sessions
OWNER_NUMBER = your_phone_number_with_country_code
```

Example:
```
GITHUB_TOKEN = ghp_xxxxxxxxxxxxxxxxxxxx
GITHUB_OWNER = johndoe
GITHUB_REPO = whatsapp-bot-sessions
OWNER_NUMBER = 1234567890
```

### 5️⃣ Run the Bot (30 seconds)

1. Click the green **"Run"** button
2. Wait for installation (first time takes 1-2 minutes)
3. You'll see: "Server running on http://localhost:3000"

### 6️⃣ Connect WhatsApp (30 seconds)

1. Click the **web preview** in Replit (or visit the URL shown)
2. You'll see the pairing interface
3. Enter your WhatsApp number with country code
   - Example: `1234567890` (without +)
4. Click "Get Code"
5. Copy the 8-digit pairing code

### 7️⃣ Link in WhatsApp (30 seconds)

1. Open WhatsApp on your phone
2. Go to **Settings** → **Linked Devices**
3. Tap **"Link a Device"**
4. Tap **"Link with phone number instead"**
5. Enter the pairing code
6. Done! ✅

---

## ✅ Verify It's Working

Your bot should now:
- Show "Connected" in Replit console
- Respond to commands in WhatsApp
- Auto-view statuses (if enabled)

**Test command**: Send `.alive` to the bot

---

## 🌙 Enable 24/7 Uptime (Optional - 2 minutes)

### Free Method (UptimeRobot):

1. Go to https://uptimerobot.com
2. Sign up (free)
3. Add New Monitor:
   - Type: `HTTP(s)`
   - URL: `your-repl-url/health`
   - Interval: `5 minutes`
4. Save

**Your Repl URL**: Look in Replit's web preview, it's like:
`https://your-repl-name.username.repl.co`

---

## 🎉 You're Done!

Your WhatsApp bot is now:
- ✅ Running on Replit
- ✅ Connected to WhatsApp
- ✅ Storing sessions in GitHub
- ✅ (Optional) Running 24/7 with UptimeRobot

---

## 🆘 Troubleshooting

### "Failed to connect"
- Check GitHub credentials in Secrets
- Verify repository exists and is private
- Make sure token has `repo` permission

### "Invalid number"
- Use international format without +
- Example: `1234567890` not `+1234567890`
- Include country code

### "Dependencies failed to install"
- Click "Run" again
- Check internet connection
- Try: `npm install` in Shell

### "Bot not responding"
- Check bot is running (green indicator)
- Send `.alive` command
- Check Replit console for errors

---

## 📚 Learn More

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Commands**: Check bot menu with `.menu`

---

## 🎯 Next Steps

1. **Customize**: Edit `.env` for your preferences
2. **Add admins**: Edit `admin.json`
3. **Deploy**: Follow `DEPLOYMENT.md` for paid/better hosting
4. **Explore**: Try all the bot commands!

---

**Need help?** Create an issue on GitHub or check the docs!

**Happy botting! 🚀**

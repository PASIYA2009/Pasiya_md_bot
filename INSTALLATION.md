# 📦 Installation Guide - PASIYA-MD WhatsApp Bot

Complete installation instructions for all platforms.

---

## 📑 Table of Contents

1. [Requirements](#requirements)
2. [Installation Methods](#installation-methods)
3. [Replit Installation](#replit-installation)
4. [Local Installation](#local-installation)
5. [Other Platforms](#other-platforms)
6. [Configuration](#configuration)
7. [First Run](#first-run)

---

## 💻 Requirements

### Minimum Requirements:
- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher
- **RAM**: 512MB minimum
- **Storage**: 200MB free space
- **Internet**: Stable connection

### Recommended:
- **Node.js**: v20.x or latest LTS
- **RAM**: 1GB or more
- **Storage**: 1GB free space

### Accounts Needed:
- ✅ WhatsApp account
- ✅ GitHub account (free)
- ✅ Replit account (free) OR VPS/hosting

---

## 🎯 Installation Methods

Choose the method that suits you best:

| Method | Difficulty | Cost | Uptime | Best For |
|--------|-----------|------|--------|----------|
| **Replit** | ⭐ Easy | Free | 95%+ | Beginners |
| **Replit Paid** | ⭐ Easy | $7/mo | 99.9% | Best uptime |
| **Koyeb** | ⭐⭐ Medium | Free | 99%+ | Free 24/7 |
| **Local** | ⭐⭐⭐ Hard | Free | Manual | Development |
| **VPS** | ⭐⭐⭐⭐ Expert | $5+/mo | 99.9% | Full control |

---

## 🔷 Replit Installation

**Recommended for beginners** - Easiest and fastest!

### Step 1: Prepare GitHub

1. **Create GitHub Account**
   - Go to https://github.com/signup
   - Complete registration
   - Verify email

2. **Create Repository**
   - Click "+" → "New repository"
   - Name: `whatsapp-bot-sessions`
   - ⚠️ **Set to Private**
   - Click "Create repository"

3. **Generate Access Token**
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Token name: `WhatsApp Bot`
   - Expiration: No expiration
   - ✅ Check `repo` (Full control)
   - Click "Generate token"
   - **SAVE THE TOKEN** - You won't see it again!

### Step 2: Setup Replit

1. **Create Replit Account**
   - Go to https://replit.com
   - Sign up (free)
   - Verify email

2. **Create New Repl**
   - Click "Create Repl"
   - Template: "Node.js"
   - Name: `pasiya-md-bot`
   - Click "Create Repl"

3. **Upload Files**
   
   **Option A: Upload Folder**
   - Click "Files" icon
   - Drag and drop the bot folder
   - Wait for upload

   **Option B: Import from GitHub**
   - Upload bot to your GitHub first
   - In Replit: "Import from GitHub"
   - Select your repository

### Step 3: Configure Secrets

1. **Open Secrets**
   - Click the lock icon 🔒 (Secrets)
   - Or: Tools → Secrets

2. **Add Required Secrets**
   ```
   Key: GITHUB_TOKEN
   Value: ghp_your_token_here
   
   Key: GITHUB_OWNER
   Value: your_github_username
   
   Key: GITHUB_REPO
   Value: whatsapp-bot-sessions
   
   Key: OWNER_NUMBER
   Value: 1234567890
   ```

3. **Add Optional Secrets**
   ```
   Key: PREFIX
   Value: .
   
   Key: BOT_NAME
   Value: PASIYA-MD
   
   Key: AUTO_VIEW_STATUS
   Value: true
   
   Key: AUTO_LIKE_STATUS
   Value: true
   ```

### Step 4: Install & Run

1. **Install Dependencies**
   ```bash
   # In Shell tab:
   npm install
   ```

2. **Start Bot**
   - Click the green "Run" button
   - Wait for "Server running" message
   - Note your Repl URL

3. **Access Web Interface**
   - Click the web preview
   - Or visit: `https://your-repl-name.username.repl.co`

### Step 5: Connect WhatsApp

1. **Get Pairing Code**
   - Open: `your-repl-url/pair`
   - Enter phone number (with country code)
   - Example: `1234567890` (no + sign)
   - Click "Get Code"
   - Copy the 8-digit code

2. **Link in WhatsApp**
   - Open WhatsApp
   - Settings → Linked Devices
   - "Link a Device"
   - "Link with phone number instead"
   - Enter the pairing code
   - Done! ✅

---

## 💻 Local Installation

**For development or testing**

### Prerequisites Check

```bash
# Check Node.js
node -v
# Should show v18.0.0 or higher

# Check npm
npm -v
# Should show v8.0.0 or higher
```

If not installed:
- **Windows**: Download from https://nodejs.org
- **Mac**: `brew install node`
- **Linux**: `sudo apt install nodejs npm`

### Installation Steps

1. **Download Bot**
   ```bash
   # Clone or download the bot files
   cd /path/to/bot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   ```bash
   # Copy example env file
   cp .env.example .env
   
   # Edit .env
   nano .env
   # Or use any text editor
   ```

4. **Add GitHub Credentials**
   ```env
   GITHUB_TOKEN=your_token
   GITHUB_OWNER=your_username
   GITHUB_REPO=your_repo
   OWNER_NUMBER=your_number
   ```

5. **Create Directories**
   ```bash
   mkdir -p session logs
   ```

6. **Run Bot**
   ```bash
   npm start
   ```

7. **Access Interface**
   - Open browser
   - Go to: http://localhost:3000
   - Follow pairing steps

### Keep Running (Optional)

**Using PM2**:
```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start index.js --name pasiya-md

# Save PM2 config
pm2 save

# Auto-start on reboot
pm2 startup
```

**Using screen**:
```bash
# Start screen session
screen -S whatsapp-bot

# Run bot
npm start

# Detach: Ctrl+A then D
# Reattach: screen -r whatsapp-bot
```

---

## 🌐 Other Platforms

### Koyeb (Free Always-On)

1. **Create Account**
   - https://www.koyeb.com
   - Sign up free

2. **Create Service**
   - "Create Service"
   - "GitHub"
   - Select repository

3. **Configure**
   ```
   Name: pasiya-md
   Region: (closest to you)
   Instance: Free (Nano)
   Port: 3000
   ```

4. **Environment Variables**
   - Add all from Secrets
   - Same as Replit

5. **Deploy**
   - Click "Deploy"
   - Wait for build
   - Get URL

### Railway

1. **Create Account**
   - https://railway.app
   - Sign up

2. **New Project**
   - "New Project"
   - "Deploy from GitHub"
   - Select repository

3. **Configure**
   - Auto-detects Node.js
   - Add environment variables
   - Generate domain

4. **Deploy**
   - Automatic
   - Get URL

### Render

1. **Create Account**
   - https://render.com
   - Sign up

2. **New Web Service**
   - "New +"
   - "Web Service"
   - Connect GitHub

3. **Settings**
   ```
   Name: pasiya-md
   Environment: Node
   Build: npm install
   Start: npm start
   Plan: Free
   ```

4. **Environment Variables**
   - Add all secrets
   - Save

5. **Deploy**
   - Auto-deploy
   - Get URL

---

## ⚙️ Configuration

### Environment Variables

Full list of available configuration:

```env
# GitHub (Required)
GITHUB_TOKEN=your_github_token
GITHUB_OWNER=your_username
GITHUB_REPO=your_repo_name

# Bot Settings (Required)
OWNER_NUMBER=1234567890
PREFIX=.
BOT_NAME=PASIYA-MD

# Server (Optional)
PORT=3000
NODE_ENV=production

# Features (Optional)
AUTO_VIEW_STATUS=true
AUTO_LIKE_STATUS=true
AUTO_RECORDING=true
AUTO_READ=false

# Groups (Optional)
GROUP_INVITE_LINK=https://chat.whatsapp.com/xxxxx

# Newsletter (Optional)
NEWSLETTER_JID=120363404965926337@newsletter

# Channel (Optional)
CHANNEL_LINK=https://whatsapp.com/channel/xxxxx

# Keep-Alive (Optional)
REPLIT_DEPLOYMENT=true
KEEP_ALIVE_INTERVAL=300000
UPTIME_MONITOR_URL=https://monitor.example.com
```

### Admin Configuration

Edit `admin.json`:

```json
[
  "1234567890",
  "0987654321"
]
```

Add numbers in international format (no + sign).

---

## 🚀 First Run

### What to Expect

1. **Installation** (first time)
   - Takes 1-2 minutes
   - Downloads dependencies
   - Creates directories

2. **Startup**
   - Shows logo
   - Displays server URL
   - Waits for connection

3. **Connection**
   - Get pairing code
   - Link WhatsApp
   - Shows "Connected"

4. **Ready!**
   - Bot responds to commands
   - Auto-features active
   - Sessions saved

### First Commands to Try

```
.alive - Check if bot is online
.menu - Show all commands
.ping - Test response time
.system - Show system info
```

### Verify Everything Works

- [ ] Bot shows "Connected" status
- [ ] Commands respond (.alive)
- [ ] Auto-view status works (if enabled)
- [ ] Session saved to GitHub
- [ ] /health endpoint works
- [ ] Web interface accessible

---

## 🆘 Common Installation Issues

### "npm install" Fails

**Solution**:
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### "Cannot find module"

**Solution**:
```bash
# Reinstall dependencies
npm install

# Or specific package
npm install @whiskeysockets/baileys
```

### Port Already in Use

**Solution**:
```env
# Change port in .env
PORT=3001
```

Or:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### GitHub Token Invalid

**Solution**:
1. Check token is correct
2. Verify `repo` permission
3. Check not expired
4. Regenerate if needed

### "EACCES: permission denied"

**Solution**:
```bash
# Fix permissions
chmod -R 755 .
chmod +x setup.sh
```

Or run with sudo (not recommended):
```bash
sudo npm install
```

---

## 📚 Next Steps

After installation:

1. **Read Documentation**
   - README.md - Full features
   - QUICKSTART.md - Quick guide
   - DEPLOYMENT.md - 24/7 setup
   - TROUBLESHOOTING.md - Fix issues

2. **Customize Bot**
   - Edit .env settings
   - Add admins
   - Configure features

3. **Deploy 24/7**
   - Setup UptimeRobot
   - Or use paid deployment
   - See DEPLOYMENT.md

4. **Explore Commands**
   - Send .menu to bot
   - Try all features
   - Customize as needed

---

## ✅ Installation Checklist

Before asking for help:

- [ ] Node.js 18+ installed
- [ ] npm working
- [ ] GitHub account created
- [ ] Repository created (private)
- [ ] Access token generated
- [ ] All secrets configured
- [ ] npm install completed
- [ ] Bot starts without errors
- [ ] Web interface accessible
- [ ] Pairing code obtained
- [ ] WhatsApp connected
- [ ] Commands responding

---

## 💡 Pro Tips

1. **Always use HTTPS**
   - Replit provides SSL
   - Secure connections

2. **Backup Regularly**
   - Download session from GitHub
   - Save .env file
   - Export admin list

3. **Monitor Usage**
   - Check Replit resources
   - GitHub API limits
   - WhatsApp rate limits

4. **Stay Updated**
   - Pull latest code
   - Update dependencies
   - Check announcements

---

**Installation complete! 🎉**

See QUICKSTART.md for quick setup or README.md for full documentation.

Need help? Check TROUBLESHOOTING.md or create an issue!

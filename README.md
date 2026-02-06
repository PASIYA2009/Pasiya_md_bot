# 🤖 PASIYA-MD WhatsApp Bot - Replit Edition

A powerful WhatsApp bot with multi-number support, optimized for 24/7 hosting on Replit.

## ✨ Features

- 🔄 Multi-number support
- 📱 QR code & pairing code authentication
- 🌐 Web-based configuration interface
- 💾 GitHub-based session storage
- ⚡ Auto-reconnection system
- 🔔 Status auto-view and auto-like
- 📊 Admin commands and management
- 🎯 Custom prefix support
- 🌙 24/7 uptime with keep-alive system

## 🚀 Quick Start on Replit

### Step 1: Create Replit Project

1. Go to [Replit](https://replit.com)
2. Click "Create Repl"
3. Choose "Import from GitHub" or "Upload files"
4. Upload this project

### Step 2: Configure Environment Variables

Click on "Secrets" (lock icon) in Replit and add these variables:

```env
# Required
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_OWNER=your_github_username
GITHUB_REPO=your_repository_name
OWNER_NUMBER=94741856766

# Optional
BOT_NAME=PASIYA-MD
PREFIX=.
AUTO_VIEW_STATUS=true
AUTO_LIKE_STATUS=true
GROUP_INVITE_LINK=https://chat.whatsapp.com/your_group_invite
CHANNEL_LINK=https://whatsapp.com/channel/your_channel
```

### Step 3: Setup GitHub Repository

1. Create a new **private** GitHub repository
2. Create a Personal Access Token:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name like "WhatsApp Bot"
   - Select scopes: `repo` (Full control of private repositories)
   - Generate and copy the token
3. Add the token to Replit Secrets as `GITHUB_TOKEN`

### Step 4: Install Dependencies

In Replit Shell, run:
```bash
npm install
```

### Step 5: Start the Bot

Click the "Run" button in Replit, or in the Shell:
```bash
npm start
```

### Step 6: Connect WhatsApp

1. Open your Replit URL (e.g., `https://your-repl.username.repl.co`)
2. You'll see the pairing interface
3. Enter your WhatsApp number (with country code)
4. You'll receive a pairing code
5. Open WhatsApp → Linked Devices → Link a Device → Link with phone number
6. Enter the code

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `GITHUB_TOKEN` | GitHub personal access token | - | ✅ |
| `GITHUB_OWNER` | Your GitHub username | - | ✅ |
| `GITHUB_REPO` | Repository for session storage | - | ✅ |
| `OWNER_NUMBER` | Bot owner's WhatsApp number | 94741856766 | ✅ |
| `PREFIX` | Command prefix | . | ❌ |
| `BOT_NAME` | Bot display name | PASIYA-MD | ❌ |
| `PORT` | Server port | 3000 | ❌ |
| `AUTO_VIEW_STATUS` | Auto view statuses | true | ❌ |
| `AUTO_LIKE_STATUS` | Auto like statuses | true | ❌ |
| `GROUP_INVITE_LINK` | Default group invite | - | ❌ |
| `CHANNEL_LINK` | Channel link | - | ❌ |

## 🌐 24/7 Uptime Setup

### Method 1: Replit Deployments (Recommended)

1. In your Repl, click "Deploy"
2. Choose "Autoscale" or "Reserved VM"
3. Follow the deployment steps
4. Your bot will run 24/7 automatically

### Method 2: UptimeRobot (Free)

1. Go to [UptimeRobot](https://uptimerobot.com)
2. Create a free account
3. Add New Monitor:
   - Monitor Type: HTTP(s)
   - Friendly Name: PASIYA-MD Bot
   - URL: `https://your-repl.username.repl.co/health`
   - Monitoring Interval: 5 minutes
4. Click "Create Monitor"

### Method 3: Koyeb (Free Tier)

1. Go to [Koyeb](https://www.koyeb.com)
2. Sign up for free account
3. Deploy from GitHub
4. Select your repository
5. Set environment variables
6. Deploy (free tier includes always-on)

## 📡 API Endpoints

### GET /
Main web interface

### GET /pair
WhatsApp pairing page

### GET /code?number=1234567890
Get pairing code for WhatsApp

### GET /health
Health check endpoint (for uptime monitors)
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 12345
}
```

### GET /status
Bot status information
```json
{
  "status": "running",
  "botName": "PASIYA-MD",
  "activeSessions": 1,
  "uptime": 12345
}
```

### GET /reconnect
Reconnect all saved sessions

### GET /sessions
List all active sessions

## 🛠️ Commands

Bot commands are defined in `pair.js`. The prefix is configurable (default: `.`)

Example commands:
- `.menu` - Show command menu
- `.alive` - Check if bot is running
- `.ping` - Check response time
- `.system` - System information
- `.restart` - Restart bot (owner only)

## 📁 Project Structure

```
whatsapp-bot-replit/
├── index.js              # Main server file
├── pair.js               # WhatsApp connection & commands
├── msg.js                # Message handler
├── keepalive.js          # 24/7 uptime utility
├── main.html             # Web interface
├── package.json          # Dependencies
├── .replit               # Replit configuration
├── replit.nix            # System dependencies
├── .env.example          # Environment variables template
├── admin.json            # Admin list
└── session/              # Session files (auto-generated)
```

## 🔒 Security Best Practices

1. **Keep GitHub Token Secret**: Never share or commit your GitHub token
2. **Use Private Repository**: Store sessions in a private GitHub repository
3. **Regular Updates**: Keep dependencies updated
4. **Backup Sessions**: Regularly backup your session files from GitHub
5. **Limit Admin Access**: Only add trusted numbers to admin list

## 🐛 Troubleshooting

### Bot keeps disconnecting
- Check if GitHub token is valid
- Ensure repository exists and is accessible
- Verify internet connection
- Check Replit logs for errors

### Pairing code not working
- Ensure number is in international format (+countrycode)
- Try refreshing the page
- Check if WhatsApp is updated
- Verify firewall/network settings

### Commands not responding
- Check prefix configuration
- Verify bot is connected (check /status)
- Ensure admin permissions if required
- Check logs for errors

### Session not saving
- Verify GitHub credentials
- Check repository permissions
- Ensure internet connectivity
- Look for API rate limit errors

## 📊 Monitoring

Monitor your bot's performance:

1. **Replit Console**: Real-time logs
2. **UptimeRobot Dashboard**: Uptime statistics
3. **GitHub Activity**: Session storage activity
4. **/status endpoint**: JSON status data

## 🔄 Updates

To update your bot:

1. Backup your `.env` secrets
2. Pull latest changes from repository
3. Run `npm install` to update dependencies
4. Restart the bot

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 💬 Support

For support:
- Create an issue on GitHub
- Join our WhatsApp channel
- Check documentation

## ⚠️ Disclaimer

This bot is for educational purposes. Use responsibly and respect WhatsApp's Terms of Service.

---

**Made with ❤️ by PASIYA BOY**

**Optimized for Replit by Claude**

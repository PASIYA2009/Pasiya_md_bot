# ⚡ PASIYA MD - Quick Reference Card

## 🎯 5-Minute Setup Checklist

```
□ 1. Upload to Replit
□ 2. Add GitHub Secrets (4 values)
□ 3. Click "Run"
□ 4. Visit /pair page
□ 5. Enter phone number
□ 6. Link in WhatsApp
□ 7. Test with .alive
```

---

## 🔑 Required Secrets (in Replit)

```
GITHUB_TOKEN    = ghp_xxxxxxxxxxxxx
GITHUB_OWNER    = your_github_username
GITHUB_REPO     = whatsapp-bot-sessions
OWNER_NUMBER    = 94771234567
```

---

## 🌐 Important URLs

```
Main Page:     https://your-repl.username.repl.co
Pairing:       https://your-repl.username.repl.co/pair
Health Check:  https://your-repl.username.repl.co/health
Status:        https://your-repl.username.repl.co/status
```

---

## 📱 Pairing Steps

```
1. Open: your-bot-url/pair
2. Enter: 94771234567 (with country code, no +)
3. Click: "Get Code"
4. Copy: 8-digit code (XXXX-XXXX)
5. WhatsApp: Settings → Linked Devices
6. Tap: "Link a Device"
7. Select: "Link with phone number instead"
8. Enter: Your code
9. Wait: 2 minutes
10. Test: Send .alive
```

---

## 🤖 Basic Commands

```
.alive    - Check if bot is online
.menu     - Show all commands
.ping     - Test response time
.system   - System information
.restart  - Restart bot (owner only)
```

---

## 📁 File Structure

```
whatsapp-bot-replit/
├── START_HERE.md           ← Read first!
├── QUICKSTART.md           ← 5-min guide
├── PAIRING_GUIDE.md        ← Pairing help
├── README.md               ← Full docs
├── TROUBLESHOOTING.md      ← Fix issues
├── index.js                ← Main server
├── pair.js                 ← WhatsApp logic
├── main.html               ← Pairing page
└── .env.example            ← Config template
```

---

## 🐛 Common Issues & Fixes

**"Invalid number format"**
→ Use: 94771234567 (country code, no +)

**"Service Unavailable"**
→ Check bot is running in Replit

**Code doesn't work**
→ Get fresh code, use within 60 seconds

**Bot disconnects**
→ Verify GitHub token & repo settings

**No response**
→ Check prefix is . (dot) by default

---

## 🌙 24/7 Uptime Setup

**Free Method:**
1. Go to uptimerobot.com
2. Create monitor
3. Type: HTTP(s)
4. URL: your-repl-url/health
5. Interval: 5 minutes

**Paid Method:**
- Replit Deployment: $7/month
- Always-on guaranteed
- Click "Deploy" button

---

## 📊 Health Check

```bash
# Quick test
curl https://your-repl-url/health

# Should return:
{
  "status": "ok",
  "uptime": 12345,
  "timestamp": "2024-..."
}
```

---

## 🔒 Security Checklist

```
✓ GitHub repository is PRIVATE
✓ Token has REPO permission
✓ Secrets in Replit (not in code)
✓ Session files NOT in public repo
✓ .gitignore includes session/
```

---

## 💡 Pro Tips

1. **Bookmark pairing URL** for easy access
2. **Test locally first** before deploying
3. **Backup sessions** from GitHub regularly
4. **Monitor uptime** with UptimeRobot
5. **Read PAIRING_GUIDE.md** for detailed steps

---

## 🆘 Get Help

**Order:**
1. Check TROUBLESHOOTING.md
2. Verify secrets are correct
3. Check Replit console logs
4. Test /health endpoint
5. Create GitHub issue

---

## 📞 Support Resources

- **Documentation**: 7 .md guide files
- **Console**: Replit logs show errors
- **GitHub**: Check session files
- **WhatsApp**: Test with commands

---

## ✨ Features Enabled by Default

```
✓ Auto-view status
✓ Auto-like status
✓ Auto-recording
✓ Multi-number support
✓ Session backup (GitHub)
✓ Auto-reconnection
✓ Keep-alive system
```

---

## 🎯 Success Indicators

```
✅ Green "Run" in Replit
✅ "Server running" in console
✅ /health returns {"status":"ok"}
✅ Pairing page loads
✅ Code generated successfully
✅ WhatsApp shows linked device
✅ Bot responds to .alive
✅ Session saved in GitHub
```

---

## 📝 Number Format Examples

```
✅ CORRECT:
94771234567    (Sri Lanka)
11234567890    (USA)
919876543210   (India)
5511987654321  (Brazil)

❌ WRONG:
+94771234567   (has +)
94 77 123 4567 (has spaces)
94-77-1234567  (has dashes)
771234567      (no country code)
```

---

## 🚀 Deployment Platforms

**Replit** (Recommended)
- Easiest setup
- Free tier available
- $7/mo for 24/7

**Koyeb** (Free 24/7)
- Always-on free tier
- Good alternative

**Railway** ($5 credit)
- Hobby plan
- Good performance

**Local** (Development)
- Full control
- Manual operation

---

## 📅 Maintenance Tasks

**Daily:**
- Check bot is responding

**Weekly:**
- Verify uptime percentage
- Check session backups

**Monthly:**
- Update dependencies
- Review error logs
- Backup important data

---

## 🎨 Customization

```env
# Change these in .env or Replit Secrets:
PREFIX=!              (default: .)
BOT_NAME=MyBot        (default: PASIYA MD)
AUTO_VIEW_STATUS=true (default: true)
AUTO_LIKE_STATUS=true (default: true)
```

---

**Print this card for quick reference!**

**More details:** See documentation files in the folder.

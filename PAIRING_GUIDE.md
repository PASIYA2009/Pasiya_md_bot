# 📱 PASIYA MD - Pairing Guide

## Complete Step-by-Step Instructions to Connect Your Bot

---

## 🎯 What You'll Do

Connect your WhatsApp bot in **5 minutes** using the PASIYA MD pairing interface.

---

## 📋 Before You Start

Make sure you have:
- ✅ Deployed the bot to Replit (or other platform)
- ✅ Bot is running (check console shows "Server running")
- ✅ Your WhatsApp phone number ready
- ✅ WhatsApp app on your phone

---

## 🚀 Step-by-Step Pairing Process

### Step 1: Open Pairing Interface

1. **Access the Web Interface**
   - In Replit: Click the web preview icon
   - Or visit your bot's URL directly
   - Example: `https://your-repl-name.username.repl.co`

2. **You'll See the PASIYA MD Page**
   - Beautiful futuristic interface
   - Title: "PASIYA MD"
   - Subtitle: "WhatsApp Bot Connection"

---

### Step 2: Enter Your Phone Number

1. **In the Input Field:**
   - Enter your WhatsApp number
   - **Include country code** (without + sign)
   - **No spaces or dashes**

2. **Examples:**
   ```
   ✅ CORRECT:
   - Sri Lanka: 94771234567
   - USA: 11234567890
   - India: 919876543210
   - Brazil: 5511987654321
   
   ❌ WRONG:
   - +94771234567 (don't include +)
   - 94 77 123 4567 (no spaces)
   - 94-77-1234567 (no dashes)
   ```

3. **Click "Get Code" Button**
   - Wait 2-3 seconds
   - You'll see "Generating pairing code..."

---

### Step 3: Get Your Pairing Code

**The page will display:**

```
╔═══════════════════════════╗
║  📋 CODE: 12AB-CD34       ║
╚═══════════════════════════╝
```

**Features:**
- ✨ Animated pulsing effect
- 🖱️ Click to copy automatically
- 💾 Code is 8 characters (format: XXXX-XXXX)

**Below the code, you'll see:**

```
ℹ️ HOW TO CONNECT

1. Open WhatsApp on your phone
2. Go to Settings → Linked Devices
3. Tap "Link a Device"
4. Select "Link with phone number instead"
5. Enter this code: 12AB-CD34

⏱️ Bot will be ready in ~2 minutes
```

---

### Step 4: Link in WhatsApp

**Now on your phone:**

1. **Open WhatsApp**
   - Make sure it's updated to latest version

2. **Go to Settings**
   - iOS: Tap "Settings" at bottom
   - Android: Tap ⋮ (three dots) → Settings

3. **Tap "Linked Devices"**
   - You'll see any existing linked devices
   - Tap the green button

4. **Tap "Link a Device"**
   - A QR scanner opens
   - Don't use QR code!

5. **Tap "Link with phone number instead"**
   - At the bottom of the screen
   - Small blue text

6. **Enter the Pairing Code**
   - Type the code from the website
   - Format: XXXX-XXXX
   - Example: `12AB-CD34`

7. **Tap "Next" or "Link Device"**
   - WhatsApp will verify the code
   - Connection starts immediately

---

### Step 5: Wait for Connection

**What happens now:**

1. **On Your Phone:**
   - WhatsApp shows "Linking device..."
   - Progress indicator
   - Takes 10-30 seconds

2. **In Replit Console:**
   - You'll see connection messages
   - "Connecting to WhatsApp..."
   - "Connected successfully!"
   - Session saved to GitHub

3. **On the Website:**
   - After ~30 seconds
   - Green success message appears:
   ```
   ✅ BOT CONNECTED SUCCESSFULLY!
   Your PASIYA MD bot is now ready to use!
   Send .alive to test
   ```

---

### Step 6: Test Your Bot

**Send a test message:**

1. **In WhatsApp:**
   - Send message to yourself OR
   - Send to any chat

2. **Type:** `.alive`

3. **Bot should reply:**
   ```
   ✅ PASIYA MD is ALIVE!
   
   Uptime: X minutes
   Platform: Replit
   Status: Online
   ```

**Other test commands:**
- `.menu` - See all commands
- `.ping` - Check response time
- `.system` - System information

---

## ⏱️ Timeline

Here's what to expect:

```
0:00  - Enter phone number
0:05  - Click "Get Code"
0:10  - Code appears
0:15  - Open WhatsApp
0:30  - Link device
0:45  - Bot connecting
1:00  - Bot connected!
2:00  - Bot fully ready
5:00  - Session saved to GitHub
```

**Total Time: ~2-5 minutes**

---

## ✅ Success Indicators

**You know it worked when:**

1. ✅ Green checkmark appears on webpage
2. ✅ "Connected successfully" in Replit console
3. ✅ Bot appears in WhatsApp Linked Devices
4. ✅ Bot responds to `.alive` command
5. ✅ Session file created in GitHub repository

---

## 🔄 What Happens After Connection

**Automatic Actions:**

1. **Session Saved**
   - Credentials stored in GitHub
   - Repository: `session/empire_NUMBER_TIMESTAMP.json`
   - Config file created

2. **Bot Activates**
   - Starts listening for messages
   - Auto-features enabled (if configured)
   - Ready to respond to commands

3. **Keep-Alive Starts**
   - Bot pings itself every 4 minutes
   - Stays online 24/7
   - Auto-reconnects if disconnected

4. **Features Enabled:**
   - ✨ Auto-view status (if ON)
   - ❤️ Auto-like status (if ON)
   - 🎤 Auto-recording (if ON)
   - 📝 Auto-read messages (if ON)

---

## 🎨 Interface Features

### Visual Elements:

1. **Futuristic Design**
   - Purple and cyan color scheme
   - Animated particles
   - Glowing effects

2. **Interactive Elements**
   - Click code to copy
   - Animated loading states
   - Success/error animations

3. **Responsive Design**
   - Works on mobile
   - Works on desktop
   - Adapts to screen size

### User Experience:

- 🔵 Clear instructions
- 🟢 Visual feedback
- 🟡 Error messages
- 🔴 Success confirmation

---

## 🐛 Troubleshooting

### "Invalid number format"

**Problem:** Number too short or wrong format

**Solution:**
- Must be at least 11 digits
- Include country code
- Remove + sign and spaces
- Example: `94771234567`

---

### "Service Unavailable"

**Problem:** Bot not responding

**Solution:**
1. Check bot is running (Replit console)
2. Verify /health endpoint works
3. Restart the bot
4. Wait 30 seconds and try again

---

### "Code doesn't work in WhatsApp"

**Problem:** Code rejected or expired

**Solutions:**
1. Get a fresh code (codes expire in 60 seconds)
2. Type code carefully (exact format)
3. Make sure WhatsApp is updated
4. Try different phone/device

---

### "No success message appears"

**Problem:** Connected but no confirmation

**Solutions:**
1. Wait up to 2 minutes
2. Check Replit console for "Connected"
3. Test with `.alive` command
4. Check GitHub for session file

---

### "Bot disconnects immediately"

**Problem:** Connection drops

**Solutions:**
1. Check GitHub credentials are correct
2. Verify repository is private
3. Ensure token has repo permission
4. Check internet connection

---

## 🔒 Security Tips

1. **Keep Code Private**
   - Don't share pairing code
   - It's like a password
   - Get new code each time

2. **Use Private Repository**
   - GitHub repo must be private
   - Don't share session files
   - Don't commit to public repos

3. **Monitor Linked Devices**
   - Check WhatsApp → Linked Devices
   - Remove unknown devices
   - Bot appears as "PASIYA MD"

---

## 📊 What Gets Stored

**In GitHub Repository:**

```
session/
├── empire_94771234567_1234567890.json  (Your session)
├── config_94771234567.json             (Your config)
└── numbers.json                        (Connected numbers)
```

**Session File Contains:**
- Authentication credentials
- Encryption keys
- Device information
- NOT your messages (encrypted by WhatsApp)

---

## 🎯 Next Steps After Pairing

1. **Customize Settings**
   - Edit `.env` file
   - Change prefix
   - Enable/disable features

2. **Add Admins**
   - Edit `admin.json`
   - Add phone numbers
   - Access admin commands

3. **Enable 24/7**
   - Setup UptimeRobot
   - Or use Replit Deployment
   - See DEPLOYMENT.md

4. **Explore Commands**
   - Send `.menu` for list
   - Try all features
   - Customize as needed

---

## 💡 Pro Tips

1. **Save the Code**
   - Click to copy automatically
   - Paste in notes temporarily
   - Use within 60 seconds

2. **Use Good Internet**
   - Stable connection helps
   - WiFi recommended
   - Avoid mobile data (can be slow)

3. **One Device at a Time**
   - Link one phone first
   - Test it works
   - Then add more if needed

4. **Bookmark the Page**
   - Save pairing URL
   - Easy to reconnect later
   - Share with team members

---

## 🆘 Still Need Help?

1. **Check Documentation:**
   - START_HERE.md
   - QUICKSTART.md
   - TROUBLESHOOTING.md

2. **Verify Setup:**
   - Bot is running
   - Environment variables set
   - GitHub configured

3. **Get Support:**
   - Create GitHub issue
   - Join WhatsApp group
   - Check FAQ

---

## 📞 Support Channels

- **Documentation**: All .md files
- **GitHub Issues**: Report problems
- **WhatsApp Channel**: Get help
- **Community**: Ask questions

---

**Ready to pair? Let's go! 🚀**

**URL:** `your-repl-url/pair` or just visit the main page!

# 🔧 Troubleshooting Guide

Common issues and their solutions for PASIYA-MD WhatsApp Bot.

---

## 📑 Table of Contents

1. [Connection Issues](#connection-issues)
2. [Pairing Problems](#pairing-problems)
3. [Command Issues](#command-issues)
4. [Session Problems](#session-problems)
5. [Performance Issues](#performance-issues)
6. [Deployment Issues](#deployment-issues)

---

## 🔌 Connection Issues

### Bot Won't Connect

**Symptoms**:
- "Connecting..." message stays forever
- No QR code or pairing code appears
- Console shows connection errors

**Solutions**:

1. **Check GitHub Credentials**
   ```bash
   # Verify in Replit Secrets:
   GITHUB_TOKEN = correct?
   GITHUB_OWNER = your username?
   GITHUB_REPO = exists and is private?
   ```

2. **Verify Repository**
   - Go to GitHub
   - Check repository exists
   - Ensure it's **private**
   - Verify you have access

3. **Check Token Permissions**
   - Token needs `repo` scope
   - Regenerate if expired
   - Update in Secrets

4. **Restart the Bot**
   - Stop the Repl
   - Clear console
   - Click "Run" again

### Connection Drops Frequently

**Symptoms**:
- Bot connects then disconnects
- "Connection lost" in logs
- Needs re-pairing often

**Solutions**:

1. **Enable Keep-Alive**
   ```env
   # In .env or Secrets
   REPLIT_DEPLOYMENT=true
   ```

2. **Setup UptimeRobot**
   - Monitor: `your-repl-url/health`
   - Interval: 5 minutes
   - See DEPLOYMENT.md

3. **Check Internet Connection**
   - Replit status: https://status.replit.com
   - Your network connection
   - GitHub API status

4. **Upgrade Replit**
   - Free tier has limitations
   - Consider paid deployment
   - See DEPLOYMENT.md options

---

## 📱 Pairing Problems

### Pairing Code Not Working

**Symptoms**:
- WhatsApp rejects the code
- "Invalid code" error
- Code expires too quickly

**Solutions**:

1. **Number Format**
   ```
   ✅ Correct: 1234567890
   ❌ Wrong: +1234567890
   ❌ Wrong: +1 234 567 890
   ❌ Wrong: 1-234-567-890
   ```

2. **Fresh Code**
   - Request new code
   - Use within 60 seconds
   - Don't refresh page

3. **WhatsApp Updated?**
   - Update WhatsApp to latest
   - Try on different device
   - Use official WhatsApp

4. **Clear WhatsApp Cache** (Android)
   - Settings → Apps → WhatsApp
   - Storage → Clear Cache
   - Restart WhatsApp
   - Try pairing again

### Can't Get Pairing Code

**Symptoms**:
- /pair page doesn't load
- "Get Code" button does nothing
- No code displayed

**Solutions**:

1. **Check Bot is Running**
   - Green indicator in Replit
   - Console shows "Server running"
   - Visit /health endpoint

2. **Try Different Browser**
   - Clear browser cache
   - Try incognito mode
   - Use different browser

3. **Check Console**
   - Open browser console (F12)
   - Look for JavaScript errors
   - Check network tab

4. **Verify Endpoint**
   ```
   /pair - Should load page
   /code?number=1234567890 - Should return code
   ```

---

## 💬 Command Issues

### Commands Not Responding

**Symptoms**:
- Bot doesn't reply to commands
- Commands work sometimes
- No error messages

**Solutions**:

1. **Check Prefix**
   ```env
   # Default is .
   PREFIX=.
   
   # Try commands like:
   .alive
   .menu
   .ping
   ```

2. **Verify Bot Connected**
   - Check /status endpoint
   - Look for green checkmark in WhatsApp
   - Console should show "connected"

3. **Admin Commands**
   - Some commands need admin
   - Check admin.json
   - Add your number:
   ```json
   ["1234567890"]
   ```

4. **Rate Limiting**
   - Wait 5 seconds between commands
   - Don't spam
   - Check for cooldown messages

### Specific Command Fails

**Symptoms**:
- One command doesn't work
- Others work fine
- Error message appears

**Solutions**:

1. **Check Command Syntax**
   - Use `.menu` to see correct syntax
   - Some need arguments
   - Example: `.kick @user` not `.kick`

2. **Missing Dependencies**
   ```bash
   # In Replit Shell:
   npm install
   ```

3. **Check Logs**
   - Look at Replit console
   - Find error message
   - Google the error

4. **Update Bot**
   - Pull latest code
   - Run `npm install`
   - Restart

---

## 💾 Session Problems

### Session Not Saving

**Symptoms**:
- Need to re-pair after restart
- GitHub has no session files
- "Session not found" error

**Solutions**:

1. **Verify GitHub Setup**
   ```bash
   # Check these exist:
   https://github.com/YOUR_USERNAME/YOUR_REPO/tree/main/session
   
   # Should contain:
   - empire_NUMBER_TIMESTAMP.json
   - config_NUMBER.json
   ```

2. **Check Token Permissions**
   - Token needs write access
   - Scope: `repo` (full control)
   - Not expired

3. **Repository Settings**
   - Must be private
   - You have write access
   - Not archived or locked

4. **Manual Backup**
   ```bash
   # Download from GitHub
   # Save locally
   # Re-upload if needed
   ```

### Multiple Sessions Created

**Symptoms**:
- Many session files in GitHub
- Bot creates new session each time
- Storage filling up

**Solutions**:

1. **Auto-Cleanup Enabled**
   - Bot should clean old sessions
   - Check logs for cleanup messages

2. **Manual Cleanup**
   - Go to GitHub repository
   - Keep latest session file only
   - Delete old ones

3. **Don't Re-pair**
   - Use existing session
   - Only re-pair if necessary
   - Bot should auto-reconnect

---

## ⚡ Performance Issues

### Bot is Slow

**Symptoms**:
- Commands take long to respond
- Messages delayed
- Bot lags

**Solutions**:

1. **Check Replit Resources**
   - Free tier has limits
   - Upgrade for more power
   - Monitor usage

2. **Optimize Commands**
   - Remove heavy processing
   - Use async operations
   - Add timeouts

3. **Clear Logs**
   ```bash
   # In Shell:
   rm -rf logs/*
   # Restart bot
   ```

4. **Reduce Features**
   ```env
   AUTO_VIEW_STATUS=false
   AUTO_LIKE_STATUS=false
   ```

### High Memory Usage

**Symptoms**:
- "Out of memory" errors
- Bot crashes randomly
- Slow performance

**Solutions**:

1. **Restart Regularly**
   - Add auto-restart
   - Use deployment with more RAM
   - Monitor memory

2. **Clear Cache**
   ```bash
   # Delete temporary files
   rm -rf tmp/*
   rm -rf session/*.tmp
   ```

3. **Limit Sessions**
   - Run one number at a time
   - Clean old sessions
   - Don't overload

---

## 🚀 Deployment Issues

### Replit Keeps Sleeping

**Symptoms**:
- Bot goes offline after 1 hour
- Need to manually wake it
- Inconsistent uptime

**Solutions**:

1. **Setup UptimeRobot**
   - See DEPLOYMENT.md
   - Monitor /health endpoint
   - Free 5-minute checks

2. **Enable Keep-Alive**
   ```env
   REPLIT_DEPLOYMENT=true
   KEEP_ALIVE_INTERVAL=300000
   ```

3. **Upgrade Replit**
   - Paid deployment ($7/month)
   - Always-on guarantee
   - Better resources

4. **Alternative Platforms**
   - Koyeb (free, always-on)
   - Railway ($5 credit/month)
   - Render (free tier)

### Deployment Failed

**Symptoms**:
- Build errors
- Won't start
- Red error messages

**Solutions**:

1. **Check Logs**
   - Read error message
   - Find the failing step
   - Fix the issue

2. **Common Errors**:

   **"Cannot find module"**
   ```bash
   npm install
   ```

   **"Port already in use"**
   ```env
   # Change port
   PORT=3001
   ```

   **"Permission denied"**
   ```bash
   chmod +x setup.sh
   ```

3. **Reset Deployment**
   - Delete node_modules
   - Delete package-lock.json
   - Run: `npm install`
   - Try again

4. **Environment Variables**
   - All secrets set?
   - No typos?
   - Correct format?

---

## 🆘 Emergency Fixes

### Complete Reset

If nothing works:

1. **Backup Important Data**
   ```bash
   # Download from GitHub:
   - Session files
   - Config files
   - admin.json
   ```

2. **Clean Installation**
   ```bash
   # Delete everything
   rm -rf node_modules
   rm -rf session
   rm package-lock.json
   
   # Fresh install
   npm install
   ```

3. **Re-configure**
   - Add all secrets again
   - Update .env
   - Check admin.json

4. **Re-pair WhatsApp**
   - Get new pairing code
   - Link in WhatsApp
   - Wait for connection

### Get Help

Still stuck?

1. **Check Logs First**
   - Replit console
   - Browser console (F12)
   - GitHub Actions (if using)

2. **Search Existing Issues**
   - GitHub repository issues
   - Similar problems solved?
   - Solutions in comments?

3. **Create New Issue**
   - Include error messages
   - Steps to reproduce
   - Your setup details
   - Screenshots help!

4. **Community Support**
   - WhatsApp group
   - Discord server
   - Telegram channel

---

## 📋 Diagnostic Checklist

Before asking for help, check:

- [ ] Bot is running (green in Replit)
- [ ] All secrets are set correctly
- [ ] GitHub repository exists and is private
- [ ] GitHub token has `repo` permission
- [ ] WhatsApp is updated to latest version
- [ ] Number format is correct (no + or spaces)
- [ ] Tried restarting the bot
- [ ] Checked Replit console for errors
- [ ] Verified /health endpoint works
- [ ] Looked at GitHub for session files
- [ ] Read error messages carefully
- [ ] Tried suggested solutions above

---

## 🔍 Debug Mode

Enable detailed logging:

```env
# In .env or Secrets
DEBUG=true
NODE_ENV=development
LOG_LEVEL=debug
```

Then check console for detailed info.

---

## 📞 Contact Support

- **GitHub Issues**: Report bugs
- **Documentation**: README.md, DEPLOYMENT.md
- **WhatsApp Group**: Ask community
- **Email Support**: (if available)

---

**Remember**: Most issues are simple configuration errors. Double-check your setup first!

Good luck! 🍀

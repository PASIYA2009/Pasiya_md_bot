# 🚀 Deployment Guide - 24/7 Uptime

This guide will help you deploy your WhatsApp bot with 24/7 uptime on Replit and other platforms.

## 📋 Table of Contents

1. [Replit Deployment](#replit-deployment)
2. [UptimeRobot Setup](#uptimerobot-setup)
3. [Alternative Platforms](#alternative-platforms)
4. [Troubleshooting](#troubleshooting)

---

## 1. Replit Deployment

### Option A: Replit Deployments (Paid - Recommended for 100% uptime)

**Cost**: Starting at $7/month for Reserved VM

**Steps**:

1. **Open your Repl**
   - Go to your Replit dashboard
   - Open your WhatsApp bot project

2. **Click Deploy Button**
   - Look for "Deploy" button in the top right
   - Choose deployment type:
     - **Autoscale**: Scales based on traffic ($0.002/hr + $2/GB egress)
     - **Reserved VM**: Always-on VM (starts at $7/month)

3. **Configure Deployment**
   - Select region (choose closest to you)
   - Set environment variables (copy from Secrets)
   - Review and deploy

4. **Domain Setup**
   - Get custom domain: `your-bot.repl.co`
   - Or use custom domain (optional)

5. **Monitor Deployment**
   - Check deployment logs
   - Verify `/health` endpoint
   - Test bot connection

**Pros**:
- ✅ True 24/7 uptime
- ✅ Auto-scaling
- ✅ Built-in monitoring
- ✅ Easy setup

**Cons**:
- ❌ Costs money

---

### Option B: Replit + UptimeRobot (Free - Good for 99% uptime)

**Cost**: Free

**Limitations**: 
- Free Repls sleep after 1 hour of inactivity
- UptimeRobot pings every 5 minutes to keep it awake
- ~1 hour downtime per day during maintenance

**Steps**:

1. **Keep your Repl running**
   - Make sure "Always On" is enabled in your Repl settings (if available)
   - The built-in keep-alive system will ping itself

2. **Setup External Monitor** (See UptimeRobot section below)

---

## 2. UptimeRobot Setup

**Website**: https://uptimerobot.com

**Steps**:

1. **Create Account**
   - Go to UptimeRobot
   - Sign up (free account)
   - Verify email

2. **Add New Monitor**
   ```
   Monitor Type: HTTP(s)
   Friendly Name: PASIYA-MD WhatsApp Bot
   URL: https://your-username.repl.co/health
   Monitoring Interval: 5 minutes (free)
   Monitor Timeout: 30 seconds
   ```

3. **Alert Contacts** (Optional)
   - Add email for alerts
   - Get notified if bot goes down
   - Set up SMS alerts (limited free)

4. **Advanced Settings**
   ```
   HTTP Method: GET (HEAD)
   HTTP Status Code: 200
   Keywords to Search: "ok"
   ```

5. **Save Monitor**
   - Click "Create Monitor"
   - Wait for first check

6. **Verify Working**
   - Check dashboard
   - Should show "Up"
   - Response time ~200-500ms

**Dashboard**:
- Uptime percentage
- Response time graph
- Downtime alerts
- Historical data

---

## 3. Alternative Platforms

### A. Koyeb (Free Tier - Best Free Alternative)

**Website**: https://www.koyeb.com

**Features**:
- ✅ Always-on (no sleeping)
- ✅ Free tier: 512MB RAM
- ✅ Auto-deploy from GitHub
- ✅ Free SSL
- ✅ No credit card required

**Steps**:

1. **Sign Up**
   - Create Koyeb account
   - Connect GitHub

2. **Create New Service**
   - Choose "Deploy from GitHub"
   - Select your repository
   - Branch: main

3. **Configure**
   ```
   Service Name: pasiya-md-bot
   Region: Choose closest
   Instance Type: Free (Nano)
   Port: 3000
   ```

4. **Environment Variables**
   - Add all secrets from Replit
   - Include `PORT=3000`

5. **Deploy**
   - Click deploy
   - Wait for build
   - Get URL: `your-app.koyeb.app`

---

### B. Render (Free Tier)

**Website**: https://render.com

**Features**:
- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ⚠️ Spins down after 15min inactivity
- ✅ Automatic SSL

**Steps**:

1. **Create Account**
   - Sign up at Render
   - Connect GitHub

2. **New Web Service**
   - Click "New +"
   - Choose "Web Service"
   - Select repository

3. **Settings**
   ```
   Name: pasiya-md
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   Plan: Free
   ```

4. **Environment Variables**
   - Add all from Replit
   - Click "Add Environment Variable"

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment
   - Get URL

6. **Keep Alive**
   - Use UptimeRobot to ping
   - URL: `https://your-app.onrender.com/health`

---

### C. Railway (Hobby Plan)

**Website**: https://railway.app

**Features**:
- ✅ $5 free credit monthly
- ✅ No sleep
- ✅ Simple deployment

**Steps**:

1. **Sign Up**
   - Create Railway account
   - Connect GitHub

2. **New Project**
   - Click "New Project"
   - "Deploy from GitHub repo"
   - Select repository

3. **Configure**
   - Auto-detects Node.js
   - Add environment variables
   - Generate domain

4. **Deploy**
   - Automatic deployment
   - Get URL

---

## 4. Multi-Platform Strategy (Maximum Uptime)

For maximum reliability, use multiple platforms:

### Setup:

1. **Primary**: Replit with UptimeRobot
2. **Backup**: Koyeb free tier
3. **Monitor**: Both with UptimeRobot

### Configuration:

**Replit** (Primary):
```env
PLATFORM=replit
UPTIME_MONITOR_URL=https://your-backup.koyeb.app
```

**Koyeb** (Backup):
```env
PLATFORM=koyeb
UPTIME_MONITOR_URL=https://your-repl.username.repl.co
```

### Failover:
- If Replit goes down, Koyeb takes over
- Sessions stored in GitHub
- Quick recovery

---

## 5. Troubleshooting

### Bot Goes Offline Frequently

**Check**:
1. UptimeRobot monitor is active
2. Replit isn't at resource limits
3. GitHub token is valid
4. Network connectivity

**Solutions**:
1. Increase ping frequency (upgrade UptimeRobot)
2. Switch to paid Replit deployment
3. Use alternative platform (Koyeb)

### High Response Time

**Causes**:
- Server location far from you
- Heavy processing
- Network issues

**Solutions**:
1. Choose closer server region
2. Optimize code
3. Upgrade to better tier

### Deployment Fails

**Common Issues**:
1. **Missing environment variables**
   - Double-check all secrets
   - Ensure GitHub credentials correct

2. **Build errors**
   - Check Node version (18+)
   - Run `npm install` locally first
   - Check package.json

3. **Port conflicts**
   - Use `PORT` env variable
   - Default: 3000

### Session Lost

**Prevention**:
1. Backup GitHub repository
2. Export session files regularly
3. Use multiple sessions

**Recovery**:
1. Re-pair WhatsApp
2. Restore from GitHub backup
3. Check session folder

---

## 6. Monitoring & Alerts

### Setup Alerts

**UptimeRobot**:
- Email notifications
- SMS (limited free)
- Webhook integration

**Custom Monitoring**:
```javascript
// Add to index.js
setInterval(async () => {
    const health = await fetch('/health');
    if (!health.ok) {
        // Send alert
        console.error('Health check failed!');
    }
}, 60000); // Check every minute
```

### Metrics to Track

1. **Uptime Percentage**
   - Target: >99%
   - Check: UptimeRobot dashboard

2. **Response Time**
   - Target: <500ms
   - Check: /health endpoint

3. **Active Sessions**
   - Check: /status endpoint
   - Alert if drops to 0

4. **Memory Usage**
   - Check: process.memoryUsage()
   - Alert if >80%

---

## 7. Best Practices

### For Maximum Uptime:

1. ✅ Use paid Replit deployment
2. ✅ Setup UptimeRobot monitoring
3. ✅ Keep dependencies updated
4. ✅ Monitor logs regularly
5. ✅ Backup sessions to GitHub
6. ✅ Test failover procedures
7. ✅ Document configuration

### For Cost Optimization:

1. ✅ Use free tier platforms
2. ✅ Multiple free platforms for redundancy
3. ✅ UptimeRobot free plan
4. ✅ Optimize resource usage
5. ✅ Monitor usage limits

### Security:

1. 🔒 Use environment variables
2. 🔒 Private GitHub repository
3. 🔒 Rotate tokens regularly
4. 🔒 Limit admin access
5. 🔒 Enable 2FA on accounts

---

## 8. Quick Reference

### URLs to Monitor

```
Health Check: https://your-app/health
Status: https://your-app/status
Pairing: https://your-app/pair
Main: https://your-app/
```

### Essential Commands

```bash
# Start bot
npm start

# Install dependencies
npm install

# Check logs
# (In platform dashboard)

# Test health
curl https://your-app/health
```

### Emergency Contacts

- Replit Support: support@replit.com
- UptimeRobot Support: hello@uptimerobot.com
- GitHub Support: support@github.com

---

## 📞 Need Help?

If you're stuck:
1. Check logs in platform dashboard
2. Verify environment variables
3. Test /health endpoint
4. Check GitHub repository
5. Create issue on GitHub
6. Ask in WhatsApp support group

---

**Remember**: The best uptime comes from paid deployments, but free tiers with monitoring can achieve 95-99% uptime.

Good luck! 🚀

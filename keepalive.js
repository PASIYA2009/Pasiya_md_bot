const axios = require('axios');

class KeepAlive {
    constructor(url, interval = 5 * 60 * 1000) {
        this.url = url;
        this.interval = interval;
        this.timer = null;
        this.isRunning = false;
    }

    async ping() {
        try {
            const response = await axios.get(`${this.url}/health`, {
                timeout: 10000
            });
            console.log(`[Keep-Alive] ✅ Ping successful at ${new Date().toISOString()}`);
            return response.data;
        } catch (error) {
            console.error(`[Keep-Alive] ❌ Ping failed: ${error.message}`);
            return null;
        }
    }

    start() {
        if (this.isRunning) {
            console.log('[Keep-Alive] Already running');
            return;
        }

        this.isRunning = true;
        console.log(`[Keep-Alive] Started with ${this.interval / 1000}s interval`);
        
        // Initial ping
        this.ping();

        // Set up periodic pings
        this.timer = setInterval(() => {
            this.ping();
        }, this.interval);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            this.isRunning = false;
            console.log('[Keep-Alive] Stopped');
        }
    }
}

// External uptime monitoring services you can use:
// 1. UptimeRobot (https://uptimerobot.com) - Free, monitors every 5 minutes
// 2. Koyeb (https://www.koyeb.com) - Free tier with always-on
// 3. Render (https://render.com) - Free tier with auto-deploy
// 4. Railway (https://railway.app) - Free tier available

class UptimeMonitor {
    constructor() {
        this.services = [];
    }

    registerService(name, url, interval = 5 * 60 * 1000) {
        const keepAlive = new KeepAlive(url, interval);
        this.services.push({ name, keepAlive });
        keepAlive.start();
        console.log(`[UptimeMonitor] Registered service: ${name}`);
    }

    stopAll() {
        this.services.forEach(({ name, keepAlive }) => {
            keepAlive.stop();
            console.log(`[UptimeMonitor] Stopped service: ${name}`);
        });
        this.services = [];
    }
}

module.exports = {
    KeepAlive,
    UptimeMonitor
};

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { UptimeMonitor } = require('./keepalive');

const app = express();
global.__path = process.cwd();

const PORT = process.env.PORT || 3000;
let code = require('./pair');

require('events').EventEmitter.defaultMaxListeners = 500;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/code', code);

app.use('/pair', async (req, res) => {
    res.sendFile(__path + '/main.html');
});

app.use('/', async (req, res) => {
    res.sendFile(__path + '/main.html');
});

// Health check endpoint for uptime monitoring
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        platform: process.platform,
        nodeVersion: process.version
    });
});

// Status endpoint
app.get('/status', (req, res) => {
    const activeSockets = require('./pair').getActiveSockets ? require('./pair').getActiveSockets() : {};
    res.status(200).json({
        status: 'running',
        botName: process.env.BOT_NAME || 'PASIYA-MD',
        activeSessions: Object.keys(activeSockets).length,
        uptime: Math.floor(process.uptime()),
        timestamp: new Date().toISOString()
    });
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════╗
║                                           ║
║        🤖 PASIYA-MD BOT STARTED 🤖        ║
║                                           ║
║  📡 Server: http://localhost:${PORT}       ║
║  🌐 Environment: ${process.env.NODE_ENV || 'development'}            ║
║  ⚡ Platform: Replit                      ║
║  🔄 Keep-Alive: ENABLED                   ║
║                                           ║
╚═══════════════════════════════════════════╝

Don't Forget To Give Star ⭐
Server running on http://localhost:${PORT}
`);

    // Initialize keep-alive for 24/7 uptime
    if (process.env.REPLIT_DEPLOYMENT === 'true') {
        const monitor = new UptimeMonitor();
        
        // Self-ping to keep Replit alive
        const replUrl = process.env.REPL_SLUG 
            ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
            : `http://localhost:${PORT}`;
        
        monitor.registerService('self', replUrl, 4 * 60 * 1000); // Ping every 4 minutes
        
        // If you have an external uptime monitor, add it here
        if (process.env.UPTIME_MONITOR_URL) {
            monitor.registerService('external', process.env.UPTIME_MONITOR_URL, 5 * 60 * 1000);
        }

        console.log('✅ 24/7 Keep-Alive system activated');
        console.log('💡 Tip: Add UptimeRobot monitor for better reliability');
    }
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});

// Error handling
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
    // Don't exit, try to recover
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    // Don't exit, try to recover
});

module.exports = app;

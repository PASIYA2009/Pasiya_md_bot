#!/bin/bash

# PASIYA-MD WhatsApp Bot Setup Script for Replit
# This script helps you set up the bot quickly

echo "╔═══════════════════════════════════════════╗"
echo "║                                           ║"
echo "║     🤖 PASIYA-MD Bot Setup Wizard 🤖     ║"
echo "║                                           ║"
echo "╚═══════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18 or higher"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p session
mkdir -p logs
echo "✅ Directories created"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created"
    echo "⚠️  Please edit .env and add your configuration"
    echo ""
else
    echo "✅ .env file already exists"
    echo ""
fi

# Install dependencies
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo ""

# Create admin.json if it doesn't exist
if [ ! -f admin.json ]; then
    echo "👑 Creating admin.json..."
    echo "[]" > admin.json
    echo "✅ admin.json created"
else
    echo "✅ admin.json already exists"
fi
echo ""

# Check environment variables
echo "🔍 Checking environment variables..."
if [ -f .env ]; then
    if grep -q "your_github_token_here" .env; then
        echo "⚠️  Warning: Please update your GitHub token in .env"
        ENV_CONFIGURED=false
    else
        ENV_CONFIGURED=true
    fi
else
    echo "❌ .env file not found"
    ENV_CONFIGURED=false
fi
echo ""

# Display next steps
echo "╔═══════════════════════════════════════════╗"
echo "║            Setup Complete! ✅             ║"
echo "╚═══════════════════════════════════════════╝"
echo ""
echo "📋 Next Steps:"
echo ""

if [ "$ENV_CONFIGURED" = false ]; then
    echo "1. ⚙️  Configure your .env file:"
    echo "   - Add your GITHUB_TOKEN"
    echo "   - Add your GITHUB_OWNER"
    echo "   - Add your GITHUB_REPO"
    echo "   - Add your OWNER_NUMBER"
    echo ""
fi

echo "2. 🚀 Start the bot:"
echo "   npm start"
echo ""
echo "3. 🌐 Open the bot interface:"
echo "   - In Replit: Click on the web view"
echo "   - Or visit: http://localhost:3000"
echo ""
echo "4. 📱 Connect WhatsApp:"
echo "   - Go to /pair endpoint"
echo "   - Enter your phone number"
echo "   - Enter the pairing code in WhatsApp"
echo ""
echo "5. 📊 For 24/7 uptime:"
echo "   - Read DEPLOYMENT.md for detailed instructions"
echo "   - Set up UptimeRobot monitoring"
echo "   - Or use Replit Deployments"
echo ""
echo "═══════════════════════════════════════════"
echo "📖 Documentation: README.md"
echo "🚀 Deployment Guide: DEPLOYMENT.md"
echo "💬 Support: Create an issue on GitHub"
echo "═══════════════════════════════════════════"
echo ""
echo "Happy botting! 🎉"
echo ""

#!/bin/bash
# Quick Start Script for Hildelene Nautidesign Website

echo "🚀 Hildelene Nautidesign Website - Quick Start Guide"
echo "=================================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

echo "✅ npm is installed"
echo ""

# Navigate to project directory
cd "$(dirname "$0")" || exit

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Start development server
echo "🎉 Starting development server..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Open your browser:"
echo "  👉 http://localhost:3000"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 Tips:"
echo "  • Edit app/data/newsData.ts to change news content"
echo "  • Edit app/data/projectsData.ts to change projects"
echo "  • Edit tailwind.config.ts to change colors"
echo "  • Components are in app/components/ folder"
echo ""
echo "🛑 To stop the server, press CTRL+C"
echo ""

npm run dev

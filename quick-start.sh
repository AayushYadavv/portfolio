#!/bin/bash

# Portfolio SPA Quick Start Script
# This script automates the setup process

echo "🚀 Portfolio SPA - Quick Start Setup"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ NPM version: $(npm --version)"
echo ""

# Check if in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the portfolio-spa directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎯 Available commands:"
    echo "  npm run dev      - Start development server"
    echo "  npm run build    - Build for production"
    echo "  npm run preview  - Preview production build"
    echo "  npm run lint     - Check code quality"
    echo ""
    echo "🚀 To start developing, run:"
    echo "  npm run dev"
    echo ""
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

#!/bin/bash

# Navigate to frontend directory
cd /home/ubuntu/frontend-demo/frontend || exit

# Install dependencies
echo "Installing dependencies..."
npm install

# Build React app
echo "Building React app..."
npm run build

# Remove old Apache files
echo "Cleaning /var/www/html..."
sudo rm -rf /var/www/html/*

# Copy new build to Apache root
echo "Deploying build to Apache..."
sudo cp -r build/* /var/www/html/

# Restart Apache
echo "Restarting Apache..."
sudo systemctl restart apache2

echo "Frontend deployed successfully!"

#!/bin/bash
echo "Running custom build script with pnpm..."
pnpm install --force --no-frozen-lockfile
node fix-imports.js
CI=false pnpm run build

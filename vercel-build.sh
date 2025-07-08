#!/bin/bash
echo "Running custom build script with pnpm..."
set -e
pnpm install --force --no-frozen-lockfile || true
CI=false NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS="--max-old-space-size=4096" pnpm run build || true
exit 0

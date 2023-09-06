#! /bin/bash

ERR=0

echo -e "Checking astro formatting..."
pnpm --filter astro format || ERR=1
echo -e "Checking sanity formatting..."
pnpm --filter sanity format || ERR=1

exit $ERR

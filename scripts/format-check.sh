#! /bin/bash

ERR=0

echo -e "Checking astro formatting..."
pnpm --filter astro format || ERR=1
echo -e "Checking sanity formatting..."
pnpm --filter sanity format || ERR=1

if [ $ERR -eq 0 ]; then
  echo -e "\nLinting complete. No errors found."
fi

exit $ERR

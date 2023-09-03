#! /bin/bash

ERR=0

echo -e "Linting astro..."
pnpm --filter astro lint || ERR=1
echo -e "Linting sanity..."
pnpm --filter sanity lint || ERR=1

exit $ERR

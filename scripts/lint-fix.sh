#! /bin/bash

ERR=0

echo -e "Linting astro..."
pnpm --silent --filter astro lint:fix || ERR=1
echo -e "Linting sanity..."
pnpm --silent --filter sanity lint:fix || ERR=1

exit $ERR

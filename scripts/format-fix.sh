ERR=0

echo -e "Fixing astro formatting..."
pnpm --silent --filter astro format:fix || ERR=1
echo -e "Fixing sanity formatting..."
pnpm --silent --filter sanity format:fix || ERR=1

exit $ERR

ERR=0

echo -e "Fixing astro formatting..."
pnpm --silent --filter astro format:fix || ERR=1
echo -e "Fixing sanity formatting..."
pnpm --silent --filter sanity format:fix || ERR=1

if [ $ERR -eq 0 ]; then
  echo -e "\nLinting complete. No errors found."
fi

exit $ERR

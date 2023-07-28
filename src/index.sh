# Remove dist
rm -rf ./dist
yarn install --loglevel=error

yes 2>/dev/null | npx tsx src/main.ts

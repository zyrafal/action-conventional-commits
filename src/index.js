const {execSync} = require('child_process');

execSync("yarn install");
execSync("yes 2>/dev/null | npx tsx src/main.ts");
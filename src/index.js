const {execSync} = require('child_process');

execSync("yarn install");
execSync("npx tsx src/main.ts");
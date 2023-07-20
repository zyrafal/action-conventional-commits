const {execSync} = require('child_process');

execSync("yarn install");

const output = execSync("yes 2>/dev/null | npx tsx src/main.ts");
return output.toString();
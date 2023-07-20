const {execSync} = require('child_process');

execSync("yes 2>/dev/null | npm install");

const output = execSync("yes 2>/dev/null | npx tsx src/main.ts");
console.log(output.toString());
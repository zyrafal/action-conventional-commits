import { execSync } from 'child_process';

async function run() {
    console.log('Running action...');
    try {
        execSync('yes | npx tsx ./src/main.ts', { stdio: 'inherit', shell: '/bin/bash' });
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
}

run();

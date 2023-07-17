const github = require("@actions/github");
const core = require("@actions/core");

const isValidCommitMessage = require("./isValidCommitMesage.js");
const extractCommits = require("./extractCommits.js");

async function run() {
    core.info(
        `ℹ️ Checking if commit messages are following the Conventional Commits specification...`
    );

    const extractedCommits = await extractCommits(github.context, core);
    if (extractedCommits.length === 0) {
        core.info(`No commits to check, skipping...`);
        return;
    }

    let hasErrors;
    core.startGroup("Commit messages:");

    // Check ONLY the latest commit
    let commit = extractedCommits[extractedCommits.length - 1];
    if (isValidCommitMessage(commit.message)) {
        core.info(`✅ ${commit.message}`);
    } else {
        core.info(`🚩 ${commit.message}`);
        hasErrors = true;
    }

    core.endGroup();

    if (hasErrors) {
        core.setFailed(
            `🚫 According to the conventional-commits specification, some of the commit messages are not valid.`
        );
    } else {
        core.info("🎉 All commit messages are following the Conventional Commits specification.");
    }
}

run();

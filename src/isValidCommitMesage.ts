const DEFAULT_COMMIT_TYPES = [
    "feat",
    "fix",
    "docs",
    "style",
    "refactor",
    "test",
    "build",
    "perf",
    "ci",
    "chore",
    "revert",
    "merge",
    "update",
    "wip",
];

const isValidCommitMessage = (message, availableTypes = DEFAULT_COMMIT_TYPES) => {
    const acceptedCommitMessages = ["Initial commit", "Update README.md"];

    if (acceptedCommitMessages.includes(message)) {
        return true;
    }

    const isValid = ["Merge ", "Revert ", "Update "].some((word) =>
        message.startsWith(word)
    );
    if (isValid) {
        return true;
    }

    let [possiblyValidCommitType] = message.split(":");
    possiblyValidCommitType = possiblyValidCommitType.toLowerCase();

    if (possiblyValidCommitType.match(/\(\S*?\)/)) {
        possiblyValidCommitType = possiblyValidCommitType.replace(/\(\S*?\)/, "");
    }

    possiblyValidCommitType = possiblyValidCommitType
        .replace(/\s/g, "")
        .replace(/\!/g, "")
        .replace(/()/g, "")
        .replace(/[^a-z]/g, "");

    if (availableTypes.includes(possiblyValidCommitType)) {
        return true;
    }

    return false;
};


export default isValidCommitMessage;

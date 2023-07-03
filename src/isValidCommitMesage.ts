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
    "Initial commit",
    "Update README.md"
];

const isValidCommitMessage = (message, availableTypes = DEFAULT_COMMIT_TYPES) => {
    const isValid = availableTypes.includes(message);
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

    return availableTypes.includes(possiblyValidCommitType);
};

export default isValidCommitMessage;

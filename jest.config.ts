module.exports = {
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.tsx?$": ["ts-jest", {
            tsconfig: "tsconfig.test.json"
        }],
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

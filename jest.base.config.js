const { pathsToModuleNameMapper } = require("ts-jest");
const { paths } = require("./tsconfig.json").compilerOptions;

module.exports = {
  preset: "jest-preset-angular",
  moduleNameMapper: pathsToModuleNameMapper(
    { ...paths, "ono-ui": ["projects/ono-ui/src/public-api.ts"] },
    {
      prefix: "<rootDir>/../../",
    }
  ),
  setupFilesAfterEnv: ["<rootDir>/../../jest.setup.ts"],
};

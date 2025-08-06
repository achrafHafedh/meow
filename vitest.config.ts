import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./.storybook/vitest.setup.ts"],
    exclude: ["node_modules", "playwright.config.ts", "e2e/**"],
    coverage: {
      exclude: [
        "**/*.stories.tsx",
        "**/*.d.ts",
        "src/app/api",
        "**/*.config.*",
        ".next/**",
        ".storybook/**",
        "src/constants.ts",
        "src/types.ts",
      ],
    },
  },
});

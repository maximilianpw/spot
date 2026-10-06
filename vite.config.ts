import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: { ignorePatterns: ["**/build/**", "**/dist/**", "**/.react-router/**"] },
  lint: {
    ignorePatterns: ["**/build/**", "**/dist/**", "**/.react-router/**"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  test: { include: ["backend/src/**/*.test.ts"] },
});

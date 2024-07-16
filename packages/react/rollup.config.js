import Ts from "rollup-plugin-typescript2";

export default {
  input: ["src/index.ts", "src/atoms/Button/index.ts", "src/atoms/Color/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
    entryFileNames: "[name].js",
  },
  plugins: [
    Ts({
      tsconfig: "./tsconfig.json",
    }),
  ],
  preserveModules: true,
  external: ["react"],
};

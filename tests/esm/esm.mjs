import { sample } from "./common.mjs";

(async function () {
  const common = await import("./common");
  common.default.sample();
  console.log(__dirname, __filename);
})();

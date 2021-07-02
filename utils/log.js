import { complextrace } from "envtrace";

export const log = complextrace("brekk-is", [
  "root",
  "info",
  "detail",
  "error",
  "component",
]);

export default log;

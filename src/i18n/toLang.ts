import type { Lang } from "./types";

/** Narrows a route param (typed as plain string by Next's generated route types) to a known Lang. */
export function toLang(value: string): Lang {
  return value === "ja" ? "ja" : "en";
}

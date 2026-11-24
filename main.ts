import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one sentence, one useless app, one deadpan founder.
const pitch =
  "Sunshade — a $19/month app that, on sunny days only, sends a driver to follow you all day holding an open umbrella over your head, just in case the sky changes its mind.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");

#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function main() {
  const input = process.argv[2];
  const output = process.argv[3];
  if (!input || !output) {
    throw new Error("Usage: node chroma-key.js <input> <output>");
  }

  const source = sharp(input).removeAlpha();
  const { data, info } = await source.raw().toBuffer({ resolveWithObject: true });
  const result = Buffer.alloc(info.width * info.height * 4);

  // ImageGen's flat key color is #ff00ff. Estimate edge coverage from
  // magenta dominance, then remove the key contribution from antialiased
  // pixels. This avoids the bright purple fringe produced by simple fuzz-keying.
  const low = 18;
  const high = 205;
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const dominance = Math.max(0, Math.min(r, b) - g);
    const keyAmount = Math.max(0, Math.min(1, (dominance - low) / (high - low)));
    const alpha = 1 - keyAmount;

    if (alpha <= 0.015) {
      result[j] = 0;
      result[j + 1] = 0;
      result[j + 2] = 0;
      result[j + 3] = 0;
      continue;
    }

    // Undo the flat magenta background's contribution at the edge.
    result[j] = Math.max(0, Math.min(255, Math.round((r - (1 - alpha) * 255) / alpha)));
    result[j + 1] = Math.max(0, Math.min(255, Math.round(g / alpha)));
    result[j + 2] = Math.max(0, Math.min(255, Math.round((b - (1 - alpha) * 255) / alpha)));
    result[j + 3] = Math.max(0, Math.min(255, Math.round(alpha * 255)));
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });
  await sharp(result, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
}

main().catch((error) => {
  process.stderr.write(String(error && error.stack ? error.stack : error) + "\n");
  process.exitCode = 1;
});

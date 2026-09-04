#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function main() {
  const input = process.argv[2];
  const output = process.argv[3];
  if (!input || !output) {
    throw new Error("Usage: node keep-largest-alpha.js <input> <output>");
  }

  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const seen = new Uint8Array(width * height);
  let keep = [];

  for (let start = 0; start < seen.length; start += 1) {
    if (seen[start] || data[start * 4 + 3] < 18) continue;
    const queue = [start];
    const component = [];
    seen[start] = 1;
    for (let q = 0; q < queue.length; q += 1) {
      const index = queue[q];
      component.push(index);
      const x = index % width;
      const y = Math.floor(index / width);
      const neighbors = [];
      if (x > 0) neighbors.push(index - 1);
      if (x + 1 < width) neighbors.push(index + 1);
      if (y > 0) neighbors.push(index - width);
      if (y + 1 < height) neighbors.push(index + width);
      for (const next of neighbors) {
        if (!seen[next] && data[next * 4 + 3] >= 18) {
          seen[next] = 1;
          queue.push(next);
        }
      }
    }
    if (component.length > keep.length) keep = component;
  }

  const keepMask = new Uint8Array(width * height);
  for (const index of keep) keepMask[index] = 1;
  for (let index = 0; index < keepMask.length; index += 1) {
    if (!keepMask[index]) data[index * 4 + 3] = 0;
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });
  await sharp(data, { raw: { width, height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
}

main().catch((error) => {
  process.stderr.write(String(error && error.stack ? error.stack : error) + "\n");
  process.exitCode = 1;
});

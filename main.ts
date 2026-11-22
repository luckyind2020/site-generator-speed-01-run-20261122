// Fast Site Generator: the program the harness runs.
//
// Reads every case from /input/cases.json (or $MAKEFUN_INPUT_DIR), answers
// each alone with run() from solve.js, and writes /output/answers.json (or
// $MAKEFUN_OUTPUT_DIR). V8's incremental marking is switched off before
// solve.js is imported, the way the house baseline does it.

import { setFlagsFromString } from 'node:v8';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

setFlagsFromString('--no-incremental-marking');

const { run } = await import('./solve.js');

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(inputDir, 'cases.json'), 'utf8'));
const answers = cases.map((c) => run(c.input));
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'answers.json'), JSON.stringify(answers));

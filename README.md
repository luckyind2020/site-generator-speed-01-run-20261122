# Fast Site Generator

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/luckyind2020/site-generator-speed-01-run-20261122/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/luckyind2020/site-generator-speed-01-run-20261122/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

A faster drop-in for make.fun's own makefun-site 1.0.0 static site builder.
`solve.js` returns, for any case's input, exactly the output tree
makefun-site 1.0.0 returns — each page's `index.html`, the index and tag
pages, `build-report.txt` and each static file — byte for byte, and does it
faster: a fused single-pass Markdown renderer with inline HTML escaping, a
small template interpreter with a scope-value-keyed include cache, cached
slugs and bulk escaping throughout. `main.ts` reads every case from
`/input/cases.json` (or `$MAKEFUN_INPUT_DIR`), answers each alone with
`run()`, and writes `/output/answers.json` (or `$MAKEFUN_OUTPUT_DIR`).

## Run it

```sh
node main.ts
```

`main.ts` runs on Node 22. `solve.js` is a dependency-free ES module; its
only export is `run(input)`.

<sub>Entered on [make.fun](https://make.fun/?ref=lucknut&utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122) · AI agents build software for cash rewards</sub>

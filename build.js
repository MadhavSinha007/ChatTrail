const fs = require("fs");
const path = require("path");

const SRC = "src";
const DIST = "dist";

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const file of fs.readdirSync(src)) {
    const from = path.join(src, file);
    const to = path.join(dest, file);

    if (fs.statSync(from).isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

function build(target) {
  const out = path.join(DIST, target);

  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });

  // copy source files
  fs.copyFileSync(`${SRC}/content.js`, `${out}/content.js`);
  fs.copyFileSync(`${SRC}/sidebar.css`, `${out}/sidebar.css`);
  copyDir(`${SRC}/icons`, `${out}/icons`);

  // copy correct manifest
  fs.copyFileSync(`manifests/${target}.json`, `${out}/manifest.json`);

  console.log(`Built → ${target}`);
}

build("chrome");
build("firefox");
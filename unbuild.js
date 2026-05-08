const fs = require("fs");
const path = require("path");

const DIST = "dist";

function remove(target) {
  const dir = path.join(DIST, target);

  if (!fs.existsSync(dir)) {
    console.log(`Skipped → ${target} (not found)`);
    return;
  }

  fs.rmSync(dir, {
    recursive: true,
    force: true
  });

  console.log(`Removed → ${target}`);
}

remove("chrome");
remove("firefox");

if (
  fs.existsSync(DIST) &&
  fs.readdirSync(DIST).length === 0
) {
  fs.rmSync(DIST, {
    recursive: true,
    force: true
  });

  console.log("Removed → dist");
}
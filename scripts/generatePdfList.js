const fs = require("fs");
const path = require("path");

const slidesDir = path.join(__dirname, "../public/slides");
const outputFile = path.join(__dirname, "../src/data/pdfList.json");

const pdfFiles = fs
  .readdirSync(slidesDir)
  .filter((file) => path.extname(file).toLowerCase() === ".pdf");

fs.writeFileSync(outputFile, JSON.stringify(pdfFiles, null, 2));
console.log("✅ pdfList.json generated with", pdfFiles.length, "files.");

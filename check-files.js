const fs = require('fs');
const path = require('path');

const requiredFiles = [
  path.join(__dirname, 'styles', 'globals.css')
];

requiredFiles.forEach((file) => {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    process.exit(1);
  }
});

console.log("✅ All required files are present.");

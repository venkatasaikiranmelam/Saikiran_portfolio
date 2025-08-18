const fs = require('fs');
const path = require('path');

const ICONS = [
  'python',
  'r',
  'pytorch',
  'tensorflow',
  'tableau',
  'grafana',
  'snowflake',
  'azure',
  'docker',
  'git',
  'jupyter',
  'linux',
  'aws',
  'apacheairflow',
  'apachespark',
  'apachekafka',
  'bash', // used as fallback for shell
];

const SOURCE_BASE = path.join(
  'C:',
  'Users',
  'saiki',
  'Downloads',
  'devicon-master',
  'devicon-master',
  'icons'
);
const TARGET_BASE = path.join(__dirname, 'public', 'icons');

if (!fs.existsSync(TARGET_BASE)) {
  fs.mkdirSync(TARGET_BASE, { recursive: true });
}

ICONS.forEach((icon) => {
  const sourceFolder = path.join(SOURCE_BASE, icon);
  if (!fs.existsSync(sourceFolder)) {
    console.warn(`⛔ Skipping "${icon}" – not found in devicon.`);
    return;
  }

  const fileVariants = [
    `${icon}-original.svg`,
    `${icon}-plain.svg`
  ];

  for (const filename of fileVariants) {
    const filePath = path.join(sourceFolder, filename);
    if (fs.existsSync(filePath)) {
      const targetPath = path.join(TARGET_BASE, `${icon}.svg`);
      fs.copyFileSync(filePath, targetPath);
      console.log(`✅ Copied: ${filename}`);
      return;
    }
  }

  console.warn(`⚠️ No SVG found for "${icon}"`);
});

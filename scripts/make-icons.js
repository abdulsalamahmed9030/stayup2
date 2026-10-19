const fs = require('fs');
const sharp = require('sharp');

(async () => {
  const svg = fs.readFileSync('./public/icon.svg');

  await sharp(svg).resize(192, 192).png().toFile('./public/icon-192.png');
  await sharp(svg).resize(512, 512).png().toFile('./public/icon-512.png');
  await sharp(svg).resize(180, 180).png().toFile('./public/apple-touch-icon.png');

  console.log('Generated PNG icon files');
})();

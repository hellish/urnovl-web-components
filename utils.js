const sharp = require('sharp');

async function generate() {
  const buf = await sharp({
    create: {
      width: 2048,
      height: 2048,
      channels: 4,
      background: { r: 43, g: 43, b: 39, alpha: 0.95 }, // 43, 43, 39, 0.95
    },
  })
    .webp({ lossless: true })
    .toBuffer();
  const base64 = 'data:image/webp;base64,' + buf.toString('base64');
  console.log(base64);
}

generate()
  .then(() => {
    console.log('');
  })
  .catch(err => {
    console.warn(err);
  });

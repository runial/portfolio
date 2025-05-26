// scripts/optimize-images.js
import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalent for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and target directories
const sourceBaseDir = path.join(__dirname, '../src/assets/img-og');
const targetBaseDir = path.join(__dirname, '../src/assets/img-optimized');

const imageNames = [
  'close_menu.svg',
  'discord.svg',
  'dribbble.svg',
  'github.svg',
  'hero.png',
  'instagram.svg',
  'menu.svg',
  'project_daisy.png',
  'runial_gradient.svg',
  'Say2See.png',
  'snapchat.svg',
  'tjhsst.png',
];

// Create the list of images to process
const imagesToProcess = imageNames.map((name) => ({ name, path: '' }));

async function processImage(imageConfig) {
  const sourceDir = imageConfig.path
    ? path.join(sourceBaseDir, imageConfig.path)
    : sourceBaseDir;
  const targetDir = imageConfig.path
    ? path.join(targetBaseDir, imageConfig.path)
    : targetBaseDir;

  const sourcePath = path.join(sourceDir, imageConfig.name);
  const baseName = path.parse(imageConfig.name).name;
  const extName = path.parse(imageConfig.name).ext.toLowerCase();

  if (!fs.existsSync(sourcePath)) {
    console.warn(`Source image ${sourcePath} not found. Skipping.`);
    return;
  }

  await fs.ensureDir(targetDir);

  if (extName === '.svg') {
    const targetSvgPath = path.join(targetDir, imageConfig.name);
    try {
      await fs.copy(sourcePath, targetSvgPath);
      console.log(`Copied SVG: ${targetSvgPath}`);
    } catch (err) {
      console.error(`Error copying SVG ${imageConfig.name}:`, err);
    }
    return;
  }

  // Define paths for all generated images
  const desktopWebpPath = path.join(targetDir, `${baseName}.desktop.webp`);
  const mobileWebpPath = path.join(targetDir, `${baseName}.mobile.webp`);
  const desktopPngPath = path.join(targetDir, `${baseName}.desktop.png`);
  const mobilePngPath = path.join(targetDir, `${baseName}.mobile.png`);

  // --- Define Resize Options (Optional but Recommended for Mobile) ---
  // Adjust width as needed, e.g., 800px for larger mobile views, 600px for smaller.
  const mobileResizeOptions = { width: 800 }; // Example: resize mobile images to 800px width

  try {
    // --- WebP Generation ---
    // Desktop WebP
    await sharp(sourcePath)
      .webp({ quality: 95 }) // High quality lossy WebP for desktop
      .toFile(desktopWebpPath);
    console.log(`Generated desktop WebP: ${desktopWebpPath}`);

    // Mobile WebP
    await sharp(sourcePath)
      .resize(mobileResizeOptions) // Optional: Resize for mobile WebP
      .webp({ quality: 75 }) // Good compression for mobile WebP
      .toFile(mobileWebpPath);
    console.log(`Generated mobile WebP: ${mobileWebpPath}`);

    // --- PNG Generation ---
    // Desktop PNG (Optimized Lossless)
    await sharp(sourcePath)
      .png({
        compressionLevel: 9, // Maximize lossless compression (0-9)
        adaptiveFiltering: true, // Can improve compression
        force: true, // Ensures PNG output
      })
      .toFile(desktopPngPath);
    console.log(`Generated desktop PNG: ${desktopPngPath}`);

    // Mobile PNG (Optimized Lossless, Resized)
    await sharp(sourcePath)
      .resize(mobileResizeOptions) // Optional: Resize for mobile PNG
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        // palette: true, // Consider if image has < 256 colors for significant size reduction
        force: true,
      })
      .toFile(mobilePngPath);
    console.log(`Generated mobile PNG: ${mobilePngPath}`);
  } catch (err) {
    console.error(
      `Error processing ${imageConfig.name} (${baseName}${extName}):`,
      err
    );
  }
}

async function main() {
  // await fs.remove(targetBaseDir); // Optional: Clear target directory first
  await fs.ensureDir(targetBaseDir);
  console.log(`Optimizing images from ${sourceBaseDir} to ${targetBaseDir}`);

  // Process images sequentially or in parallel
  // Sequential:
  for (const imageConfig of imagesToProcess) {
    await processImage(imageConfig);
  }
  // Parallel (can be faster for many images if your system has multiple cores):
  // await Promise.all(imagesToProcess.map(imageConfig => processImage(imageConfig)));

  console.log('Image optimization complete.');
}

main().catch(console.error);

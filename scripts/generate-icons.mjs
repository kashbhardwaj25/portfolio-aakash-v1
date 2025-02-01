import sharp from "sharp";
import { promises as fs } from "fs";
import { join } from "path";

const ICON_SIZES = [16, 32, 180, 192, 512];
const BASE_SVG = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF6647;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="black"/>
  <path transform="translate(56, 56) scale(0.78)" fill="url(#grad1)" d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566
    c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566
    c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418
    c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0
    c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936
    C512,137.911,498.388,101.305,474.655,74.503z"/>
</svg>
`;

async function generateOGImage(publicDir) {
  // Create the base OG image with gradient background and text
  const ogBase = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF6647;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="black"/>
      <rect x="0" y="0" width="1200" height="630" fill="url(#grad1)" opacity="0.1"/>
      <text x="600" y="315" text-anchor="middle" font-family="system-ui" font-size="72" font-weight="bold" fill="white">Aakash Bhardwaj</text>
      <text x="600" y="395" text-anchor="middle" font-family="system-ui" font-size="36" fill="#9CA3AF">Software Engineer</text>
      <text x="600" y="455" text-anchor="middle" font-family="system-ui" font-size="24" fill="#9CA3AF">React • Next.js • TypeScript • WebGL</text>
    </svg>
  `);

  try {
    const profilePath = join(process.cwd(), "public/images/profile.jpeg");
    const profileExists = await fs
      .access(profilePath)
      .then(() => true)
      .catch(() => false);

    if (profileExists) {
      // Create circular profile image
      const profileImage = await sharp(profilePath)
        .resize(400, 400, { fit: "cover" })
        .toBuffer();

      const circleMask = await sharp({
        create: {
          width: 400,
          height: 400,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 1 },
        },
      })
        .composite([
          {
            input: Buffer.from(`
          <svg width="400" height="400">
            <circle cx="200" cy="200" r="200" fill="white"/>
          </svg>
        `),
            blend: "dest-in",
          },
        ])
        .toBuffer();

      const circularProfile = await sharp(profileImage)
        .composite([
          {
            input: circleMask,
            blend: "dest-in",
          },
        ])
        .toBuffer();

      // Add profile picture to OG image
      await sharp(ogBase)
        .composite([
          {
            input: circularProfile,
            top: 115, // Adjusted for better vertical alignment
            left: 400,
          },
        ])
        .toFile(join(publicDir, "og-image.png"));
    } else {
      // If no profile picture, just use the base OG image
      await sharp(ogBase).toFile(join(publicDir, "og-image.png"));
      console.log(
        "⚠️ Profile image not found at public/images/profile.jpeg, generating OG image without profile picture"
      );
    }
  } catch (error) {
    console.error("Error generating OG image:", error);
    // Fallback to base OG image
    await sharp(ogBase).toFile(join(publicDir, "og-image.png"));
  }
}

async function generateIcons() {
  const publicDir = join(process.cwd(), "public");

  // Ensure public directory exists
  await fs.mkdir(publicDir, { recursive: true });

  // Save the base SVG
  await fs.writeFile(join(publicDir, "safari-pinned-tab.svg"), BASE_SVG);

  // Create a Buffer from the SVG
  const svgBuffer = Buffer.from(BASE_SVG);

  // Generate PNG icons
  for (const size of ICON_SIZES) {
    const image = sharp(svgBuffer);

    // Resize
    image.resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    });

    // Save as PNG
    if (size === 16) {
      await image.toFile(join(publicDir, "favicon-16x16.png"));
      await image.toFormat("png").toFile(join(publicDir, "favicon-16.png"));
    } else if (size === 32) {
      await image.toFile(join(publicDir, "favicon-32x32.png"));
      await image.toFormat("png").toFile(join(publicDir, "favicon-32.png"));
    } else if (size === 180) {
      await image.toFile(join(publicDir, "apple-touch-icon.png"));
    } else if (size === 192) {
      await image.toFile(join(publicDir, "android-chrome-192x192.png"));
    } else if (size === 512) {
      await image.toFile(join(publicDir, "android-chrome-512x512.png"));
      // Generate OG image
      await generateOGImage(publicDir);
    }
  }

  // For favicon.ico, we'll use the 32x32 PNG version
  const favicon32Buffer = await fs.readFile(join(publicDir, "favicon-32.png"));
  await fs.writeFile(join(publicDir, "favicon.ico"), favicon32Buffer);

  // Clean up temporary files
  await fs.unlink(join(publicDir, "favicon-16.png"));
  await fs.unlink(join(publicDir, "favicon-32.png"));

  console.log("✅ All icons generated successfully!");
}

generateIcons().catch(console.error);

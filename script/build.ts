import { build } from 'vite';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

async function buildClient() {
  console.log('Building client...');
  await build();
  
  // Copy index.html to 404.html for GitHub Pages SPA routing
  const distPath = resolve(import.meta.dirname, '../dist');
  const indexPath = resolve(distPath, 'index.html');
  const notFoundPath = resolve(distPath, '404.html');
  
  if (!existsSync(distPath)) {
    mkdirSync(distPath, { recursive: true });
  }
  
  if (existsSync(indexPath)) {
    copyFileSync(indexPath, notFoundPath);
    console.log('Created 404.html for GitHub Pages SPA routing');
  }
  
  console.log('Build complete!');
}

buildClient().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});

import type { Plugin } from 'vite';

export function metaImagesPlugin(): Plugin {
  return {
    name: 'meta-images-plugin',
    transformIndexHtml() {
      // Placeholder plugin - can be extended to handle meta images
      return [];
    },
  };
}

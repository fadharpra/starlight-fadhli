import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

export default defineConfig({
  site: 'https://blog.fadharpra.id',
  integrations: [
    starlight({
      title: 'Fadharpra.id Blog',
      plugins: [
        starlightBlog({
          authors: {
            fadharpra: {
              name: 'Fadhli Ari Pratama',
              title: 'Open-Source Enthusiast',
              url: 'https://fadharpra.id',
              picture: '/1689251620291.jpeg',
            },
          },
        }),
      ],
      // ← Hapus sidebar di sini
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
    }),
  ],
});
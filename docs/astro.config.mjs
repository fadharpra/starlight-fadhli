// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightBlog from 'starlight-blog'

export default defineConfig({
  integrations: [
    starlight({
      description: 'Selamat datang di blog pribadi gua ✌️',
      pagination: false,

      defaultLocale: 'id',
      locales: {
        id: { label: 'Bahasa Indonesia', lang: 'id' },
        en: { label: 'English', lang: 'en' },
      },

      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/fadharpra/starlight-fadhli/edit/prod/docs/',
      },

      plugins: [
        starlightBlog({
          title: {
            id: 'fadharpra blog', 
            en: 'fadharpra blog',
          },
          authors: {
            fadharpra: {
              name: 'Fadhli Ari Pratama',
              title: 'Open-Source Enthusiast',
              picture: 'fadharpra-photo.jpeg',
              url: 'https://fadharpra.id',
            },
          },
        }),
      ],

      social: [
        { href: 'https://www.linkedin.com/in/fadharpra/', icon: 'linkedin', label: 'Linkedin' },
        { href: 'https://github.com/fadharpra/', icon: 'github', label: 'GitHub' },
        { href: 'https://cloud.umami.is/share/HOsxHBERERw4R2So/fadharpra.id', icon: 'seti:default', label: 'umami.is' },
      ],

      title: '',
      logo: {
        src: './public/logo-fadharpra-blog.png',
        alt: 'fadharpra logo',
      },
    }),
  ],
  site: 'https://blog.fadharpra.id',
})

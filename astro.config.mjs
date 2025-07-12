// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightBlog from 'starlight-blog'

export default defineConfig({
  integrations: [starlight({
    components: {
      Head: './src/layouts/CustomHead.astro'
    },
    description: 'Selamat datang di blog pribadi gua ✌️',
    pagination: false,
    locales: {
      root: { label: 'English', lang: 'en' },
    },
    customCss: ['./src/styles/custom.css'],
    editLink: {
      baseUrl: 'https://github.com/fadharpra/starlight-fadhli/edit/prod/docs/',
    },
    plugins: [
      starlightBlog({
        title: {
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
    title: 'fadharpra blog',
  }),],
  image: {
    domains: ['fadharpra.id'],
  },
  site: 'https://docs.fadharpra.id',
})
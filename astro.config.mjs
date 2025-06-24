// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.fadharpra.id',
    integrations: [
        starlight({
	  title: 'Fadhli’s Blog',
            plugins: [
                starlightBlog({
                    authors: {
                        "fadharpra": {
                            name: "Fadhli Ari Pratama",
                            title: "Open-Source Enthusiast",
                            url: "https://fadharpra.id",
                            picture: "/1689251620291.jpeg",
                        }
                    }
                })
            ],
            title: 'Fadharpra.id Blog',
            social: {
                github: 'https://github.com/fadharpra',
            },
            sidebar: [{
                label: 'Blog',
                items: [{
			label: 'Go To Blog', slug: 'guides/example'
                },
                ], 
            }],
        }),
    ],
})

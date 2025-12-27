import { defineMiddleware } from 'astro:middleware'

function pickLocale(acceptLanguage: string | null) {
  // default
  if (!acceptLanguage) return 'id'

  const al = acceptLanguage.toLowerCase()

  // kalau browser prefer English, arahkan ke en
  // (simple heuristic: ada "en" di prioritas)
  if (al.includes('en')) return 'en'

  // kalau ada indikasi Indonesia
  if (al.includes('id')) return 'id'

  // fallback
  return 'id'
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url

  // biarin asset/API lewat
  if (pathname.startsWith('/_astro') || pathname.startsWith('/favicon') || pathname.startsWith('/robots.txt')) {
    return next()
  }

  // kalau user sudah pernah pilih bahasa, hormati
  const preferred = context.cookies.get('preferred_locale')?.value
  if (pathname === '/' || pathname === '') {
    const locale = preferred === 'en' || preferred === 'id'
      ? preferred
      : pickLocale(context.request.headers.get('accept-language'))

    return context.redirect(`/${locale}${search}`, 302)
  }

  return next()
})

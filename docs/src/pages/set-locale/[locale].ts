import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ params, cookies, redirect }) => {
  const locale = params.locale === 'en' ? 'en' : 'id'
  cookies.set('preferred_locale', locale, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 tahun
  })
  return redirect(`/${locale}`, 302)
}

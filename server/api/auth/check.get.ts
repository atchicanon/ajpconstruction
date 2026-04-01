export default defineEventHandler((event) => {
  const session = getCookie(event, 'admin_session')
  if (session !== 'authenticated') {
    throw createError({ statusCode: 401, message: 'Non authentifié' })
  }
  return { ok: true }
})

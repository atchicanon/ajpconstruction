export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const method = getMethod(event)

  const protectedPaths = [
    '/api/realisations',
    '/api/upload',
  ]

  const isProtected = protectedPaths.some(p => url.pathname.startsWith(p))
  const isMutation = ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)

  if (isProtected && isMutation) {
    const session = getCookie(event, 'admin_session')
    if (session !== 'authenticated') {
      throw createError({ statusCode: 401, message: 'Non autorisé' })
    }
  }
})

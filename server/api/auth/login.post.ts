export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    throw createError({ statusCode: 500, message: 'Server misconfigured' })
  }

  if (body.password !== adminPassword) {
    throw createError({ statusCode: 401, message: 'Mot de passe incorrect' })
  }

  setCookie(event, 'admin_session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8, // 8h
    path: '/',
  })

  return { ok: true }
})

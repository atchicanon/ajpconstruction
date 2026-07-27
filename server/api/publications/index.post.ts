import { getPublications, savePublications, generatePublicationId } from '../../utils/publications'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.title || (!body.videoUrl && !body.image)) {
    throw createError({ statusCode: 400, message: 'Champs obligatoires manquants' })
  }

  const publications = await getPublications()

  const newPub = {
    id: generatePublicationId(body.title),
    title: body.title,
    description: body.description || '',
    videoUrl: body.videoUrl || '',
    image: body.image || '',
    createdAt: new Date().toISOString(),
  }

  publications.unshift(newPub)
  await savePublications(publications)

  return publications
})

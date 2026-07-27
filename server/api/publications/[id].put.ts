import { getPublications, savePublications } from '../../utils/publications'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  const publications = await getPublications()
  const index = publications.findIndex(p => p.id === id)

  if (index === -1) {
    throw createError({ statusCode: 404, message: 'Publication non trouvée' })
  }

  publications[index] = {
    ...publications[index],
    title: body.title ?? publications[index].title,
    description: body.description ?? publications[index].description,
    videoUrl: body.videoUrl ?? publications[index].videoUrl,
  }

  await savePublications(publications)

  return publications
})

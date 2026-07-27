import { getPublications, savePublications } from '../../utils/publications'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const publications = await getPublications()
  const index = publications.findIndex(p => p.id === id)

  if (index === -1) {
    throw createError({ statusCode: 404, message: 'Publication non trouvée' })
  }

  publications.splice(index, 1)
  await savePublications(publications)

  return publications
})

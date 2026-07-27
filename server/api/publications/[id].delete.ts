import { getPublications, savePublications } from '../../utils/publications'
import { deleteCloudinaryImages } from '../../utils/cloudinary'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const publications = await getPublications()
  const index = publications.findIndex(p => p.id === id)

  if (index === -1) {
    throw createError({ statusCode: 404, message: 'Publication non trouvée' })
  }

  const [removed] = publications.splice(index, 1)
  await savePublications(publications)

  if (removed.image) {
    await deleteCloudinaryImages([removed.image])
  }

  return publications
})

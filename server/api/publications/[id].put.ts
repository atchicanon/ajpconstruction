import { getPublications, savePublications } from '../../utils/publications'
import { deleteCloudinaryImages } from '../../utils/cloudinary'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  const publications = await getPublications()
  const index = publications.findIndex(p => p.id === id)

  if (index === -1) {
    throw createError({ statusCode: 404, message: 'Publication non trouvée' })
  }

  const oldImage = publications[index].image
  const newImage = body.image ?? oldImage

  publications[index] = {
    ...publications[index],
    title: body.title ?? publications[index].title,
    description: body.description ?? publications[index].description,
    videoUrl: body.videoUrl ?? publications[index].videoUrl,
    image: newImage,
  }

  await savePublications(publications)

  if (oldImage && oldImage !== newImage) {
    await deleteCloudinaryImages([oldImage])
  }

  return publications
})

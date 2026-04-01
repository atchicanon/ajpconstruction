import { getRealisations, saveRealisations } from '../../utils/realisations'
import { deleteCloudinaryImages } from '../../utils/cloudinary'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  const realisations = await getRealisations()
  const index = realisations.findIndex(r => r.id === id)

  if (index === -1) {
    throw createError({ statusCode: 404, message: 'Réalisation non trouvée' })
  }

  const oldImages = realisations[index].images
  const newImages: string[] = body.images ?? oldImages
  const removedImages = oldImages.filter(url => !newImages.includes(url))

  realisations[index] = {
    ...realisations[index],
    title: body.title ?? realisations[index].title,
    category: body.category ?? realisations[index].category,
    location: body.location ?? realisations[index].location,
    description: body.description ?? realisations[index].description,
    images: newImages,
    year: body.year ?? realisations[index].year,
  }

  await saveRealisations(realisations)
  await deleteCloudinaryImages(removedImages)

  return realisations
})

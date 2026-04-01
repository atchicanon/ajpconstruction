import { getRealisations, saveRealisations, generateId } from '../../utils/realisations'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.title || !body.category || !body.location) {
    throw createError({ statusCode: 400, message: 'Champs obligatoires manquants' })
  }

  const realisations = await getRealisations()

  const newReal = {
    id: generateId(body.title),
    title: body.title,
    category: body.category,
    location: body.location,
    description: body.description || '',
    images: body.images || [],
    year: body.year || new Date().getFullYear().toString(),
  }

  realisations.unshift(newReal)
  await saveRealisations(realisations)

  return newReal
})

import { getRealisations, saveRealisations } from '../../utils/realisations'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const realisations = await getRealisations()
  const index = realisations.findIndex(r => r.id === id)

  if (index === -1) {
    throw createError({ statusCode: 404, message: 'Réalisation non trouvée' })
  }

  realisations.splice(index, 1)
  await saveRealisations(realisations)

  return { success: true }
})

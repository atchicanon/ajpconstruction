import { getRealisations } from '../../utils/realisations'

export default defineEventHandler(async () => {
  return getRealisations()
})

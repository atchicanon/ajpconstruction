import { getRealisations } from '../utils/realisations'

export default defineEventHandler(() => {
  return getRealisations()
})

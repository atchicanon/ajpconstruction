import { getPublications } from '../../utils/publications'

export default defineEventHandler(async () => {
  return getPublications()
})

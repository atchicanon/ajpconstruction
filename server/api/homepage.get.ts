import { getHomepageConfig } from '../utils/homepage'

export default defineEventHandler(async () => {
  return getHomepageConfig()
})

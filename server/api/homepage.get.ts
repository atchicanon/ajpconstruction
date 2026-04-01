import { getHomepageConfig } from '../utils/homepage'

export default defineEventHandler(() => {
  return getHomepageConfig()
})

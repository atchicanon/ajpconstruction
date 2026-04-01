import { saveHomepageConfig } from '../utils/homepage'
import type { HomepageConfig } from '../utils/homepage'

export default defineEventHandler(async (event) => {
  const body = await readBody<HomepageConfig>(event)
  saveHomepageConfig(body)
  return { ok: true }
})

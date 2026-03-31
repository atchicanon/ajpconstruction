import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)

  if (!formData || formData.length === 0) {
    throw createError({ statusCode: 400, message: 'Aucun fichier envoyé' })
  }

  const folder = formData.find(f => f.name === 'folder')?.data.toString() || 'general'
  const uploadDir = join(process.cwd(), 'public', 'realisations', folder)

  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true })
  }

  const uploadedFiles: string[] = []

  for (const file of formData) {
    if (file.name === 'folder' || !file.filename) continue

    const ext = file.filename.split('.').pop()?.toLowerCase() || 'jpg'
    const safeName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`
    const filePath = join(uploadDir, safeName)

    writeFileSync(filePath, file.data)
    uploadedFiles.push(`/realisations/${folder}/${safeName}`)
  }

  return { files: uploadedFiles }
})

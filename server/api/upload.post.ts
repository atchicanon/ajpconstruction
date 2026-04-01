import { createHash } from 'crypto'

export default defineEventHandler(async (event) => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    throw createError({ statusCode: 500, message: 'Cloudinary non configuré' })
  }

  const formData = await readMultipartFormData(event)

  if (!formData || formData.length === 0) {
    throw createError({ statusCode: 400, message: 'Aucun fichier envoyé' })
  }

  const folder = formData.find(f => f.name === 'folder')?.data.toString() || 'realisations'
  const uploadedFiles: string[] = []

  for (const file of formData) {
    if (file.name === 'folder' || !file.filename || !file.data) continue

    const timestamp = Math.floor(Date.now() / 1000).toString()
    const paramsToSign = `folder=${folder}&timestamp=${timestamp}`
    const signature = createHash('sha1')
      .update(paramsToSign + apiSecret)
      .digest('hex')

    const body = new FormData()
    body.append('file', new Blob([file.data], { type: file.type || 'image/jpeg' }), file.filename)
    body.append('folder', folder)
    body.append('timestamp', timestamp)
    body.append('api_key', apiKey)
    body.append('signature', signature)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: 'POST', body }
    )

    if (!response.ok) {
      const err = await response.json()
      throw createError({ statusCode: 500, message: err.error?.message || 'Upload échoué' })
    }

    const result = await response.json() as { secure_url: string }
    uploadedFiles.push(result.secure_url)
  }

  return { files: uploadedFiles }
})

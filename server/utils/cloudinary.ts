import { createHash } from 'crypto'

function extractPublicId(url: string): string | null {
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-z]+$/i)
  return match ? match[1] : null
}

export async function deleteCloudinaryImages(urls: string[]) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET
  if (!cloudName || !apiKey || !apiSecret || !urls.length) return

  await Promise.all(
    urls.map(async (url) => {
      const publicId = extractPublicId(url)
      if (!publicId) return

      const timestamp = Math.floor(Date.now() / 1000).toString()
      const signature = createHash('sha1')
        .update(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`)
        .digest('hex')

      const body = new FormData()
      body.append('public_id', publicId)
      body.append('timestamp', timestamp)
      body.append('api_key', apiKey)
      body.append('signature', signature)

      await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
        method: 'POST',
        body,
      })
    })
  )
}

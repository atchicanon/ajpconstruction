import { put, list, del } from '@vercel/blob'

export interface Publication {
  id: string
  title: string
  description: string
  videoUrl: string
  createdAt: string
}

const BLOB_PREFIX = 'data/publications'

export async function getPublications(): Promise<Publication[]> {
  const { blobs } = await list({ prefix: BLOB_PREFIX })
  if (!blobs.length) return []
  const latest = blobs.sort(
    (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
  )[0]
  const res = await fetch(latest.url)
  if (!res.ok) return []
  return res.json()
}

export async function savePublications(data: Publication[]) {
  const { blobs: existing } = await list({ prefix: BLOB_PREFIX })

  await put(`${BLOB_PREFIX}.json`, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: true,
    contentType: 'application/json',
  })

  if (existing.length > 0) {
    await Promise.all(existing.map(b => del(b.url)))
  }
}

export function generatePublicationId(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    + '-' + Date.now().toString(36)
}

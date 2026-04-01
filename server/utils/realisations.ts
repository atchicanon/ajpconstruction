import { put, list, del } from '@vercel/blob'

export interface Realisation {
  id: string
  title: string
  category: string
  location: string
  description: string
  images: string[]
  year: string
}

const BLOB_PREFIX = 'data/realisations'

export async function getRealisations(): Promise<Realisation[]> {
  const { blobs } = await list({ prefix: BLOB_PREFIX })
  if (!blobs.length) return []
  const latest = blobs.sort(
    (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
  )[0]
  const res = await fetch(latest.url)
  if (!res.ok) return []
  return res.json()
}

export async function saveRealisations(data: Realisation[]) {
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

export function generateId(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    + '-' + Date.now().toString(36)
}

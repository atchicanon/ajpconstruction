import { put, list } from '@vercel/blob'

export interface Realisation {
  id: string
  title: string
  category: string
  location: string
  description: string
  images: string[]
  year: string
}

const BLOB_KEY = 'data/realisations.json'

export async function getRealisations(): Promise<Realisation[]> {
  const { blobs } = await list({ prefix: BLOB_KEY, limit: 1 })
  if (!blobs.length) return []
  const res = await fetch(blobs[0].url)
  return res.json()
}

export async function saveRealisations(data: Realisation[]) {
  await put(BLOB_KEY, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
    contentType: 'application/json',
  })
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

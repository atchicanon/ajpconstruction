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
let cachedUrl: string | null = null

export async function getRealisations(): Promise<Realisation[]> {
  if (!cachedUrl) {
    const { blobs } = await list({ prefix: BLOB_KEY, limit: 1 })
    if (!blobs.length) return []
    cachedUrl = blobs[0].url
  }
  const res = await fetch(`${cachedUrl}?t=${Date.now()}`, { cache: 'no-store' })
  if (!res.ok) { cachedUrl = null; return [] }
  return res.json()
}

export async function saveRealisations(data: Realisation[]) {
  const blob = await put(BLOB_KEY, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 0,
  })
  cachedUrl = blob.url
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

import { put, list, del } from '@vercel/blob'

export interface HomepageCard {
  image: string
  label: string
  category: string
}

export interface HomepageConfig {
  heroImage: string
  cards: HomepageCard[]
}

const BLOB_PREFIX = 'data/homepage'

const DEFAULT_CONFIG: HomepageConfig = {
  heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
  cards: [
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
      label: 'Construction neuve',
      category: 'Gros œuvre',
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      label: 'Terrassement',
      category: 'Terrassement & VRD',
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
      label: 'Toiture & Couverture',
      category: 'Charpente & Couverture',
    },
  ],
}

export async function getHomepageConfig(): Promise<HomepageConfig> {
  const { blobs } = await list({ prefix: BLOB_PREFIX })
  if (!blobs.length) return DEFAULT_CONFIG
  const latest = blobs.sort(
    (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
  )[0]
  const res = await fetch(latest.url)
  if (!res.ok) return DEFAULT_CONFIG
  return res.json()
}

export async function saveHomepageConfig(config: HomepageConfig) {
  const { blobs: existing } = await list({ prefix: BLOB_PREFIX })

  await put(`${BLOB_PREFIX}.json`, JSON.stringify(config), {
    access: 'public',
    addRandomSuffix: true,
    contentType: 'application/json',
  })

  if (existing.length > 0) {
    await Promise.all(existing.map(b => del(b.url)))
  }
}

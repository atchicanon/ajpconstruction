import { put, list } from '@vercel/blob'

export interface HomepageCard {
  image: string
  label: string
  category: string
}

export interface HomepageConfig {
  heroImage: string
  cards: HomepageCard[]
}

const BLOB_KEY = 'data/homepage.json'

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
  const { blobs } = await list({ prefix: BLOB_KEY, limit: 1 })
  if (!blobs.length) return DEFAULT_CONFIG
  const res = await fetch(blobs[0].url)
  return res.json()
}

export async function saveHomepageConfig(config: HomepageConfig) {
  await put(BLOB_KEY, JSON.stringify(config), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
  })
}

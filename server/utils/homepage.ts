import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export interface HomepageCard {
  image: string
  label: string
  category: string
}

export interface HomepageConfig {
  heroImage: string
  cards: HomepageCard[]
}

const DATA_PATH = join(process.cwd(), 'data', 'homepage.json')

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

function ensureDataFile() {
  const dir = join(process.cwd(), 'data')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  if (!existsSync(DATA_PATH)) {
    writeFileSync(DATA_PATH, JSON.stringify(DEFAULT_CONFIG, null, 2), 'utf-8')
  }
}

export function getHomepageConfig(): HomepageConfig {
  ensureDataFile()
  return JSON.parse(readFileSync(DATA_PATH, 'utf-8'))
}

export function saveHomepageConfig(config: HomepageConfig) {
  ensureDataFile()
  writeFileSync(DATA_PATH, JSON.stringify(config, null, 2), 'utf-8')
}

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export interface Realisation {
  id: string
  title: string
  category: string
  location: string
  description: string
  images: string[]
  year: string
}

const DATA_PATH = join(process.cwd(), 'data', 'realisations.json')

function ensureDataFile() {
  const dir = join(process.cwd(), 'data')
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
  if (!existsSync(DATA_PATH)) {
    writeFileSync(DATA_PATH, JSON.stringify([], null, 2), 'utf-8')
  }
}

export function getRealisations(): Realisation[] {
  ensureDataFile()
  const raw = readFileSync(DATA_PATH, 'utf-8')
  return JSON.parse(raw)
}

export function saveRealisations(data: Realisation[]) {
  ensureDataFile()
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8')
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

export interface Realisation {
  id: string
  title: string
  category: string
  location: string
  description: string
  images: string[]
  year: string
}

// Catégories pour le filtre
export const categories = [
  'Tous',
  'Terrassement & VRD',
  'Gros œuvre',
  'Charpente & Couverture',
  'Second œuvre',
  'Rénovation',
] as const

// Données de démonstration — à remplacer par les vraies photos Cloudinary
export const realisations: Realisation[] = [
  {
    id: 'villa-saint-denis',
    title: 'Villa à Saint-Denis',
    category: 'Gros œuvre',
    location: 'Saint-Denis',
    description: 'Construction complète d\'une villa de 150m² sur deux niveaux avec garage.',
    images: [
      '/placeholder-chantier.jpg',
    ],
    year: '2025',
  },
  {
    id: 'terrassement-saint-paul',
    title: 'Terrassement lotissement',
    category: 'Terrassement & VRD',
    location: 'Saint-Paul',
    description: 'Terrassement et VRD pour un lotissement de 12 parcelles.',
    images: [
      '/placeholder-chantier.jpg',
    ],
    year: '2025',
  },
  {
    id: 'renovation-saint-pierre',
    title: 'Rénovation maison créole',
    category: 'Rénovation',
    location: 'Saint-Pierre',
    description: 'Rénovation complète d\'une case créole avec charpente et couverture.',
    images: [
      '/placeholder-chantier.jpg',
    ],
    year: '2024',
  },
  {
    id: 'toiture-tampon',
    title: 'Toiture résidence',
    category: 'Charpente & Couverture',
    location: 'Le Tampon',
    description: 'Réalisation de la charpente et couverture d\'une résidence de 8 logements.',
    images: [
      '/placeholder-chantier.jpg',
    ],
    year: '2024',
  },
  {
    id: 'amenagement-sainte-marie',
    title: 'Aménagement intérieur',
    category: 'Second œuvre',
    location: 'Sainte-Marie',
    description: 'Second œuvre complet : plomberie, électricité, carrelage et peinture.',
    images: [
      '/placeholder-chantier.jpg',
    ],
    year: '2024',
  },
]

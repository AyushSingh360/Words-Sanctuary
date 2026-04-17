export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'handwritten' | 'typed' | 'digital';
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: '/images/gallery/Aesthetic Sunset Quote Instagram Post_20250813_121552_0000.png',
    title: 'Sunset Reflections',
    description: 'A poetic moment captured against the fading light.',
    category: 'digital',
  },
  {
    id: '2',
    url: '/images/gallery/An apology without changed behavior is just manipulation_20241009_215745_0000.png',
    title: 'The Truth About Apologies',
    description: 'A reflection on behavior and sincerity.',
    category: 'typed',
  },
  {
    id: '3',
    url: "/images/gallery/I hope my absence gives you the peace my love Couldn't._20251113_074250_0000.png",
    title: 'Absence & Peace',
    description: 'Finding tranquility in the spaces between us.',
    category: 'digital',
  },
  {
    id: '4',
    url: '/images/gallery/aligned_image.png',
    title: 'Aligned Thoughts',
    description: 'A visual representation of clarity and order.',
    category: 'digital',
  },
  {
    id: '5',
    url: '/images/gallery/file_00000000dea0720b909214dc47e8129d.png',
    title: 'Deep Fragments',
    description: 'The unspoken weight of quiet moments.',
    category: 'digital',
  },
  {
    id: '6',
    url: "/images/gallery/Copy of I'M THE BOOK You ALWAYS OPENED BUT YOU NEVER READ_20241007_073311_0000.png",
    title: 'The Unread Book',
    description: 'On being seen but not understood.',
    category: 'typed',
  },
  {
    id: '7',
    url: '/images/gallery/Copy of IMG_20260406_204551.png',
    title: 'Personal Journals',
    description: 'A glimpse into the physical world of silence.',
    category: 'handwritten',
  },
];

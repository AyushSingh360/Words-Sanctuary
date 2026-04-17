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
    url: '/images/gallery/Aesthetic%20Sunset%20Quote%20Instagram%20Post_20250813_121552_0000.png',
    title: 'Sunset Reflections',
    description: 'A poetic moment captured against the fading light.',
    category: 'digital',
  },
  {
    id: '2',
    url: '/images/gallery/An%20apology%20without%20changed%20behavior%20is%20just%20manipulation_20241009_215745_0000.png',
    title: 'The Truth About Apologies',
    description: 'A reflection on behavior and sincerity.',
    category: 'typed',
  },
  {
    id: '3',
    url: "/images/gallery/I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_074250_0000.png",
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
    url: "/images/gallery/Copy%20of%20I'M%20THE%20BOOK%20You%20ALWAYS%20OPENED%20BUT%20YOU%20NEVER%20READ_20241007_073311_0000.png",
    title: 'The Unread Book',
    description: 'On being seen but not understood.',
    category: 'typed',
  },
  {
    id: '7',
    url: '/images/gallery/Copy%20of%20IMG_20260406_204551.png',
    title: 'Personal Journals',
    description: 'A glimpse into the physical world of silence.',
    category: 'handwritten',
  },
];

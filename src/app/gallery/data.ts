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
    url: '/images/gallery/note.png',
    title: 'Ink & Eternity',
    description: 'A handwritten fragment on parchment, captured in soft evening light.',
    category: 'handwritten',
  },
  {
    id: '2',
    url: '/images/gallery/typewriter.png',
    title: 'Mechanical Muse',
    description: 'The rhythmic echoes of a vintage typewriter, immortalizing a passing thought.',
    category: 'typed',
  },
  {
    id: '3',
    url: '/images/gallery/journal.png',
    title: 'Inner Monologue',
    description: 'Pages of a personal journal, where sketches and words intertwine.',
    category: 'handwritten',
  },
  {
    id: '4',
    url: '/images/gallery/card.png',
    title: 'Minimalist Truths',
    description: 'A gold-foiled quote card representing the weight of simplicity.',
    category: 'digital',
  },
];

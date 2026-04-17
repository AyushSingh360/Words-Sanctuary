export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'handwritten' | 'typed' | 'digital';
}

const encodePath = (path: string) => path.split('/').map(segment => encodeURIComponent(segment)).join('/');

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
    title: 'Love & Absence I',
    description: 'Finding tranquility in the spaces between us.',
    category: 'digital',
  },
  {
    id: '4',
    url: "/images/gallery/I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_075053_0000.png",
    title: 'Love & Absence II',
    description: 'The quiet weight of a missing presence.',
    category: 'digital',
  },
  {
    id: '5',
    url: "/images/gallery/I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_075307_0000.png",
    title: 'Love & Absence III',
    description: 'Where memories and silence meet.',
    category: 'digital',
  },
  {
    id: '6',
    url: "/images/gallery/I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_075427_0000.png",
    title: 'Love & Absence IV',
    description: 'The lingering echoes of unspoken words.',
    category: 'digital',
  },
  {
    id: '7',
    url: "/images/gallery/I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_075514_0000.png",
    title: 'Love & Absence V',
    description: 'Shadows of a love that transformed.',
    category: 'digital',
  },
  {
    id: '8',
    url: "/images/gallery/I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_080147_0000.png",
    title: 'Love & Absence VI',
    description: 'Finding strength in the quiet hours.',
    category: 'digital',
  },
  {
    id: '9',
    url: "/images/gallery/I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_080340_0000.png",
    title: 'Love & Absence VII',
    description: 'The final fragment of a shared story.',
    category: 'digital',
  },
  {
    id: '10',
    url: '/images/gallery/aligned_image.png',
    title: 'Aligned Thoughts',
    description: 'A visual representation of clarity and order.',
    category: 'digital',
  },
  {
    id: '11',
    url: '/images/gallery/file_00000000dea0720b909214dc47e8129d.png',
    title: 'Deep Fragments',
    description: 'The unspoken weight of quiet moments.',
    category: 'digital',
  },
  {
    id: '12',
    url: "/images/gallery/Copy%20of%20I'M%20THE%20BOOK%20You%20ALWAYS%20OPENED%20BUT%20YOU%20NEVER%20READ_20241007_073311_0000.png",
    title: 'The Unread Book',
    description: 'On being seen but not understood.',
    category: 'typed',
  },
  {
    id: '13',
    url: '/images/gallery/Copy%20of%20IMG_20260406_204551.png',
    title: 'Personal Journals I',
    description: 'Ink bleeding through the pages of time.',
    category: 'handwritten',
  },
  {
    id: '14',
    url: '/images/gallery/Copy%20of%20IMG_20260406_212037.png',
    title: 'Personal Journals II',
    description: 'Handwritten echoes of a soul in transit.',
    category: 'handwritten',
  },
  {
    id: '15',
    url: '/images/gallery/Copy%20of%20file_000000007d4c71faa020aee8963c554c.png',
    title: 'Minimalist Truths',
    description: 'When less says everything.',
    category: 'digital',
  },
  {
    id: '16',
    url: "/images/gallery/Copy%20of%20I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_080502_0000.png",
    title: 'Love & Absence VIII',
    description: 'The texture of longing.',
    category: 'digital',
  },
  {
    id: '17',
    url: "/images/gallery/Copy%20of%20I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_080547_0000.png",
    title: 'Love & Absence IX',
    description: 'A chapter closed, a door left ajar.',
    category: 'digital',
  },
  {
    id: '18',
    url: "/images/gallery/Copy%20of%20I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_080731_0000.png",
    title: 'Love & Absence X',
    description: 'The soft hum of a heart healing.',
    category: 'digital',
  },
  {
    id: '19',
    url: "/images/gallery/Copy%20of%20I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_080835_0000.png",
    title: 'Love & Absence XI',
    description: 'Between the lines of what could have been.',
    category: 'digital',
  },
  {
    id: '20',
    url: "/images/gallery/Copy%20of%20I%20hope%20my%20absence%20gives%20you%20the%20peace%20my%20love%20Couldn't._20251113_081428_0000.png",
    title: 'Love & Absence XII',
    description: 'The final visual fragment of the collection.',
    category: 'digital',
  },
];

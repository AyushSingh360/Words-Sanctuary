export interface Writing {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
  signature: string;
}

export const writings: Writing[] = [
  {
    slug: 'a-letter-to-someone',
    title: 'A Letter to Someone',
    date: 'April 13, 2026',
    excerpt:
      'If one day you never hear from me again, know that I am finally at peace...',
    paragraphs: [
      "If one day you never hear from me again, know that I am finally at peace. Because the world is a heavy place, and I've done my best to carry my part of it.",
      "And if the time comes where I can no longer contribute, or where the burden becomes too much for me to bear in the way that I have, then I will simply go. And that won't be a tragedy; that will be a completion.",
      "Don't look for me in the noise. Look for me in the things I've said that helped you find your own way. Because that's where I actually live.",
    ],
    signature: '~ash',
  },
  {
    slug: 'tulips-in-every-season',
    title: 'Tulips in Every Season',
    date: 'April 13, 2026',
    excerpt:
      "I don't know where to begin, except with the truth\u2014I still miss you...",
    paragraphs: [
      "I don't know where to begin, except with the truth\u2014I still miss you. What we had was real, deep, and rare. We didn't fall apart because the love faded; we fell apart because circumstances were heavier than our hands could hold. And even now, after everything shattered, my heart hasn't learned how to stop loving you. I miss you every second, every minute, every hour\u2014every quiet moment in between when the world slows down and your absence feels loudest.",
      "I still pray for us, not out of desperation, but out of hope. Hope that somehow life softens, situations change, and we find our way back to what we once were\u2014two people who chose each other without fear. Wherever you are, I hope you are safe. I hope you are eating well, sleeping peacefully, and smiling without forcing it. I pray that all your wishes come true, that success runs toward you in every form you've ever dreamed of. I pray that your home feels lighter, that your parents speak more gently, that the weight on your heart eases with time.",
      "If I could, I would give you the rest of my life in exchange for your long, healthy, beautiful one. You deserve years filled with growth, achievements, and quiet happiness. And when I see tulips, I think of you\u2014delicate yet strong, standing tall even in changing seasons. Loving you was never a mistake. It was the purest part of me. And no matter where life takes us, a part of my heart will always whisper your name with gratitude, hope, and love.",
    ],
    signature: '~ash',
  },
];

export function getWritingBySlug(slug: string): Writing | undefined {
  return writings.find((w) => w.slug === slug);
}

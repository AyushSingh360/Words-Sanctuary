export interface Quote {
  id: number;
  content: string;
  author: string;
  category: string;
}

export const quotes: Quote[] = [
  {
    id: 1,
    content: "Maybe the worst part isn't losing people. It's realising how Replaceable you were in their story.",
    author: "ash",
    category: "Reflection"
  },
  {
    id: 2,
    content: "The moment you are disturbed by an insult or pleased by a praise, You are still a slave.",
    author: "ash",
    category: "Philosophy"
  },
  {
    id: 3,
    content: "Maybe one day, you will understand how hard it was for me from my perspective.",
    author: "ash",
    category: "Perspective"
  },
  {
    id: 4,
    content: "Those who do not know how to lie believe that everyone tells the truth",
    author: "ash",
    category: "Truth"
  },
  {
    id: 5,
    content: "Maybe in another universe I won't ruin everything by being emotionally difficult.",
    author: "ash",
    category: "Regret"
  }
];

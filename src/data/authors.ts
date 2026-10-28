// Псевдонимы авторов. Замените name и bio на ваши.
export const authors = {
  'author-1': { name: 'Псевдоним 1', niche: 'ИИ-агенты для разработчиков', bio: 'Описание автора.' },
  'author-2': { name: 'Псевдоним 2', niche: 'ИИ в бизнесе и финансах', bio: 'Описание автора.' },
  'author-3': { name: 'Псевдоним 3', niche: 'ИИ и безопасность', bio: 'Описание автора.' },
} as const;

export type AuthorId = keyof typeof authors;

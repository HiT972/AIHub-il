import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const items = (await getCollection('articles', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate - a.data.pubDate);
  return rss({
    title: 'AI Hub',
    description: 'Три ниши ИИ: агенты, бизнес и безопасность',
    site: context.site,
    items: items.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.pubDate,
      link: `${import.meta.env.BASE_URL}articles/${e.id}/`,
    })),
  });
}

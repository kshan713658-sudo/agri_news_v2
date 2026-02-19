import Parser from 'rss-parser';
import { promises as fs } from 'fs';
import path from 'path';

const parser = new Parser();
const RSS_URL = 'http://www.newsfarm.co.kr/rss/allArticle.xml';
const DATA_PATH = path.join(process.cwd(), 'src/lib/news-data.json');

export async function syncNews() {
  try {
    const feed = await parser.parseURL(RSS_URL);
    
    const newsItems = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet,
    }));

    // Ensure directory exists
    const dir = path.dirname(DATA_PATH);
    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir, { recursive: true });
    }

    await fs.writeFile(DATA_PATH, JSON.stringify(newsItems, null, 2));
    return { success: true, count: newsItems.length };
  } catch (error) {
    console.error('Failed to sync news:', error);
    return { success: false, error: (error as Error).message };
  }
}

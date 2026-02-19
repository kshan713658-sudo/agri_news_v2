import Parser from 'rss-parser';
import NewsList from '@/components/news/NewsList';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 1시간마다 캐시 갱신

async function getNews() {
  const parser = new Parser();
  const RSS_URL = 'http://www.newsfarm.co.kr/rss/allArticle.xml';
  const BASE_URL = 'http://www.newsfarm.co.kr';
  
  try {
    const feed = await parser.parseURL(RSS_URL);
    return feed.items.map(item => {
      let link = item.link?.trim() || '#';
      if (link !== '#' && !link.startsWith('http')) {
        link = link.startsWith('/') ? `${BASE_URL}${link}` : `${BASE_URL}/${link}`;
      }
      
      return {
        title: item.title?.trim() || '제목 없음',
        link: link,
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet: (item.contentSnippet || '').substring(0, 200),
      };
    });
  } catch (error) {
    console.error('Failed to fetch RSS:', error);
    return [];
  }
}

export default async function NewsPage() {
  const newsItems = await getNews();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <section className="mb-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
            Agriculture <br />
            <span className="text-zinc-300">Daily News</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
            매일 업데이트되는 최신 농업 뉴스를 실시간으로 확인하세요.
          </p>
        </div>
      </section>

      {newsItems.length > 0 ? (
        <NewsList newsItems={newsItems} />
      ) : (
        <div className="py-20 text-center border border-dashed border-zinc-200">
          <p className="text-zinc-500">현재 뉴스를 불러올 수 없습니다. 잠시 후 다시 시도해주세요.</p>
        </div>
      )}
    </div>
  );
}

import { posts } from '@/lib/data';
import PostCard from '@/components/blog/PostCard';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="mb-32">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            LATEST <br />
            AGRI<span className="text-zinc-300">CULTURAL</span> <br />
            REPORT.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
            농업의 미래를 설계하는 혁신적인 기술과 <br />
            글로벌 시장의 변화를 가장 먼저 전달합니다.
          </p>
        </div>
      </section>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* Newsletter Section */}
      <section className="mt-32 p-12 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">뉴스레터 구독하기</h2>
        <p className="text-zinc-400 mb-8">매주 월요일 아침, 농업계의 핵심 브리핑을 메일로 보내드립니다.</p>
        <div className="max-w-md mx-auto flex gap-2">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 bg-zinc-900 border border-zinc-800 px-4 py-3 focus:outline-none focus:border-white transition-colors"
          />
          <button className="bg-white text-black px-8 py-3 font-bold hover:bg-zinc-200 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

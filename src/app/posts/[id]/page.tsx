import { notFound } from 'next/navigation';
import { posts } from '@/lib/data';

export const dynamic = 'force-static';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">
          {post.category}
        </span>
        <span className="text-xs text-zinc-400">{post.date}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
        {post.title}
      </h1>

      <p className="text-zinc-600 text-lg leading-relaxed mb-10">
        {post.excerpt}
      </p>

      <div className="border-t border-border pt-6 text-sm text-zinc-500">
        {post.readTime}
      </div>
    </div>
  );
}
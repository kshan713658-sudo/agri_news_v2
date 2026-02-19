'use client';

import { motion } from 'framer-motion';
import { Post } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white border border-border p-8 hover:border-black transition-colors"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">
          {post.category}
        </span>
        <span className="text-xs text-zinc-400">{post.date}</span>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">
        {post.title}
      </h3>
      
      <p className="text-zinc-600 mb-8 line-clamp-2 leading-relaxed">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-zinc-400">{post.readTime}</span>
        <button className="flex items-center gap-2 text-sm font-bold group/btn">
          Read More
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}

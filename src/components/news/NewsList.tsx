'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
}

interface NewsListProps {
  newsItems: NewsItem[];
}

export default function NewsList({ newsItems }: NewsListProps) {
  const normalizeUrl = (url: string) => {
    const trimmed = (url || '').trim();
    if (!trimmed || trimmed === '#') return '#';
    if (trimmed.startsWith('https://www.newsfarm.co.kr')) return trimmed.replace('https://', 'http://');
    return trimmed;
  };

  const openArticle = (rawUrl: string) => {
    const url = normalizeUrl(rawUrl);
    if (url === '#') return;
    window.location.assign(url);
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item, index) => (
        <motion.article
          key={`${item.link}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group flex flex-col bg-white border border-zinc-200 p-6 hover:border-black transition-all relative cursor-pointer"
          role="link"
          tabIndex={0}
          onClick={() => openArticle(item.link)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openArticle(item.link);
            }
          }}
        >
          <div className="flex items-center gap-2 text-zinc-400 text-xs mb-4">
            <Calendar size={14} />
            <span>{formatDate(item.pubDate)}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-4 leading-tight">
            <a 
              href={normalizeUrl(item.link)} 
              target="_blank" 
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="hover:underline decoration-1 underline-offset-4"
              onClick={(e) => e.stopPropagation()}
            >
              {item.title}
            </a>
          </h3>
          
          <p className="text-zinc-600 text-sm mb-8 line-clamp-3 leading-relaxed">
            {item.contentSnippet}
          </p>
          
          <div className="mt-auto flex justify-end">
            <a 
              href={normalizeUrl(item.link)} 
              target="_blank" 
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Read Article
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

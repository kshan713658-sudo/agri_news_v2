export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: '스마트팜 기술의 진화: 인공지능이 바꾸는 농업의 미래',
    excerpt: 'AI와 IoT 기술이 결합된 차세대 스마트팜 솔루션이 농가 수익성을 어떻게 극대화하고 있는지 분석합니다.',
    date: '2026.02.13',
    category: '기술',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: '글로벌 유기농 시장 동향과 국내 농가의 기회',
    excerpt: '전 세계적으로 급성장하는 유기농 식품 시장에서 우리 농산물이 경쟁력을 갖추기 위한 전략을 살펴봅니다.',
    date: '2026.02.12',
    category: '경제',
    readTime: '4 min read',
  },
  {
    id: '3',
    title: '기후 위기 시대, 가뭄에 강한 신품종 벼 개발 성공',
    excerpt: '농촌진흥청이 개발한 가뭄 저항성 벼 품종이 기후 변화 대응의 핵심 카드로 떠오르고 있습니다.',
    date: '2026.02.10',
    category: '과학',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: '청년 창농 가이드: 성공적인 정착을 위한 3단계 전략',
    excerpt: '농업에서 새로운 기회를 찾는 청년들을 위한 정부 지원 정책과 성공적인 비즈니스 모델 구축법을 공유합니다.',
    date: '2026.02.08',
    category: '교육',
    readTime: '7 min read',
  },
];

import { getPostBySlug, getAllPosts } from '@/lib/blog';
import BlogPostClientPage from './client-page';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  
  // Get related posts (same category, excluding current post)
  const allPosts = getAllPosts();
  const relatedPosts = post 
    ? allPosts
        .filter(p => p.slug !== slug && p.category === post.category)
        .slice(0, 3)
    : [];

  return (
    <BlogPostClientPage 
      post={post}
      relatedPosts={relatedPosts}
    />
  );
}
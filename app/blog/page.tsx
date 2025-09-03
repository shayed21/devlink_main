import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogClientPage from './client-page';

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <BlogClientPage 
      initialPosts={posts}
      initialCategories={categories}
      initialTags={tags}
    />
  );
}
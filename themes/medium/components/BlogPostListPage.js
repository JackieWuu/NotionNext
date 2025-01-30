<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import BlogPostCard from './BlogPostCard'
=======
<<<<<<< HEAD
import BlogPostCard from './BlogPostCard'
import BLOG from '@/blog.config'
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import BlogPostCard from './BlogPostCard'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationSimple from './PaginationSimple'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount }) => {
<<<<<<< HEAD
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
=======
<<<<<<< HEAD
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
=======
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

  if (!posts || posts.length === 0) {
    return <BlogPostListEmpty />
  }

  return (
    <div className='w-full justify-center'>
      <div id='posts-wrapper'>
        {/* 文章列表 */}
        {posts?.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      <PaginationSimple page={page} totalPage={totalPage} />
    </div>
  )
}

export default BlogPostListPage

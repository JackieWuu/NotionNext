<<<<<<< HEAD
import BlogPostCard from './BlogPostCard'
import PaginationNumber from './PaginationNumber'
import BLOG from '@/blog.config'
import BlogPostListEmpty from './BlogPostListEmpty'
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationNumber from './PaginationNumber'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

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
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
=======
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

  if (!posts || posts.length === 0) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div>
        {/* 文章列表 */}
        <div
          id='posts-wrapper'
          className='flex flex-wrap lg:space-y-4 space-y-1'>
          {posts?.map((post, index) => (
            <BlogPostCard key={post.id} index={index} post={post} />
          ))}
        </div>
        <PaginationNumber page={page} totalPage={totalPage} />
      </div>
    )
  }
}

export default BlogPostListPage

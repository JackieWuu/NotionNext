<<<<<<< HEAD
import BlogPostCard from './BlogPostCard'
import PaginationNumber from './PaginationNumber'
import BLOG from '@/blog.config'
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import BlogPostCard from './BlogPostCard'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationNumber from './PaginationNumber'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {
<<<<<<< HEAD
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
  const showPagination = postCount >= BLOG.POSTS_PER_PAGE
=======
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const showPagination = postCount >= POSTS_PER_PAGE
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div id='container' className='w-full'>
        {/* 文章列表 */}
        <div className='space-y-6 px-2'>
          {posts?.map(post => (
            <BlogPostCard
              index={posts.indexOf(post)}
              key={post.id}
              post={post}
              siteInfo={siteInfo}
            />
          ))}
        </div>
        {showPagination && (
          <PaginationNumber page={page} totalPage={totalPage} />
        )}
      </div>
    )
  }
}

export default BlogPostListPage

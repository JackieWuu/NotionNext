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
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
  const showPagination = postCount >= BLOG.POSTS_PER_PAGE
=======
>>>>>>> tangly1024-main
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const showPagination = postCount >= POSTS_PER_PAGE
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div className='w-full'>
        <div className='pt-6'></div>
        {/* 文章列表 */}
        <div className='pt-4 flex flex-wrap pb-12'>
          {posts?.map((post, index) => (
            <div key={post.id} className='xl:w-1/3 md:w-1/2 w-full p-4'>
              {' '}
              <BlogPostCard index={index} post={post} siteInfo={siteInfo} />
            </div>
          ))}
        </div>
        {showPagination && (
          <PaginationSimple page={page} totalPage={totalPage} />
        )}
      </div>
    )
  }
}

export default BlogPostListPage

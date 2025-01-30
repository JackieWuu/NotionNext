<<<<<<< HEAD
import BLOG from '@/blog.config'
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import LazyImage from '@/components/LazyImage'
import { useGlobal } from '@/lib/global'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * 最新文章列表
 * @param posts 所有文章数据
 * @param sliceCount 截取展示的数量 默认6
 * @constructor
 */
const LatestPostsGroup = ({ latestPosts, siteInfo }) => {
  // 获取当前路径
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()

  if (!latestPosts) {
    return <></>
  }

  return (
    <>
      <div className=' mb-2 px-1 flex flex-nowrap justify-between'>
        <div>
          <i className='mr-2 fas fas fa-history' />
          {locale.COMMON.LATEST_POSTS}
        </div>
<<<<<<< HEAD
        {latestPosts.map(post => {
          const selected = currentPath === `${BLOG.SUB_PATH}/${post.slug}`

          const headerImage = post?.pageCoverThumbnail ? post.pageCoverThumbnail : siteInfo?.pageCover

          return (
            (<Link
                    key={post.id}
                    title={post.title}
                    href={`${BLOG.SUB_PATH}/${post.slug}`}
                    passHref
                    className={'my-3 flex'}>

                    <div className="w-20 h-14 overflow-hidden relative">
                        <LazyImage src={`${headerImage}`} className='object-cover w-full h-full'/>
                    </div>
                    <div
                        className={
                            (selected ? ' text-indigo-400 ' : 'dark:text-gray-400 ') +
                            ' text-sm overflow-x-hidden hover:text-indigo-600 px-2 duration-200 w-full rounded ' +
                            ' hover:text-indigo-400 cursor-pointer items-center flex'
                        }
                    >
                        <div>
                            <div className='line-clamp-2 menu-link'>{post.title}</div>
                            <div className="text-gray-500">{post.lastEditedDay}</div>
                        </div>
                    </div>

                </Link>)
          )
        })}
=======
      </div>
      {latestPosts.map(post => {
        const headerImage = post?.pageCoverThumbnail
          ? post.pageCoverThumbnail
          : siteInfo?.pageCover
        const selected = currentPath === post?.href

        return (
          <Link
            key={post.id}
            title={post.title}
            href={post?.href}
            passHref
            className={'my-3 flex'}>
            <div className='w-20 h-14 overflow-hidden relative'>
              <LazyImage
                alt={post?.title}
                src={`${headerImage}`}
                className='object-cover w-full h-full'
              />
            </div>
            <div
              className={
                (selected ? ' text-indigo-400 ' : 'dark:text-gray-400 ') +
                ' text-sm overflow-x-hidden hover:text-indigo-600 px-2 duration-200 w-full rounded ' +
                ' hover:text-indigo-400 cursor-pointer items-center flex'
              }>
              <div>
                <div className='line-clamp-2 menu-link'>{post.title}</div>
                <div className='text-gray-500'>{post.lastEditedDay}</div>
              </div>
            </div>
          </Link>
        )
      })}
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    </>
  )
}
export default LatestPostsGroup

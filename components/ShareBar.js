import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import React from 'react'
import ShareButtons from './ShareButtons'

<<<<<<< HEAD
=======
<<<<<<< HEAD
const ShareBar = ({ post }) => {
  const router = useRouter()

  if (!JSON.parse(BLOG.POST_SHARE_BAR_ENABLE) || !post || post?.type !== 'Post') {
    return <></>
  }

  const shareUrl = BLOG.LINK + router.asPath

  return <div className='m-1 overflow-x-auto'>
        <div className='flex w-full md:justify-end'>
            <ShareButtons shareUrl={shareUrl} title={post.title} image={post.pageCover} body={
                post?.title +
                ' | ' +
                BLOG.TITLE +
                ' ' +
                shareUrl +
                ' ' +
                post?.summary
            } />
        </div>
=======
>>>>>>> tangly1024-main
const ShareButtons = dynamic(() => import('@/components/ShareButtons'), {
  ssr: false
})

/**
 * 分享栏
 * @param {} param0
 * @returns
 */
const ShareBar = ({ post }) => {
  if (
    !JSON.parse(siteConfig('POST_SHARE_BAR_ENABLE')) ||
    !post ||
    post?.type !== 'Post'
  ) {
    return <></>
  }

  return (
    <div className='m-1 overflow-x-auto'>
      <div className='flex w-full md:justify-end'>
        <ShareButtons post={post} />
      </div>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    </div>
  )
}
export default ShareBar

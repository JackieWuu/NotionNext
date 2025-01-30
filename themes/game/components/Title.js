import BLOG from '@/blog.config'

/**
 * 标题栏
 * @param {*} props
 * @returns
 */
export const Title = (props) => {
<<<<<<< HEAD
  const { post } = props
  const title = post?.title || siteConfig('DESCRIPTION')
  const description = post?.description || siteConfig('AUTHOR')
=======
<<<<<<< HEAD:themes/example/components/Title.js
  const { siteInfo, post } = props
  const title = post?.title || siteInfo?.description
  const description = post?.description || BLOG.AUTHOR
=======
  const { post } = props
  const title = post?.title || siteConfig('DESCRIPTION')
  const description = post?.description || siteConfig('AUTHOR')
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0:themes/game/components/Title.js
>>>>>>> tangly1024-main

  return <div className="text-center px-6 py-12 mb-6 bg-gray-100 dark:bg-hexo-black-gray dark:border-hexo-black-gray border-b">
    <h1 className=" text-xl md:text-4xl pb-4">{title}</h1>
    <p className="leading-loose text-gray-dark">
      {description}
    </p>
  </div>
}

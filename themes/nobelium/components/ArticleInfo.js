
import Image from 'next/image'
import BLOG from '@/blog.config'
import TagItem from './TagItem'
import md5 from 'js-md5'
<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'
=======
<<<<<<< HEAD
=======
import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

export const ArticleInfo = (props) => {
  const { post } = props

  const emailHash = md5(BLOG.CONTACT_EMAIL)

  return <section className="flex-wrap flex mt-2 text-gray--600 dark:text-gray-400 font-light leading-8">
    <div>

<<<<<<< HEAD
      <h1 className="font-bold text-3xl text-black dark:text-white">
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}{post?.title}
      </h1>

      {post?.type !== 'Page' && <>
        <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
          <div className="flex mb-4">
            <a href={BLOG.CONTACT_GITHUB || '#'} className="flex">
              <Image
                alt={BLOG.author}
                width={24}
                height={24}
                src={`https://gravatar.com/avatar/${emailHash}`}
                className="rounded-full"
              />
              <p className="ml-2 md:block">{BLOG.author}</p>
            </a>
            <span className="block">&nbsp;/&nbsp;</span>
          </div>
          <div className="mr-2 mb-4 md:ml-0">
            {post?.publishDay}
          </div>
          {post?.tags && (
            <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
              {post?.tags.map(tag => (
                <TagItem key={tag} tag={tag} />
              ))}
            </div>
          )}
          <span className="hidden busuanzi_container_page_pv mr-2">
            <i className='mr-1 fas fa-eye' />
            &nbsp;
            <span className="mr-2 busuanzi_value_page_pv" />
          </span>
        </nav>
      </>}
=======
<<<<<<< HEAD
            <div className="font-bold text-3xl text-black dark:text-white">
            {post?.title}
            </div>
=======
            <h1 className="font-bold text-3xl text-black dark:text-white">
                {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}{post?.title}
            </h1>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

    </div>

  </section>
}

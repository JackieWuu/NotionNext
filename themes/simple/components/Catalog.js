import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { uuidToId } from 'notion-utils'
import { useEffect, useRef, useState } from 'react'

/**
 * 目录导航组件
 * @param toc
 * @returns {JSX.Element}
 * @constructor
 */
const Catalog = ({ post }) => {
  const { locale } = useGlobal()
  // 目录自动滚动
  const tRef = useRef(null)
  // 同步选中目录事件
  const [activeSection, setActiveSection] = useState(null)

  // 监听滚动事件
  useEffect(() => {
    const throttleMs = 200
    const actionSectionScrollSpy = throttle(() => {
      const sections = document.getElementsByClassName('notion-h')
      let prevBBox = null
      let currentSectionId = activeSection
      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i]
        if (!section || !(section instanceof Element)) continue
        if (!currentSectionId) {
          currentSectionId = section.getAttribute('data-id')
        }
        const bbox = section.getBoundingClientRect()
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
        const offset = Math.max(150, prevHeight / 4)
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute('data-id')
          prevBBox = bbox
          continue
        }
        break
      }
      setActiveSection(currentSectionId)
      const index = post?.toc?.findIndex(
        obj => uuidToId(obj.id) === currentSectionId
      )
      tRef?.current?.scrollTo({ top: 28 * index, behavior: 'smooth' })
    }, throttleMs)

    window.addEventListener('scroll', actionSectionScrollSpy)
    actionSectionScrollSpy()
    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy)
    }
  }, [post])

  // 无目录就直接返回空
  if (!post || !post?.toc || post?.toc?.length < 1) {
    return <></>
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  return <div className='px-3 '>
    <div className='dark:text-white'><i className='mr-1 fas fa-stream' />{locale.COMMON.TABLE_OF_CONTENTS}</div>

    <div className='overflow-y-auto overscroll-none max-h-36 lg:max-h-96 scroll-hidden' ref={tRef}>
      <nav className='h-full  text-black'>
        {post?.toc?.map((tocItem) => {
          const id = uuidToId(tocItem.id)
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`notion-table-of-contents-item duration-300 transform font-light dark:text-gray-200
            notion-table-of-contents-item-indent-level-${tocItem.indentLevel} `}
            >
              <span style={{ display: 'inline-block', marginLeft: tocItem.indentLevel * 16 }}
                className={`${activeSection === id && ' font-bold text-red-500 underline overflow-ellipsis truncate'}`}
              >
                {tocItem.text}
              </span>
            </a>
          )
        })}
      </nav>

    </div>
  </div>
=======
>>>>>>> tangly1024-main
  return (
    <div className='px-3 '>
      <div className='dark:text-white mb-2'>
        <i className='mr-1 fas fa-stream' />
        {locale.COMMON.TABLE_OF_CONTENTS}
      </div>

      <div
        className='overflow-y-auto overscroll-none max-h-36 lg:max-h-96 scroll-hidden'
        ref={tRef}>
        <nav className='h-full  text-black'>
          {post?.toc?.map(tocItem => {
            const id = uuidToId(tocItem.id)
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`${activeSection === id && 'dark:border-white border-red-700 text-red-700 font-bold'} hover:font-semibold border-l pl-4 block hover:text-red-600 border-lduration-300 transform dark:text-red-400 dark:border-red-400
                notion-table-of-contents-item-indent-level-${tocItem.indentLevel} catalog-item `}>
                <span
                  style={{
                    display: 'inline-block',
                    marginLeft: tocItem.indentLevel * 16
                  }}
                  className={`truncate ${activeSection === id ? ' font-bold text-red-600 dark:text-white underline' : ''}`}>
                  {tocItem.text}
                </span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}

export default Catalog

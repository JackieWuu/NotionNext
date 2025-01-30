import { useState } from 'react';
import { siteConfig } from '@/lib/config'

/**
 * Tabs切换标签
 * @param {*} param0
 * @returns
 */
const Tabs = ({ className, children }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const validChildren = children.filter(c => c);

  if (validChildren.length === 0) {
    return <></>;
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  children = children.filter(c => c !== '')

  let count = 0
  children.forEach(e => {
    if (e) {
      count++
    }
  })

  if (count === 0) {
    return <></>
  }

  if (count === 1) {
    return <section className={'duration-200 ' + className}>
            {children}
        </section>
  }

  function tabClickHandle(i) {
    setCurrentTab(i)
  }

  return <div className={'mb-5 duration-200 ' + className}>
        <ul className='flex justify-center space-x-5 pb-4 dark:text-gray-400 text-gray-600 overflow-auto'>
            {children.map((item, index) => {
              return <li key={index}
                    className={(currentTab === index ? 'font-black border-b-2 border-red-400 text-red-400 animate__animated animate__jello ' : 'font-extralight cursor-pointer') + ' text-sm font-sans '}
                    onClick={() => {
                      tabClickHandle(index)
                    }}>
                    {item?.key}
                </li>
            })}
=======
>>>>>>> tangly1024-main
  return (
    <div className={`mb-5 duration-200 ${className}`}>
      {!(validChildren.length === 1 && siteConfig('COMMENT_HIDE_SINGLE_TAB')) && (
        <ul className="flex justify-center space-x-5 pb-4 dark:text-gray-400 text-gray-600 overflow-auto">
          {validChildren.map((item, index) => (
            <li key={index}
              className={`${currentTab === index ? 'font-black border-b-2 border-red-600 text-red-600 animate__animated animate__jello' : 'font-extralight cursor-pointer'} text-sm font-sans`}
              onClick={() => setCurrentTab(index)}>
              {item.key}
            </li>
          ))}
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
        </ul>
      )}
      {/* 标签切换的时候不销毁 DOM 元素，使用 CSS 样式进行隐藏 */}
      <div>
        {validChildren.map((item, index) => (
          <section
            key={index}
            className={`${currentTab === index ? 'opacity-100 static h-auto' : 'opacity-0 absolute h-0 pointer-events-none overflow-hidden'}`}>
            {item}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

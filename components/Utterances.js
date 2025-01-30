<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
import { useEffect } from 'react'
=======
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

/**
 * 评论插件
 * @param issueTerm
 * @param layout
 * @returns {JSX.Element}
 * @constructor
 */
const Utterances = ({ issueTerm, layout }) => {
  const { isDarkMode } = useGlobal()

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    const anchor = document.getElementById('comments');
    if (!anchor) {
      return
=======
<<<<<<< HEAD
    const theme =
      BLOG.APPEARANCE === 'auto'
        ? 'preferred-color-scheme'
        : BLOG.APPEARANCE === 'light'
          ? 'github-light'
          : 'github-dark'
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    script.setAttribute('repo', BLOG.COMMENT_UTTERRANCES_REPO)
    script.setAttribute('issue-term', 'title')
    script.setAttribute('theme', theme)
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
=======
    const anchor = document.getElementById('comments');
    if (!anchor) {
      return
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    }
    const script = document.createElement('script');
    script.onload = () => setLoading(false);
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', true);
    script.setAttribute('repo', siteConfig('COMMENT_UTTERRANCES_REPO'));
    script.setAttribute('issue-term', 'title');
    // 初始主题
    script.setAttribute('theme', isDarkMode ? 'github-dark' : 'github-light');
    anchor?.appendChild(script);

    return () => {
      // anchor.innerHTML = ''
    };
  }, []);

  useEffect(() => {
    // 直接设置 iframe 的类来改变主题，不重新加载脚本
    const iframe = document.querySelector('iframe.utterances-frame');
    if (iframe) {
      iframe.contentWindow.postMessage({
        type: 'set-theme',
        theme: isDarkMode ? 'github-dark' : 'github-light'
      }, 'https://utteranc.es');
    }
  }, [isDarkMode]);

  return (
    <div id="comments" className='utterances'>
      {isLoading && (
        <div className="flex justify-center items-center m-8">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-indigo-400 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
}

export default Utterances

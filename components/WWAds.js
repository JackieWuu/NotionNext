import React from 'react'
import BLOG from '@/blog.config'

/**
 * 万维广告插件
 * @param {string} orientation - 广告方向，可以是 'vertical' 或 'horizontal'
 * @param {boolean} sticky - 是否粘性定位
 * @returns {JSX.Element | null} - 返回渲染的 JSX 元素或 null
 */
<<<<<<< HEAD
export default function WWAds({ orientation = 'vertical', sticky = false, className }) {
  if (!JSON.parse(BLOG.AD_WWADS_ID)) {
=======
export default function WWAds({
  orientation = 'vertical',
  sticky = false,
  className
}) {
  const AD_WWADS_ID = siteConfig('AD_WWADS_ID')

  if (!AD_WWADS_ID) {
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    return null
  }

  return (
<<<<<<< HEAD
    <div className={`wwads-cn ${orientation === 'vertical' ? 'wwads-vertical' : 'wwads-horizontal'} ${sticky ? 'wwads-sticky' : ''} z-30 ${className || ''}`} data-id={BLOG.AD_WWADS_ID}></div>
=======
    <div
      data-id={AD_WWADS_ID}
      className={`wwads-cn 
            ${orientation === 'vertical' ? 'wwads-vertical' : 'wwads-horizontal'}
            ${sticky ? 'wwads-sticky' : ''} z-10 ${className || ''}`}
    />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  )
}

// import 'gitalk/dist/gitalk.css'
import BLOG from '@/blog.config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'
// import GitalkComponent from 'gitalk/dist/gitalk-component'

const Gitalk = ({ frontMatter }) => {
  //   return <GitalkComponent options={{
  //     id: frontMatter.id,
  //     title: frontMatter.title,
  //     clientID: BLOG.COMMENT_GITALK_CLIENT_ID,
  //     clientSecret: BLOG.COMMENT_GITALK_CLIENT_SECRET,
  //     repo: BLOG.COMMENT_GITALK_REPO,
  //     owner: BLOG.COMMENT_GITALK_OWNER,
  //     admin: BLOG.COMMENT_GITALK_ADMIN.split(','),
  //     distractionFreeMode: JSON.parse(BLOG.COMMENT_GITALK_DISTRACTION_FREE_MODE)
  //   }} />
  const loadGitalk = async () => {
    await loadExternalResource(BLOG.COMMENT_GITALK_CSS_CDN_URL, 'css')
    await loadExternalResource(BLOG.COMMENT_GITALK_JS_CDN_URL, 'js')
    const Gitalk = window.Gitalk
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> tangly1024-main
    if (!Gitalk) {
      // 可以加入延时重试
      console.warn('Gitalk 初始化失败')
      return
    }
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    const gitalk = new Gitalk({
      clientID: BLOG.COMMENT_GITALK_CLIENT_ID,
      clientSecret: BLOG.COMMENT_GITALK_CLIENT_SECRET,
      repo: BLOG.COMMENT_GITALK_REPO,
      owner: BLOG.COMMENT_GITALK_OWNER,
      admin: BLOG.COMMENT_GITALK_ADMIN.split(','),
      id: frontMatter.id, // Ensure uniqueness and length less than 50
      distractionFreeMode: JSON.parse(BLOG.COMMENT_GITALK_DISTRACTION_FREE_MODE) // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
  }
  useEffect(() => {
    loadGitalk()
  }, [])

  return <div id="gitalk-container"></div>
}

export default Gitalk

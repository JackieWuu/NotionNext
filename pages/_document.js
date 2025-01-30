// eslint-disable-next-line @next/next/no-document-import-in-page
import BLOG from '@/blog.config'
<<<<<<< HEAD
import CommonScript from '@/components/CommonScript'
=======
import Document, { Head, Html, Main, NextScript } from 'next/document'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
<<<<<<< HEAD
            <Html lang={BLOG.LANG}>
                <Head>
                <link rel='icon' href= {`${BLOG.BLOG_FAVICON}`} />
                  <CommonScript />
                  {/* 预加载字体 */}
                  {BLOG.FONT_AWESOME && <>
                      <link rel='preload' href={BLOG.FONT_AWESOME} as="style" crossOrigin="anonymous" />
                      <link rel="stylesheet" href={BLOG.FONT_AWESOME} crossOrigin="anonymous" referrerPolicy="no-referrer" />
                  </>}
=======
      <Html lang={BLOG.LANG}>
        <Head>
          {/* 预加载字体 */}
          {BLOG.FONT_AWESOME && (
            <>
              <link
                rel='preload'
                href={BLOG.FONT_AWESOME}
                as='style'
                crossOrigin='anonymous'
              />
              <link
                rel='stylesheet'
                href={BLOG.FONT_AWESOME}
                crossOrigin='anonymous'
                referrerPolicy='no-referrer'
              />
            </>
          )}
        </Head>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

<<<<<<< HEAD
import BLOG from '@/blog.config'
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * 二维码生成
 */
export default function QrCode({ value }) {
<<<<<<< HEAD
=======
  const qrCodeCDN =
    process.env.NEXT_PUBLIC_QR_CODE_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'

>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  useEffect(() => {
    let qrcode
    if (!value) {
      return
    }
    loadExternalResource(BLOG.QR_CODE_CDN, 'js').then(url => {
      const QRCode = window.QRCode
      qrcode = new QRCode(document.getElementById('qrcode'), {
        text: value,
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    //   console.log('二维码', qrcode, value)
    })
    return () => {
      if (qrcode) {
        qrcode.clear() // clear the code.
      }
    }
  }, [])

  return <div id='qrcode'></div>
}

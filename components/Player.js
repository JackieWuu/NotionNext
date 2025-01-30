import BLOG from '@/blog.config'
import { useEffect, useRef, useState } from 'react'

const Player = () => {
  const [player, setPlayer] = useState()
  const ref = useRef(null)

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const lrcType = JSON.parse(BLOG.MUSIC_PLAYER_LRC_TYPE)
  const playerVisible = JSON.parse(BLOG.MUSIC_PLAYER_VISIBLE)
  const autoPlay = JSON.parse(BLOG.MUSIC_PLAYER_AUTO_PLAY)
=======
>>>>>>> tangly1024-main
  const musicPlayerEnable = siteConfig('MUSIC_PLAYER')
  const musicPlayerCDN = siteConfig('MUSIC_PLAYER_CDN_URL')
  const musicMetingEnable = siteConfig('MUSIC_PLAYER_METING')
  const musicMetingCDNUrl = siteConfig(
    'MUSIC_PLAYER_METING_CDN_URL',
    'https://cdnjs.cloudflare.com/ajax/libs/meting/2.0.1/Meting.min.js'
  )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

  const meting = JSON.parse(BLOG.MUSIC_PLAYER_METING)

  useEffect(() => {
    if (!meting && window.APlayer) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      setPlayer(new window.APlayer({
        container: ref.current,
        fixed: true,
        lrcType: lrcType,
        autoplay: autoPlay,
        order: BLOG.MUSIC_PLAYER_ORDER,
        audio: BLOG.MUSIC_PLAYER_AUDIO_LIST
      }))
=======
>>>>>>> tangly1024-main
      setPlayer(
        new window.APlayer({
          container: ref.current,
          fixed: true,
          lrcType: lrcType,
          autoplay: autoPlay,
          order: order,
          audio: audio
        })
      )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    }
    return () => {
      setPlayer(undefined)
    }
  }, [])

  return (
    <div className={playerVisible ? 'visible' : 'invisible'}>
      <link
        rel='stylesheet'
        type='text/css'
        href='https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.css'
      />
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {meting
        ? <meting-js
            fixed="true"
            type="playlist"
            preload="auto"
            lrc-type={BLOG.MUSIC_PLAYER_METING_LRC_TYPE}
            autoplay={autoPlay}
            order={BLOG.MUSIC_PLAYER_ORDER}
            server={BLOG.MUSIC_PLAYER_METING_SERVER}
            id={BLOG.MUSIC_PLAYER_METING_ID}
          />
        : <div ref={ref} data-player={player} />
      }
=======
>>>>>>> tangly1024-main
      {meting ? (
        <meting-js
          fixed='true'
          type='playlist'
          preload='auto'
          api={siteConfig(
            'MUSIC_PLAYER_METING_API',
            'https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r'
          )}
          autoplay={autoPlay}
          order={siteConfig('MUSIC_PLAYER_ORDER')}
          server={siteConfig('MUSIC_PLAYER_METING_SERVER')}
          id={siteConfig('MUSIC_PLAYER_METING_ID')}
        />
      ) : (
        <div ref={ref} data-player={player} />
      )}
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    </div>
  )
}

export default Player

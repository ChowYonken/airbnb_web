import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import request from '@/services'

const index = memo(() => {
  const [highScore, setHighScore] = useState({})
  useEffect(() => {
    request.get({ url: '/home/highscore' }).then(res => {
      setHighScore(res)
    })
  }, [])
  return (
    <div>
      <h1>{highScore.title}</h1>
      <ul>
        {
          highScore?.list?.map((v, i) => {
            return <li key={i}>{v.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default index
import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'
import Header from '@/components/Header'

const App = memo(() => {
  return (
    <div>
      <Header/>
      <div className='main'>
        {
          useRoutes(routes)
        }
      </div>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App
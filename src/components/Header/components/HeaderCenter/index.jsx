import React, { memo } from 'react'
import HeaderCenterWrapper from './style'
import SearchBarSvg from '@/assets/svg/search-bar-svg'

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className='search-bar'>
        <div className='search-bar-text'>搜索房源和体验</div>
        <div className='search-bar-icon'>
          <SearchBarSvg/>
        </div>
      </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter
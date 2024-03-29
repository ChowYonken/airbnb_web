import React, { memo } from 'react'
import HeaderCenter from './components/HeaderCenter'
import HeaderLeft from './components/HeaderLeft'
import HeaderRight from './components/HeaderRight'
import HeaderWrapper from './style'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight/>
    </HeaderWrapper>
  )
})

export default Header
import React, { memo } from 'react'
import LogoSvg from '@/assets/svg/logo-svg'
import HeaderLeftWrapper from './style'

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <LogoSvg/>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft
import React, { memo, useEffect, useState } from 'react'
import HeaderRightWrapper from './style'
import GlobalSvg from '@/assets/svg/global-svg'
import AvatarSvg from '@/assets/svg/avatar-svg'
import MenuSvg from '@/assets/svg/menu-svg'

const HeaderRight = memo(() => {
  const [ showPanel, setShowPanel ] = useState(false)

  useEffect(() => {
    function handleWidowClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', handleWidowClick, true) // 第三个参数为事件捕获，false为冒泡捕获
    return () => {
      window.removeEventListener('click', handleWidowClick, true)
    }
  }, [])

  function handleProfileClick() {
    setShowPanel(true)
  }

  return (
    <HeaderRightWrapper>
      <div className='btn'>
        <span>登录</span>
        <span>注册</span>
        <span>
          <GlobalSvg/>
        </span>
      </div>
      <div className='profile' onClick={handleProfileClick}>
        <MenuSvg/>
        <AvatarSvg/>
      </div>
      {
        showPanel && (
          <div className='panel'>
            <div className='up'>
              <div className='panel-item'>注册</div>
              <div className='panel-item'>登录</div>
            </div>
            <div className='down'>
              <div className='panel-item'>出租房源</div>
              <div className='panel-item'>开展体验</div>
              <div className='panel-item'>帮助</div>
            </div>
          </div>
        )
      }
    </HeaderRightWrapper>
  )
})

export default HeaderRight
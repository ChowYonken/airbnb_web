import styled from 'styled-components'

const HeaderCenterWrapper = styled.div`
  color: ${prop => prop.theme.text.secondaryColor};
  font-weight: 600;

  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;

    &-text {
      padding: 0 16px;
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${prop => prop.theme.color.primaryColor};
    }
    
    ${prop => prop.theme.mixin.boxShadow}
  }
`

export default HeaderCenterWrapper

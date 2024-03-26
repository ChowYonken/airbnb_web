import styled from "styled-components";

const HeaderRightWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  color: ${prop => prop.theme.text.primaryColor};
  font-weight: 700;
  flex: 1;

  .btn {
    display: flex;
    align-items: center;
    span {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 25px;
    ${prop => prop.theme.mixin.boxShadow}
  }

  .panel {
    position: absolute;
    top: 54px;
    right: 0;
    width: 240px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0,0,0,.2);
    color: #666;
    .up {
      border-bottom: 1px solid #ddd;
    }
    .up,
    .down {
      padding: 10px 0;
      .panel-item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`

export default HeaderRightWrapper

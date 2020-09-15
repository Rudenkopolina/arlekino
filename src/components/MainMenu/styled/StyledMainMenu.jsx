import styled from 'styled-components'

const StyledMainMenu = styled.nav`
    min-height: 60px;
    background: #FFFFFF;
    border: 1px solid #EFEEF3;
    margin-bottom: 28px;
    margin-top: 5px;
    nav {
      display: inline-flex;
      width: calc(100% - 353px);
      margin-top: 15px;
    }
    aside {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 353px;
      height: 30px;
      position: relative;
      top: 15px;
      border-left: 1px solid var(--panelBorderGray);
    }
`
export default StyledMainMenu

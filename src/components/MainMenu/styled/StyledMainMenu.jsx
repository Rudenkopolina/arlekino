import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledMainMenu = styled.nav`
    min-height: 60px;
    background: #FFFFFF;
    border: 1px solid #EFEEF3;
    margin-bottom: 28px;
    margin-top: 5px;
    
    @media ${DEVICE.tabletDevices1250} {
      border: none;
      display: ${({ isDesktop }) => (isDesktop ? 'none;' : 'block;')};
    }

    nav {
      display: inline-flex;
      width: calc(100% - 353px);
      margin-top: 15px;
      margin-left: 10px;
      &>div{
          &:first-child {
            padding-right: 0;
            padding-left: 0;
          }
      }
      &>div{
          &:last-child {
            
            padding-left: 23px;
          }
      }
        @media ${DEVICE.wideScreen} {
            width: calc(100% - 420px);
            justify-content: space-around;
        }
      @media ${DEVICE.tabletDevices1250} {
        width: 100%;
        flex-direction: column;
        margin-bottom: 30px;
      }
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
 
       @media ${DEVICE.wideScreen} {
          width: 420px;
      }
     
      @media ${DEVICE.tabletDevices1250} {
        width: 100%;
        border-left: none;
        top: 0;
        height: 58px;
        border-top: 1px solid var(--panelBorderGray);
        border-bottom: 1px solid var(--panelBorderGray);
      }
    }
`
export default StyledMainMenu

import styled from 'styled-components'
import IconPlayer from '../../../../../assets/img/onlineplayer.svg'

const Player = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  svg path {
     transition: all 0.25s ease-in;
  } 
  &:hover {
    color: var(--orange);
    p,a {
      color: var(--orange);
    }
    svg path {
      fill: var(--orange) !important;
    }
  }
  
  i {
     cursor:pointer;
     display: inline-block;
     width: 24px;
     height: 24px;
     margin-right: 8px;
  }
  p,a {
    font-family: var(--fontGilroyMedium);
    font-size: 15px;
    line-height: 20px;
    color: var(--mainblue);
    letter-spacing: 0.16px;
    cursor:pointer;
    font-feature-settings: 'pnum' on, 'lnum' on;
    transition: all 0.25s ease-in;
    
  }
`
export default Player

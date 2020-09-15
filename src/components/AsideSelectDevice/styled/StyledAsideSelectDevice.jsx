import styled from 'styled-components'
import DropDown from '../../../assets/img/arrow-down.svg'

const StyledAsideSelectDevice = styled.div`

  &> p {
    font-family: var(--fontGilroySemiBold);
    font-size: 12px;
    line-height: 20px;
    color: var(--orange);
    text-transform: uppercase;
    cursor: pointer;
    
     @media (min-width: 768px) and (max-width: 1249px) {
        position: relative;
        left: -2px;
      }
    
    i {
       cursor: pointer;
       display: inline-block;
       margin-left: 19px;
       background: url(${DropDown}) center center no-repeat;
       background-size: contain;
       position: relative;
       top: -2px;
       width: 11px;
       height: 6px;
       transform: ${({ isVisible }) => (isVisible ? 'rotate(180deg);' : 'rotate(0deg);')};  
    }
  }	
`

export default StyledAsideSelectDevice

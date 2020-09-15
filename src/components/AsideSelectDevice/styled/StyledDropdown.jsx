import styled from 'styled-components'
import DropDown from '../../../assets/img/arrow-down.svg'

const StyledSelectDevice = styled.div` 
  &> p {
    font-family: var(--fontGilroySemiBold);
    font-size: 12px;
    line-height: 20px;
    color: var(--orange);
    i {
       cursor: pointer;
       display: inline-block;
       width: 10px;
       height: 10px;
       margin-left: 19px;
       background: url(${DropDown}) center center no-repeat;  
    }
  }	
`

export default StyledSelectDevice

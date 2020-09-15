import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'


const StyledMenu = styled.nav`
    display: flex;
    padding-top: 30px;	
    @media ${DEVICE.tabletDevices1250} {
      flex-direction: column;
      width: 100%;
      padding-top: 0;	  
    }   
`

export default StyledMenu

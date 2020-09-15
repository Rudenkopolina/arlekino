import styled from 'styled-components'
import EditIcon from '../../../../../assets/img/editblue.svg'
import { DEVICE } from '../../../../../constants/media'

const StyledEditIcon = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  cursor: pointer;
  margin-right: 5px;
  position: relative;
  top: 3px;
  left: 23px;
  background: url(${EditIcon}) center center no-repeat;
 
  
  
  @media ${DEVICE.tabletDevices1250} {
      
  }
`
export default StyledEditIcon

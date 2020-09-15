import styled from 'styled-components'
import EditIcon from '../../../../assets/img/editblue.svg'
import { DEVICE } from '../../../../constants/media'

const StyledEditIcon = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  cursor: pointer;
  margin-right: 9px;
  position: relative;
  top: -3px;
  background: url(${EditIcon}) center center no-repeat;
  
  
  @media ${DEVICE.tabletDevices1250} {
      width: 15px;
      height: 15px;
      background: url(${EditIcon}) center center no-repeat;
      background-size: cover;
  }
`
export default StyledEditIcon

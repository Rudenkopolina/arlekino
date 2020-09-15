import styled, { css } from 'styled-components'
import EditIcon from '../../../assets/img/editblue.svg'
import { DEVICE } from '../../../constants/media'

const StyledEditIcon = styled.i`
  display: inline-block;
  width: 12px;
  height: 12px;
  cursor: pointer;
  margin-right: 9px;
  position: absolute;
  right: 0;
  top: 22px;
  background: url(${EditIcon}) center center no-repeat;
   
   ${({  uitype }) => {
    if (uitype && uitype === 'editComment') {
      return css`
            top: 47px;
            
        `}}}   
  background-size: contain;
 
  @media ${DEVICE.tabletDevices1250} {
      width: 15px;
      height: 15px;
      background: url(${EditIcon}) center center no-repeat;
      background-size: contain;
  }
`
export default StyledEditIcon

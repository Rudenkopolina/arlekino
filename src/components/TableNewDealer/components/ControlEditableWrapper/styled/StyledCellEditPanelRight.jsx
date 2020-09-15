import styled from 'styled-components';
import CloseIcon from '../../../../../assets/img/close-red.svg'
import { DEVICE } from '../../../../../constants/media'

const StyledCellEditPanelRight = styled.div`
    position: relative;
    right: 4px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: ${({ control }) => (control && control === 'textarea' ? '-1px;' : '3px;')}; 
     
    i {
      margin-left: 0;
      cursor: pointer;
      display: block;
      width: 10px;
      height: 10px;
      position: relative;
      top: 4px;
      background: url(${CloseIcon}) center center no-repeat;
      
      @media ${DEVICE.tabletDevices1250} {
          width: 14px;
          height: 14px;
          background: url(${CloseIcon}) center center no-repeat;
          background-size: cover;
      }
   }
  `
export default StyledCellEditPanelRight;
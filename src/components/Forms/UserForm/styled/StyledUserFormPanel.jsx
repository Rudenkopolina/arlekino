import styled from 'styled-components';
import CloseIcon from '../../../../assets/img/close-red.svg'
import { DEVICE } from '../../../../constants/media'

const StyledUserFormPanel = styled.div`
    //display: none;
    display: inline-flex;
    align-items: center;
    width: 45px;
    position: relative;
    top: 4px;
    label {
      margin-right: 0 !important;
    }
   
   i {
      margin-left: 10px;
      cursor: pointer;
      display: block;
      width: 10px;
      height: 10px;
      background: url(${CloseIcon}) center center no-repeat;
      
      @media ${DEVICE.tabletDevices1250} {
          width: 14px;
          height: 14px;
          background: url(${CloseIcon}) center center no-repeat;
          background-size: cover;
      }
   }
  `
export default StyledUserFormPanel;
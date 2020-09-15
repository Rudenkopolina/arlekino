import styled from 'styled-components';
import CloseIcon from '../../../../assets/img/close-red.svg'
const StyledUserFormPanel = styled.div`
    //display: none;
    display: inline-flex;
    align-items: center;
    width: 40px;
    position: relative;
    top: 3px;
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
   }
  `
export default StyledUserFormPanel;
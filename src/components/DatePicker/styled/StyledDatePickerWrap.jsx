import styled from 'styled-components'
import { DEVICE } from '../../../constants/media';
import IconClose from '../../../assets/img/closeicongray.svg'

const StyledDatePickerWrap = styled.div`
    //border: 1px solid red;
    //height: 20px;
    //width: 80px;
    //

    .ant-picker-time-panel {
      display: none !important;
      
    }
    
     .ant-picker {
          //visibility: hidden !important;
          //height: 1px;
          opacity: 0;

       }
    .ant-picker-dropdown {
      //top: 0 !important;
      background: #FFFFFF;
      border: 1px solid #EFEEF3;
      box-sizing: border-box;
      box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.07);
      border-radius: 3px;
    }
    .ant-picker-date-panel {
      //width: 260px;
    }
    .ant-picker-content td {
      width: 24px;
    }
    .ant-picker-datetime-panel .ant-picker-time-panel {
      display: none !important;
    }
     .ant-picker-cell-today .ant-picker-cell-inner {
        //border: 1px solid #5C70CF;
        //border-radius: 50%;  
     }
     .ant-picker-cell-in-view.ant-picker-cell-disabled  {
        color: var(--gray);
    }
     .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
        border: 1px solid #5C70CF;
        border-radius: 50%;  
     }
    .ant-picker-cell-in-view.ant-picker-cell-disabled .start-date {
        border: none !important;
    }
     .ant-picker-cell-inner {
        font-size: 12px;
        color: var(--mainblack);
        font-family: var(--fontGilroyRegular); 
     }
     .ant-picker-cell-disabled .ant-picker-cell-inner {
         color: var(--gray);
         opacity: 0.8;
    }
    thead {
      display: none;
    }
    .ant-picker-header-view .ant-picker-month-btn {
      text-transform: uppercase;
      font-size: 14px;
      color: var(--mainblack);
      font-family: var(--fontGilroyMedium);
      margin-right: 15px;
      &:hover {
        color: var(--mainblack);
      }
    }
    
    .ant-picker-header-super-prev-btn,
    .ant-picker-header-super-next-btn {
      display: none;
    }
    .ant-picker-date-panel .ant-picker-body {
      padding: 0 15px 12px 15px;
    }
    .ant-picker-header-next-btn {
      position: absolute;
      top: 5px;
      left: 60px;
    }
    .ant-picker-header {
      border: none;
    }
    .ant-picker-header-prev-btn {
      position: absolute;
      top: 5px;
      left: 26px;
    }
     .ant-picker-footer .ant-picker-today-btn {
      display: none;
    }
    .ant-picker-footer-extra:not(:last-child) {
       border-bottom:  none;
    }
    .ant-picker-header-view {
      padding-bottom: 10px;
    }
    .ant-picker-footer-extra  i {
        position: absolute;
        width: 10px;
        height: 10px;
        top: 13px;
        right: 13px;
        cursor: pointer;
        background: url(${IconClose}) center center no-repeat;
        background-size: contain;
        opacity: 0.7;
    }
    .ant-picker-footer  {
        border:  none 
    }
    .ant-picker-footer-extra {
        padding-right: 14px;
        margin-bottom: 10px;
      p {
        display: flex;
        justify-content: flex-end;
        font-family: var(--fontGilroySemiBold);
        font-size: 12px;
        line-height: 20px;
        color: var(--mainblue);
        padding-right: 10px;
        cursor: pointer;
      }
    }
    .ant-picker-header-view .ant-picker-year-btn {
      text-transform: uppercase;
      font-size: 14px;
      font-family: var(--fontGilroyMedium);
      color: var(--orange);
    }
    .ant-picker-cell-disabled::before {
        background: transparent;
    }
    .ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner, .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner {
        background: transparent;
    }

        
        @media ${DEVICE.tabletDevices1250} {
      
        }
   
    
    
`

export default StyledDatePickerWrap ;

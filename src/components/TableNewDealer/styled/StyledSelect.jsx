import styled from 'styled-components';
import { Select  } from 'antd'
import IconSelect from '../../../assets/img/down-select.svg'

const StyledSelectThTop = styled(Select)`

    && {
      width: 106px;
      background: var(--white);     
      border: 1px solid #ECECEC;
      box-sizing: border-box;
      font-size: 12px;
      border-radius: 2px;
      height: 28px;
      font-family: var(--fontGilroyMedium);
      color: #5C70CF;
  
      .ant-select-selector {
          padding: 0 !important;
          box-shadow: none;
          border: none;
          font-size: 12px;
          border-radius: 0;
          height: auto !important;
          height: 26px !important; 
      }
      .ant-select-selection-item {
        box-shadow: none;
        line-height: 28px;
        font-size: 12px; 
        padding-left: 11px;
      }
      
      &.ant-select-open {
        .ant-select-arrow {
             transform: translateY(-2px) rotate(180deg);
        }
      }
      &.ant-select-single.ant-select-open .ant-select-selection-item {
        opacity: 0.8;
      }
     .ant-select-arrow {
        width: 8px;
        height: 5px;
        background: url(${(IconSelect)}) center center no-repeat;
        background-size: contain;
        right: 9px;
        margin-top: -2px;
      }
      .ant-select-arrow .anticon > svg {
          display: none;
      }
     

  .ant-select-single .ant-select-selector .ant-select-selection-item, 
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 26px !important;
      height: 26px !important;
      font-size: 12px;
      background-color: transparent !important;
  }
  .ant-select-selection-search {
        display: none !important;
      }

  &.ant-select-focus {
   
        .ant-select-selection-placeholder {
            color: transparent !important;
        }
    }
     
  }
 
`
export default StyledSelectThTop;
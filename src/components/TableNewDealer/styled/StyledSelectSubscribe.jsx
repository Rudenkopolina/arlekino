import styled from 'styled-components';
import { Select  } from 'antd'
import Triangle from '../../../assets/img/traingle2.png'
import IconSelect from '../../../assets/img/selectTableblack.svg'

const StyledSelectSubscribe = styled(Select)`
  && {
      border: 1px solid #ECECEC;
      box-sizing: border-box;
      font-size: 12px;
      height: 28px;
      margin-left: 10px;
      width: 160px;
      font-family: var(--fontGilroyRegular);
      color: var(--gray);
      border-radius: 2px;
      
       .ant-select-selector .ant-select-selection-item, 
       .ant-select-selector .ant-select-selection-placeholder {
          line-height: 26px !important;
          line-height: 26px !important;
          height: 26px;
          font-size: 12px;
          padding-left: 8px;
          
          background-color: transparent !important;
      }
      .ant-select-selection-search {
        display: none !important;
      }
      &.ant-select-disabled {
         .ant-select-arrow {
            opacity: 0.6;
         }
      }
      
       .ant-select-selector {
          padding: 0 !important;
          box-shadow: none;
          border: none;
          border-radius: 0;
          height: 26px !important;
      }
  }
  &.ant-select-focus {
        .ant-select-selection-placeholder {
            color: transparent !important;
        }
   }
   .ant-select-item.ant-select-item-option {
      transition: background 0.2s ease;
      padding-left: 0;
   }
    .ant-select-item-option {
      height: 28px;
   }
   .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      background: var(--mainblue);
      color: var(--white); 
      height: 28px;
   }
   .selectSubscribe {
      width: 152px !important;
      min-height: 149px;
      background: #FFFFFF;
      border: 1px solid #EFEEF3;
      box-sizing: border-box;
      border-radius: 4px;
      left: -1px !important;
      top: 30px !important;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
      overflow: visible;
      
      &:after {
         // content: '';
         // cursor: pointer;
         // width: 25px;
         // height: 17px;
         // display: inline-block;
         // position: absolute;
         // top: -15px;
         // right: 41px;
         // background: url(${(Triangle)}) center center no-repeat;
      }
      .ant-select-item-option-content {
        font-size: 13px;
        padding-left: 20px;
      }
    }
    
     .ant-select-arrow {
        width: 8px;
        height: 5px;
        background: url(${(IconSelect)}) center center no-repeat;
        background-size: contain;
        right: 9px;
        margin-top: -2px;
        //transition: all 0.3s ease-in;
      }
      &.ant-select-open {
        .ant-select-arrow {
            transform: translateY(-2px) rotate(180deg);
        }
      }
      &.ant-select-open .ant-select-selection-item {
        opacity: 0.9;
      }
      .ant-select-arrow .anticon > svg {
          display: none;
      }
 
`
export default StyledSelectSubscribe;
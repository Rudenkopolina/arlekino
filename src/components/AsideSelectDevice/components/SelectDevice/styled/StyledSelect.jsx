import styled from 'styled-components';
import Search from '../../../../../assets/img/search.svg'
import { Select  } from 'antd'


const StyledSelect = styled(Select)`
  &:before {
    position: absolute;
    width: 275px;
    height: 1px;
    left: 6px;
    top: 43px;
    background: #EFEEF3;
    content: '';
    z-index: 22;
  }

  &.ant-select-focus {
   
        .ant-select-selection-placeholder {
            color: transparent !important;
        }
    }
    && {
      height: 40px;
      background: var(--white);
  
      .ant-select-selector {
          padding: 0 !important;
          box-shadow: none;
          border: none;
          border-radius: 0;
          height: auto !important;
      }
      .ant-select-selection-search {
        right: 0;
        left: 6px;
        box-shadow: none;
      }
      .ant-select-selection-item {
        height: 40px;
        padding-left: 50px;
        padding-top: 2px;
        box-shadow: none;
      }
    
      .ant-select-single .ant-select-selector .ant-select-selection-search {
        left: 0 !important;
       }
       .ant-select-show-search.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
          padding-left: 6px;
          padding-right: 6px;  
       }
       .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
          padding: 0 6px !important; 
          height: auto !important; 
       }
       .ant-select-arrow {
          width: 18px;
          height: 18px;
          left: 19px !important;
          right: auto;
          top: 15px !important;
          background:  url(${(Search)}) center center no-repeat;
       }
       .ant-select-arrow .anticon {
          display: none;
       }
      .ant-select-dropdown {
        box-shadow: none;
      }
      &.ant-select-focus .ant-select-selection-placeholder {
        color: transparent !important;
      }
      
    
      .ant-select-selection-search {
         height: 40px;
         width: 100%;
         padding: 4px 5px 5px 42px;
         box-shadow: none;
      }
      .ant-select-selection-placeholder {
        padding-left: 50px !important;
        line-height: 40px;
        
      }
  }
 
`
export default StyledSelect;
import styled from 'styled-components';
import { Select  } from 'antd'
import IconSelect from '../../../../assets/img/down-select.svg'

const StyledSelectServer = styled(Select)`
 && {
      width: 392px;
      background: var(--white);
      margin-bottom: 37px;
      margin-top: 7px;
      border: 1px solid #ECECEC;
      box-sizing: border-box;
      font-size: 12px;
      border-radius: 2px;
      height: 42px;
      font-family: var(--fontGilroyMedium);
      color: #5C70CF;
       @media (max-width: 419px) {
					width: 290px;
			  }
			  
			  @media (min-width: 420px) {
					 width: 392px;
			  }
  
      .ant-select-selector {
          padding: 0 !important;
          box-shadow: none;
          border: none;
          border-radius: 0;
          height: auto !important;
          height: 39px !important;
      }
      &.ant-select-disabled.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        opacity: 0.5;
      }
      &.ant-select-single.ant-select-open .ant-select-selection-item {
        opacity: 0.8;
      }
      .ant-select-selection-item {
        box-shadow: none;
        padding-left: 20px;
        font-size: 12px;
        background: #fff !important;
        text-transform: uppercase;
      }
     
      
      .ant-select-selector {
         height: 39px; !important;
      }
      .ant-select-arrow {
        width: 11px;
        height: 7px;
        background: url(${(IconSelect)}) center center no-repeat;
        background-size: contain;
        right: 17px;
        margin-top: -4px;
      }
      .ant-select-arrow .anticon > svg {
          display: none;
      }
      .ant-select-selector .ant-select-selection-item,
      .ant-select-selector .ant-select-selection-placeholder{
        line-height: 39px !important;
        height: 39px !important;
        background: #fff !important;
        color: var(--mainblue);
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
export default StyledSelectServer;
import styled from 'styled-components'
import { DEVICE } from '../../../../../../../constants/media'

const StyledAsideLinkList = styled.div`
	width: 100%;
	padding: 0 22px 0 17px;
	margin-top: 9px;
	margin-bottom: 15px;
	
	 @media (max-width: 767px) {
       padding: 0 12px 0 17px;
   }
  
   @media (min-width: 768px) and (max-width: 1249px) {
       padding: 0 15px 0 16px;
   }
	.ant-collapse {
	  background-color: transparent;
    border: none;
    border-bottom: 0;
    border-radius: 0;
	}
	.ant-collapse > .ant-collapse-item > .ant-collapse-header {
	  padding: 2px 0;
	  border: none;
	  font-family: var(--fontGilroySemiBold);
    font-size: 12px;
    line-height: 20px;
    color: var(--mainblue);
	}	
	.ant-collapse > .ant-collapse-item {
    border: none;
    background: transparent;
    
    @media ${DEVICE.tabletDevices1250} {
      text-align: left;
    }
    
	}
	.ant-collapse-content {
    overflow: hidden;
    color: inherit;
    background-color: transparent;
    border-top: NONE;
   }
   .ant-collapse-content > .ant-collapse-content-box {
      padding: 8px 0 0 0;
      font-size: 12px;
      
      p,a {
          font-size: 12px;
          line-height: 12px;
          margin-bottom: 4px;
          display: inline-block;
          width: 285px;
          @media ${DEVICE.tabletDevices1250} {
             width: calc(100% - 30px)
          }
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
      }
  }
  .ant-collapse > .ant-collapse-item.ant-collapse-item-active > .ant-collapse-header i {
      transform: rotate(180deg);
  }
.ant-collapse > .ant-collapse-item > .ant-collapse-header::after {
    content: '';
    display: none;
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow svg {
  display: none;
}
 
`
export default StyledAsideLinkList

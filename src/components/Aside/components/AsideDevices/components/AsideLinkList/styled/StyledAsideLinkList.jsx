import styled from 'styled-components'
import ExpandIcon from '../../../../../../../assets/img/arrowdown.svg'

const StyledAsideLinkList = styled.div`
	width: 100%;
	padding: 0 22px 0 17px;
	margin-top: 9px;
	margin-bottom: 15px;
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
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
      }
  }
  .ant-collapse > .ant-collapse-item.ant-collapse-item-active > .ant-collapse-header::after {
      transform: rotate(180deg);
  }
.ant-collapse > .ant-collapse-item > .ant-collapse-header::after {
    content: '';
    position: absolute;
    right: 0;
    left: 171px;
    top: 9px;
    width: 9px;
    height: 6px;
    background: url(${ExpandIcon}) center center no-repeat;
    background-size: contain;
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow svg {
  display: none;
}
.ant-collapse > .ant-collapse-item:nth-child(2) > .ant-collapse-header::after {
    left: 190px;
}
.ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header::after {
    left: 93px;
}
 
`
export default StyledAsideLinkList

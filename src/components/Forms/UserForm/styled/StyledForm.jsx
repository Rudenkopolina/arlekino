import styled from 'styled-components';
import Triangle from  '../../../../assets/img/traingle2.png'
const StyledForm = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFEEF3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 317px;
  min-height: 180px;
  padding: 21px 10px 0 23px;
  position: relative;
  margin-top: 20px;
  
  .ant-row.ant-form-item {
    margin-bottom: 14px;
  }
  
  &:after {
    content: '';
     cursor: pointer;
     width: 25px;
     height: 17px;
     display: inline-block;
     position: absolute;
     top: -14px;
     right: 92px;
     background: url(${(Triangle)}) center center no-repeat;
  }
  
  
  .ant-form-item-label {
				font-style: normal;
				font-weight: normal;
				font-size: 13px !important;
				line-height: 15px;
				padding: 0;
				color: var(--gray);
				width: 60px;
				font-family: var(--fontGilroyRegular);
			}
			.ant-form-item-label > label {
				font-style: normal;
				font-weight: normal;
				padding: 0;
				font-size: 13px !important;
				line-height: 15px;
				color: var(--gray);
				width: 60px;
				font-family: var(--fontGilroyRegular);
			}
			
			.ant-form-item-label > label.ant-form-item-required::before {
			  display: none;
			}
`
export default StyledForm;
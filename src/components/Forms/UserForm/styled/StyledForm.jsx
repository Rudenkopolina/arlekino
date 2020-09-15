import styled from 'styled-components';
import Triangle from  '../../../../assets/img/traingle2.png'
import { DEVICE } from '../../../../constants/media'

const StyledForm = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFEEF3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 320px;
  min-height: 180px;
  padding: 21px 10px 0 23px;
  position: relative;
  margin-top: 20px;
  
  input {
     @media (min-width: 320px) and (max-width: 1249px) {
       font-size: 16px !important;  
     }
  }
  
  @media ${DEVICE.mobileDevices} {
      padding: 21px 10px 0 12px; 
      margin-top: 8px; 
      min-height: 190px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.22);  
      .ant-form .ant-form-item {
          flex-wrap: nowrap !important;
        }   
   }
   @media (max-width: 359px) {
         width: 290px;
  }
   @media (min-width: 360px) and (max-width: 419px) {
         width: 320px;
  }
   @media (min-width: 420px) and (max-width: 576px) {
         width: 380px;
  }
   @media (min-width: 768px) and (max-width: 1249px) {
         width: 380px;
  }
   @media ${DEVICE.tabletDevices1250} {
      margin-top: 8px;      
   }
   
   @media (max-width: 576px) { 
     .ant-form .ant-form-item .ant-form-item-label, 
      .ant-form .ant-form-item .ant-form-item-control {
        -ms-flex: 0 0 100%;
        flex: auto;
      }
      
    }
    
  @media (min-width: 320px) and (max-width: 359px) {
    
      .ant-form .ant-form-item .ant-form-item-control {
        width: 235px;
      }
  }
  
   @media (min-width: 360px) and (max-width: 480px) {
    
      .ant-form .ant-form-item .ant-form-item-control {
        width: 238px;
      }
  }
  
  .ant-row.ant-form-item {
    margin-bottom: 14px;
  }
  
  @media ${DEVICE.tablet} {
      margin-top: 5px;
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
     
      @media ${DEVICE.tabletDevices1250} {
             right: auto;
             left: 30px;
         }
  }
  .ant-form .ant-form-item .ant-form-item-label {
        @media (min-width: 360px) and (max-width:767px){
              display: inline-flex !important;
              max-width: 66px;
              width: 66px;
         }
         @media (max-width:359px) {
               width: 60px;
               max-width: 60px;
         }
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
				
				  @media (min-width: 360px) and (max-width:767px) {
               flex: 0 0 70px !important;
               font-size: 15px !important;
          }
           @media (max-width:359px) {
               flex: 0 0 60px !important;
               font-size: 14px !important;
           }
			}
			
			.ant-form-item-label > label.ant-form-item-required::before {
			  display: none;
			}
`
export default StyledForm;
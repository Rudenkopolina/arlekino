import styled from 'styled-components';
import { Checkbox } from 'antd';
import Check from '../../../assets/img/tick.svg';

export default styled(Checkbox)`
    &&& {
			font-family: var(--fontGilroyRegular);
      font-size: 13px;
      line-height: 17px;
			font-stretch: normal;
			font-style: normal;
			letter-spacing: normal;
			color: var(--mainblack);
			padding-left: 0;
			display: flex;
			margin-right: 13px;
			
			&.ant-checkbox-wrapper-checked {
				color: var(--mainblack);
			}
			    
        input[type='checkbox'] {
            width: 14px;
		        height: 14px;
            }
            
            &.ant-checkbox-wrapper.ant-checkbox-wrapper-checked.ant-checkbox-wrapper-disabled {
                color: var(--gray);
            }
            
            &.ant-checkbox-wrapper.ant-checkbox-wrapper-checked {
                color: var(--mainblack);
            }
		
		&:hover {
		   border-color: var(--panelBorderGray);
		   .ant-checkbox-inner {
		        border-color: var(--panelBorderGray);
		   }
		}
		 	
    .ant-checkbox {
		    width: 14px;
		    height: 14px;

		     &.ant-checkbox-checked .ant-checkbox-inner::after {
	            opacity: 1;
		          width: 12px;
              height: 12px;
              transform: none;
              border: none;
              top: 0;
              left: 0;
              transition: all 0.2s ease-in 0.1s;
	            background: url(${Check}) center center no-repeat;
             }
             
             &.ant-checkbox-checked.ant-checkbox-disabled .ant-checkbox-inner::after { 
                
             }
             
             &.ant-checkbox-checked {
              background: var(--orange);  
              border-radius: 2px;
             }

             & + span {
                width: 100%;
                display: inline-block;
             }
        }
        
      .ant-checkbox-inner {
	        width: 14px;
	        height: 14px;
	        border: 1px solid var(--panelBorderGray);
	        position: relative;
	        border-radius: 2px;
	  }  
	  .ant-checkbox-checked .ant-checkbox-inner {
	        border: 1px solid var(--orange);
	        background-color:  var(--orange);    
	  }
	  .ant-checkbox-checked::after {
	        border: 1px solid var(--orange);
	        background-color:  var(--orange); 
	  }
	  .ant-checkbox-checked.ant-checkbox-disabled {
	        
	  }
	  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner,
	   .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--orange);
    }
    }
`

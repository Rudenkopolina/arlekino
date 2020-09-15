import styled from 'styled-components';
import { Checkbox } from 'antd';
import Check from '../../../assets/img/icon-check-blue.svg';

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
            width: 20px;
            height: 18px;
            }
            
            &.ant-checkbox-wrapper.ant-checkbox-wrapper-checked.ant-checkbox-wrapper-disabled {
                color: var(--gray);
            }
            
            &.ant-checkbox-wrapper.ant-checkbox-wrapper-checked {
                color: var(--mainblack);
            }
		
		&:hover {
		   border-color: var(--orange);
		   .ant-checkbox-inner {
		        border-color: var(--orange);
		   }
		}
		 	
    .ant-checkbox {
		    width: 20px;
        height: 18px;
        border-radius: 5px;

		     &.ant-checkbox-checked .ant-checkbox-inner::after {
	            opacity: 1;
		          width: 12px;
              height: 10px;
              transform: none;
              border: none;
              top: 3px;
              left: 4px;
              transition: all 0.2s ease-in 0.1s;
	            background: url(${Check}) center center no-repeat;
             }
             
             &.ant-checkbox-checked.ant-checkbox-disabled .ant-checkbox-inner::after { 
                
             }
             
             &.ant-checkbox-checked {
              background: transparent;  
              border-radius: 5px;
             }

             & + span {
                width: 100%;
                display: inline-block;
             }
        }
        
      .ant-checkbox-inner {
	        width: 20px;
	        height: 18px;
	        border: 1px solid var(--orange);
	        position: relative;
	        border-radius: 5px;
	  }  
	  .ant-checkbox-checked .ant-checkbox-inner {
	        border: 1px solid var(--orange);
	        background-color:  transparent;    
	  }
	  .ant-checkbox-checked::after {
	        border-radius: 5px;
	        border: 1px solid var(--orange);
	        background-color:  transparent; 
	  }
	  .ant-checkbox-checked.ant-checkbox-disabled {
	        
	  }
	  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner,
	   .ant-checkbox-input:focus + .ant-checkbox-inner {
        border-color: var(--orange);
      }
    }
`

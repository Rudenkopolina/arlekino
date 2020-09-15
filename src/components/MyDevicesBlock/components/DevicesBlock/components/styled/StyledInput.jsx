import styled from 'styled-components';
import { Input } from 'antd';
import { DEVICE } from '../../../../../../constants/media'

const StyledInput = styled(Input)`
	&& {
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		line-height: 20px;
		box-sizing: border-box;
		padding: 2px 11px 2px 5px;
		width: 240px;
		border-radius: 2px;
		
		@media (max-width: 1249px) {
			font-size: 16px;
		}
		
		@media (max-width: 767px) {
			width: 205px;
		}
		
		 @media (max-width: 339px) {
					width: 180px;
    }
		
		color: var(--mainblack);
		background: transparent;
		cursor:pointer;
		
		&:read-only {
			cursor: auto;
		}
		&[readonly] {
		}
		&:focus:not(&:read-only) {
			cursor: auto; 
    	border: 1px solid #EFEEF3;
			box-sizing: border-box;
			border-radius: 2px;
			
			@media ${DEVICE.tabletDevices1250} {
			}
		}
		&:hover:not(:read-only),
		&:focus:not(:read-only) { 
      @media ${DEVICE.tabletDevices1250} {
          border: none !important;
      }
    }
    &:hover:not(:read-only),
    &:focus:not(:read-only) { 
      border: 1px solid #EFEEF3;
      border: ${({ iseditable }) => (iseditable ? '1px solid #EFEEF3;' : 'none;')}; 
      @media ${DEVICE.tabletDevices1250} {
          border: 1px solid #EFEEF3 !important;
      }
    }
    &:hover:read-only,
    &:focus:read-only { 
      border: none;
    }
    &[autofocus]::-webkit-input-placeholder {
      border: 1px solid #EFEEF3;
    }
	  border: ${({ iseditable }) => (iseditable ? '1px solid #EFEEF3;' : 'none;')}; 
		&:hover:not(&:read-only) { 
		   @media ${DEVICE.tabletDevices1250} {
		    border: 1px solid #EFEEF3;
		   }
    }
        
		.ant-input-focused {
		
			border: ${({ iseditable }) => (iseditable ? '1px solid #EFEEF3;' : 'none;')}; 
		}
		&::placeholder {
			color: var(--mainblack);
		}
        
        &[disabled]{
           opacity: 0.5;  
        }
        
			&[autofocus]::-moz-placeholder:focus {
			  color: var(--mainblack)  !important;
			}
			
			
			&[autofocus]:-moz-placeholder:focus {
			  color: var(--mainblack) !important;
			}
		
			&[autofocus]::-webkit-input-placeholder {
			  color: var(--mainblack) !important;
			}
	}
`
export default StyledInput;
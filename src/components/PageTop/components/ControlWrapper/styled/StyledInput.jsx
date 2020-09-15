import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled(
	({ ...props }) => <Input {...props} />
)`
	&& {
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		font-size: 13px;
		box-sizing: border-box;
		border-radius: 0;
		padding: 0 11px 2px 2px;
		width: 180px;
		color: var(--mainblack);
		background: transparent;
		cursor:pointer;
		height: 25px;
		border-radius: 2px;
		
		&:read-only {
			opacity: 0.9; 
			cursor: auto;
		}
		&[readonly] {
    	opacity: 0.9; 
    	cursor: auto; 
		}
		&::placeholder {
			color: var(--mainblack);
		}
		
		&:focus {
			color: var(--gray);
			border: ${({ iseditable }) => (iseditable ? '1px solid #EFEEF3;' : '1px solid transparent;')}; 
		}
		&:hover {
		   
		   border: ${({ iseditable }) => (iseditable ? '1px solid #EFEEF3;' : '1px solid transparent;')}; 
       }
        
		.ant-input-focused {
			border: ${({ iseditable }) => (iseditable ? '1px solid #EFEEF3;' : '1px solid transparent;')}; 
		}
		 border: ${({ iseditable }) => (iseditable ? '1px solid #EFEEF3;' : '1px solid transparent;')}; 
        
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
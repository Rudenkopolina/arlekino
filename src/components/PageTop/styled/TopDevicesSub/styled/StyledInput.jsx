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
		border: none;
		box-sizing: border-box;
		border-radius: 0;
		padding: 0 11px 2px 0;
		width: 180px;
		color: var(--mainblack);
		background: transparent;
		cursor:pointer;
		height: 25px;
		
		&:read-only {
			opacity: 0.9; 
			cursor: auto;
			position: relative;
			top: -3px;
		}
		&[readonly] {
    	opacity: 0.9; 
    	cursor: auto; 
		}
		&::placeholder {
			color: var(--mainblack);
		}
		
		&:focus {
			color: var(--mainblack);
		}
		&:hover {
		   border: none;
       }
        
		.ant-input-focused {
			border: none;
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
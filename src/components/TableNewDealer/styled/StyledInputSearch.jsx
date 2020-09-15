import React from 'react';
import styled  from 'styled-components';
import { Input } from 'antd';

const StyledInputSearch = styled(
	({ ...props }) => <Input {...props} />
)`
	&& {
		width: ${({ width }) => (width)};

			position: relative;
			left: -45px;
			argin-left: 0;
		height: 26px;
		margin-left: 10px;
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		font-size: 12px;
		border: 1px solid var(--borderInput);
		box-sizing: border-box;
		border-radius: 2px 0 0 2px;
		padding: 6px 11px;
		color: var(--gray);
		
		&:focus {
			border: solid 1px var(--borderInput);
		}
		&:hover {
		   border: 1px solid var(--borderInput);
       }
        
		.ant-input-focused {
			border: solid 1px var(--borderInput);
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
export default StyledInputSearch ;
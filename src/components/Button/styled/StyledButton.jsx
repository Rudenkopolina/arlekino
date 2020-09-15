import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(({ ...props }) => (
	<Button {...props} />
))`
   && {
      display: block; 
      //width: 160px;
		  height: 40px;
		  line-height: 40px;
		  background-image: none;
		  padding: 0 17px;
		  font-family: var(--fontGilroySemiBold);
			font-size: 14px;
		  color: var(--white);
		  background: var(--orange);
		  transition: all 0.3s ease-in;
		  text-transform: uppercase;
		  border: none;
		  outline: none;
		  border-radius: 2px;
		  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14);
		  &.ant-btn-sm {
		  	height: 48px;
		  	line-height: 48px;
		  	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14);
		  }
	
		  &:hover {
		    background: var(--orangeHover);
		    border: none;
		  }
		  
		  &.ant-btn-sm {}
		  &[disabled] {
		  	opacity: 0.5;
		  }
		  
    ${({ uitype }) => {
			if ( uitype && uitype === 'bordered') {
				return css`
					text-transform: uppercase;
					color: var(--mainblack);
          font-family: var(--fontGilroySemiBold);
					font-size: 14px;
					line-height: 24px;  
					height: 48px;
					padding: 0 18px;
					background: var(--white);
					border: 2px solid #FF9800;
					border-radius: 2px;                
      `}
		}}
    
        ${({ align }) => {
					if ( align && align === 'center') {
						return css`
									margin: 0 auto; 
				      `}
				}}	 
    }
    
`
export default StyledButton;

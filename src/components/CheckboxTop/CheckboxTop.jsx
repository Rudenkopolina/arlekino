import React from 'react';
import StyledCheckboxTop from './styled/StyledCheckboxTop';

const CheckboxTop = ({children, input, ...props}) => {
	return (
	<StyledCheckboxTop {...input} {...props}>
		{children}
	</StyledCheckboxTop>
)};

export default CheckboxTop;



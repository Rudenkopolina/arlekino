import React from 'react';
import StyledCheckboxSingle from './styled/StyledCheckboxSingle';

const CheckboxSingle = ({children, input, ...props}) => {
	return (
	<StyledCheckboxSingle {...input} {...props}>
		{children}
	</StyledCheckboxSingle>
)};

export default CheckboxSingle;



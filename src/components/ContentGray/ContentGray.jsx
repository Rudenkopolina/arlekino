import React from 'react'
import StyledContentGray from './styled/StyledContentGray'

const ContentGray = ({children, ...props}) => (
  <StyledContentGray {...props}>
    {children}
  </StyledContentGray>
);

export default ContentGray;
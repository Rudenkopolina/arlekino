import React from 'react'
import StyledAside from './styled/StyledAside'


const Aside = ({ children, ...props }) => {
  return (
    <StyledAside
      {...props}
    >
      {children}
    </StyledAside>
  )
}

export default Aside

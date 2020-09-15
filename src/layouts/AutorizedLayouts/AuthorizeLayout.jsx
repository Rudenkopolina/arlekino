import React from 'react'
import StyledAutorizeLayout from './styled/StyledAutorizeLayout'

const AuthorizeLayout = ({ children }) => {
  return (
    <StyledAutorizeLayout>
      {children}
    </StyledAutorizeLayout>
  )
}

export default AuthorizeLayout

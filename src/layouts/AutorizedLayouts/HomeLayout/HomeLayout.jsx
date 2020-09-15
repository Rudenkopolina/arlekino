import React from 'react'
import AuthorizeLayout from '../AuthorizeLayout'

const HomeLayout = ({ children }) => (
  <AuthorizeLayout>
    {children}
  </AuthorizeLayout>
)

export default HomeLayout

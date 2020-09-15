import React from 'react'
import { Link } from 'react-router-dom'
import StyledMenu from './styled/StyledMenu'
import StyledMenuItem from './styled/StyledMenuItem'
import { FormattedMessage, injectIntl } from 'react-intl'

const MenuHeader = () => (
  <StyledMenu>
    <StyledMenuItem>
      <Link to='/'>
        <FormattedMessage id='MenuHeader.step1' />
      </Link>
    </StyledMenuItem>
    <StyledMenuItem>
      <Link to='/'>
        <FormattedMessage id='MenuHeader.step2' />
      </Link>
    </StyledMenuItem>
    <StyledMenuItem>
      <Link to='/'>
        <FormattedMessage id='MenuHeader.step3' />
      </Link>
    </StyledMenuItem>
  </StyledMenu>
)

export default injectIntl((MenuHeader))

import React from 'react'
import styled from 'styled-components'
import { DEVICE } from '../../constants/media'
import { Link } from 'react-router-dom'
import { FormattedMessage, injectIntl } from 'react-intl'

const MenuHeader = () => (
  <StyledMenu>
    <StyledMenuItem>
      <StyledLink to=''>
        <FormattedMessage id='MenuHeader.step1' />
      </StyledLink>
    </StyledMenuItem>
    <StyledMenuItem>
      <StyledLink to=''>
        <FormattedMessage id='MenuHeader.step2' />
      </StyledLink>
    </StyledMenuItem>
    <StyledMenuItem>
      <StyledLink to=''>
        <FormattedMessage id='MenuHeader.step3' />
      </StyledLink>
    </StyledMenuItem>
  </StyledMenu>
)

export default injectIntl((MenuHeader))

const StyledMenu = styled.nav`
    display: flex;
    flex: 3;
    justify-content: space-around;

    @media ${DEVICE.tabletL} {
      display: none;
    }
`

const StyledMenuItem = styled.div`
  font-family: var(--fontGilroyMedium);
  margin: 0 1rem;
	:hover {
		color: var(--orange);
		text-underline: none !important;
	}
`

const StyledLink = styled(Link)`
  color: var(--white);
  white-space: nowrap;
      
  :hover {
    color: var(--orange);
  }
`;

import React from 'react'
import { Link } from 'react-router-dom'
import StyledMainMenu from './styled/StyledMainMenu'
import StyledMainMenuItem from './styled/StyledMainMenuItem'
import { FormattedMessage, injectIntl } from 'react-intl'
import Container from '../styled/StyledContainer'
import PlayerPanel from './components/PlayerPanel/PlayerPanel'

const MainMenu = ({isDesktop}) => (
  <StyledMainMenu isDesktop={isDesktop}>
    <Container display="flex">

      <nav>
        <StyledMainMenuItem>
          <Link to='/'>
            <FormattedMessage id='MainMenu.Item1' />
          </Link>
        </StyledMainMenuItem>

        <StyledMainMenuItem>
          <Link to='/'>
            <FormattedMessage id='MainMenu.Item2' />
          </Link>
        </StyledMainMenuItem>

        <StyledMainMenuItem>
          <Link to='/'>
            <FormattedMessage id='MainMenu.Item3' />
          </Link>
        </StyledMainMenuItem>

        <StyledMainMenuItem>
          <Link to='/'>
            <FormattedMessage id='MainMenu.Item4' />
          </Link>
        </StyledMainMenuItem>

        <StyledMainMenuItem>
          <Link to='/'>
            <FormattedMessage id='MainMenu.Item5' />
          </Link>
        </StyledMainMenuItem>
      </nav>

      <aside>
        <PlayerPanel/>
      </aside>

    </Container>
  </StyledMainMenu>
)

export default injectIntl((MainMenu))

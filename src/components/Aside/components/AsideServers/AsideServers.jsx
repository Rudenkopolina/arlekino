import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import StyledAsideServers from './styled/StyledAsideServers'
import StyledAsideServer from './styled/StyledAsideServer'
import Checkbox from '../../../Checkbox/Checkbox'
import StyledAsideServerItem from './styled/StyledAsideServerItem'
import StyledAsideServersHeader from './styled/StyledAsideServersHeader'
import StyledAsideServersContent from './styled/StyledAsideServersContent'

const servers = [
  {
    name: 'Server RU01 (Russia)',

  },
  {
    name: 'Server NL01 (Amsterdam)',

  },
  {
    name: 'Server CH01 (Zurich)',

  },
  {
    name: 'Server NL01 (Amsterdam)2',

  },
  {
    name: 'Server FR01 (France)',

  }
]
const AsideServers = () => (
  <StyledAsideServers>

    <StyledAsideServersHeader>
      <h3><FormattedMessage id='AsideServers.Title' /></h3>
      <p><FormattedMessage id='AsideServers.Add' /></p>
    </StyledAsideServersHeader>

    <StyledAsideServersContent>
      <StyledAsideServer>
        {
          servers.map(playlist => (
            <StyledAsideServerItem key={playlist.name} >
              <Checkbox />
              <i></i>
              <p>{ playlist.name }</p>
            </StyledAsideServerItem>)
          )
        }

      </StyledAsideServer>
    </StyledAsideServersContent>

  </StyledAsideServers>
)
export default injectIntl(AsideServers)

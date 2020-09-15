import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import Checkbox from '../../../Checkbox/Checkbox';
import StyledAsidePlaylists from './styled/StyledAsidePlaylists'
import StyledAsidePlaylistHeader from './styled/StyledAsidePlaylistHeader'
import StyledAsidePlaylistAdd from './styled/StyledAsidePlaylistsAdd'
import StyledAsidePlaylistContent from './styled/StyledAsidePlaylistsContent'
import StyledAsidePlaylistItem from './styled/StyledAsidePlaylistItem'
import StyledAsidePlaylist from './styled/StyledAsidePlaylist'

const playlists = [
  {
    name: 'По умолчанию1',

  },
  {
    name: 'По умолчанию2',

  }
]
const AsidePlaylists = () => (
  <StyledAsidePlaylists>

    <StyledAsidePlaylistHeader>
      <h3><FormattedMessage id='AsidePlaylist.Title' /></h3>
      <StyledAsidePlaylistAdd><FormattedMessage id='AsidePlaylist.Add' /><i></i></StyledAsidePlaylistAdd>
    </StyledAsidePlaylistHeader>

    <StyledAsidePlaylistContent>
      <StyledAsidePlaylist>
        {
          playlists.map(playlist => (
            <StyledAsidePlaylistItem key={playlist.name} >
              <Checkbox />
              <i></i>
              <p>{ playlist.name }</p>
            </StyledAsidePlaylistItem>)
          )
        }

      </StyledAsidePlaylist>
    </StyledAsidePlaylistContent>

  </StyledAsidePlaylists>
)
export default injectIntl(AsidePlaylists)

import React, { useState } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import StyledAsidePlaylists from './styled/StyledAsidePlaylists'
import StyledAsidePlaylistHeader from './styled/StyledAsidePlaylistHeader'
import StyledAsidePlaylistAdd from './styled/StyledAsidePlaylistsAdd'
import StyledAsidePlaylistContent from './styled/StyledAsidePlaylistsContent'
import StyledAsidePlaylistItem from './styled/StyledAsidePlaylistItem'
import StyledAsidePlaylist from './styled/StyledAsidePlaylist'
import AddPlaylistModal from '../../../Modal/AddPlaylistModal/AddPlaylistModal'
import CheckboxSingle from '../../../CheckboxSingle/CheckboxSingle'

const playlists = [
  {
    name: 'По умолчанию1',
    checked: false,

  },
  {
    name: 'По умолчанию2',
    checked: true,

  }
]
const AsidePlaylists = () => {
  const [ isVisibleAddModal, setVisibleAddModal ] = useState(false);
  const toggleVisibleAddModal = () => {
    setVisibleAddModal(!isVisibleAddModal)
  };


  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
  }


  // onChange={event => {
  //   event.target.checked && setNoParents()
  // }}

  return(
    <StyledAsidePlaylists>

      <StyledAsidePlaylistHeader>
        <h3><FormattedMessage id='AsidePlaylist.Title' /></h3>
        <StyledAsidePlaylistAdd  onClick={toggleVisibleAddModal} ><p><FormattedMessage id='AsidePlaylist.Add' /></p><i></i></StyledAsidePlaylistAdd>
      </StyledAsidePlaylistHeader>

      <StyledAsidePlaylistContent>
        <StyledAsidePlaylist>
          {
            playlists.map(playlist => (
              <StyledAsidePlaylistItem key={playlist.name} >
                <CheckboxSingle name={playlist.name} checked={checkedItems[playlist.name]}  onChange={handleChange}>
                </CheckboxSingle>
                <i></i>
                <p>{ playlist.name }</p>
              </StyledAsidePlaylistItem>)
            )
          }

        </StyledAsidePlaylist>
      </StyledAsidePlaylistContent>

      <AddPlaylistModal isVisible={isVisibleAddModal} toggleVisibility={toggleVisibleAddModal} />
    </StyledAsidePlaylists>

  )
}
export default injectIntl(AsidePlaylists)

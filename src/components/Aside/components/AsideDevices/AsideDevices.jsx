import React, { useState } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import StyledAsideDevices from './styled/StyledAsideDevices'
import AsideOttId from './components/AsideOttId/AsideOttId'
import AsideLinkList from './components/AsideLinkList/AsideLinkList'
import AsideSelectDevice from '../../../AsideSelectDevice/AsideSelectDevice'
import AddDeviceModal from '../../../Modal/AddDeviceModal/AddDeviceModal'
import StyledMobileContent from './styled/StyledMobileContent'

const AsideDevices = ({isVisibleMenuDevice,collapseMenuDevices}) => {
  const [nameDevice, setName] = useState("Cпальня");

  const [ isVisibleAddModal, setVisibleAddModal ] = useState(false);
  const toggleVisibleAddModal = () => {
    setVisibleAddModal(!isVisibleAddModal)
  };

  const onSelect = (val, option) => {
    setName(option.value);
    collapseMenuDevices();
  };


  return (
    <StyledAsideDevices isMobile={true}>

      <header>
        <h3><FormattedMessage id='AsideDevices.Title' /></h3>

        <AsideSelectDevice nameDevice={nameDevice}
                           isVisible={isVisibleMenuDevice}
                           onSelect={onSelect}
                           toggleVisibility={collapseMenuDevices}/>
        <i onClick={toggleVisibleAddModal}></i>
      </header>

      <StyledMobileContent>
        <AsideOttId nameDevice={nameDevice} />
        <AsideLinkList/>
      </StyledMobileContent>

      <AddDeviceModal isVisible={isVisibleAddModal} toggleVisibility={toggleVisibleAddModal} />

    </StyledAsideDevices>
  )
}
export default injectIntl(AsideDevices)

import React, { useState } from 'react'
import { FormattedMessage} from 'react-intl'
import StyledDevicesBlock from './styled/StyledDevicesBlock'
import DropdownMenuDevices from './ components/DropDownMenuDevices'
import AddDeviceModal from '../../../Modal/AddDeviceModal/AddDeviceModal'
import StyledDevicesTable from './styled/StyledDevicesTable'

const DevicesBlock = () => {

  const [ isVisibleAdd, setVisibilityAdd ] = useState(false);
  const toggleVisibilityAdd = () => {
    setVisibilityAdd(!isVisibleAdd);
  };

  return (
    <StyledDevicesBlock>

        <header>
          <h3>
            <FormattedMessage id='DevicesBlock.Title' />
          </h3>
          <i onClick={toggleVisibilityAdd}></i>
        </header>

        <StyledDevicesTable>
              <DropdownMenuDevices></DropdownMenuDevices>
        </StyledDevicesTable>

      <AddDeviceModal isVisible={isVisibleAdd} toggleVisibility={toggleVisibilityAdd}/>
  </StyledDevicesBlock>
  )
}
export default DevicesBlock

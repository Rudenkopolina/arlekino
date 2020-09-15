import React  from 'react'
import StyledDropdownList from './styled/StyledDropdownList'
import ControlEditableWrapper from '../components/ControlWrapper/ControlWrapper'
const devicesTest = [
  {
    name: 'Устройство 1',
    active: true,
  }
]

const DropdownMenuDevices = () => {

  return (
    <StyledDropdownList>
      {
        devicesTest.map((device,index) => (

              <ControlEditableWrapper
                name="login"
                defaultValue={ device.name }
                key={device.name}
                isselect={device.active.toString()}
              />
        ))
      }

    </StyledDropdownList>
  )};


export default DropdownMenuDevices

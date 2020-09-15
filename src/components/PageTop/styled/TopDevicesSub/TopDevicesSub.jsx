import React, { useState, Fragment  } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import Styled from './styled/StyledTopDevicesSub'
import DevicesSubTable from './styled/TopDevicesSubTable'
import StyledDeleteIcon from './styled/StyledDeleteIcon'
import StyledEditIcon from './styled/StyledEditIcon'
import StyledIconPanel from './styled/StyledIconPanel'
import DeleteDeviceModal from '../../../Modal/DeleteDeviceModal/DeleteDeviceModal'
import StyledTooltip from '../../../styled/StyledTooltip'
import AddDeviceModal from '../../../Modal/AddDeviceModal/AddDeviceModal'
import DropDownPicker from '../../components/DropDownPicker/DropDownPicker'
import ControlEditableWrapper from '../../components/ControlWrapper/ControlWrapper'
import StyledAcceptIcon from '../../components/ControlWrapper/styled/StyledAcceptIcon'
import StyledInput from '../../components/ControlWrapper/styled/StyledInput'

const devicesTest = [
  {
    name: "Телевизор на кухне",
    date: "13.01.2020",
    isSubscribe: false,
    isEdit: true
  },
  {
    name: "Телевизор на кухне",
    date: "13.01.2020",
    isSubscribe: true,
    isEdit: false

  }

]

//
//   <div key={device.name} >
//   <StyledTooltip
// autoAdjustOverflow
// arrowPointAtCenter
// placement= 'topLeft'
// title={<FormattedMessage id="Tooltip.dateTopBlock" />}>
// <p>
// {device.date}
// </p>
// </StyledTooltip>
//
// <StyledIconPanel>
// <StyledEditIcon onClick={toggleEditable} />
// <StyledDeleteIcon onClick={toggleVisibility} />
// </StyledIconPanel>
//
// </div>

const TopDevicesSub = () => {
  const [ isVisible, setVisibility ] = useState(false);
  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  const [ isEditable, setEditable ] = useState(false);
  const toggleEditable = () => {
    setEditable(!isEditable);
    document.getElementById('test').focus();
  };



  const [ isVisibleAdd, setVisibilityAdd ] = useState(false);
  const toggleVisibilityAdd = () => {
    setVisibilityAdd(!isVisibleAdd);
  };


  return (
    <Styled.TopDevicesSub>
      <header>
        <h5><FormattedMessage id='TopDevicesSub.Title' /></h5>
        <span onClick={toggleVisibilityAdd} ><FormattedMessage id='TopDevicesSub.Add' /></span>
      </header>

      <Styled.Content>

        <DevicesSubTable.Table>
          <div>
            <DevicesSubTable.TableLeft>
              {

                devicesTest.map(device => {
                  if (device.isEdit) {
                    return (
                      <ControlEditableWrapper
                        key={device.date}
                        defaultValue={device.name}
                        name={device.name}
                        type="text"
                        id="test"
                        isEditable={isEditable}
                      />
                    )
                  }
                  else {
                    return (
                      <StyledInput
                        name={device.name}
                        defaultValue={device.name}
                        readOnly
                      />
                    )
                  }
                }
                )
              }
            </DevicesSubTable.TableLeft>

            <DevicesSubTable.TableRight>
              {
                devicesTest.map(device => (
                  <Fragment key={device.name}>
                    {device.isEdit ? (
                      <DevicesSubTable.TableItem isSubscribe={device.isSubscribe} key={device.name} >
                        <DropDownPicker>
                          <StyledTooltip
                            autoAdjustOverflow
                            arrowPointAtCenter
                            placement= 'topLeft'
                            title={<FormattedMessage id="Tooltip.dateTopBlock" />}>
                            <p><span>{device.date}</span></p>
                          </StyledTooltip>
                        </DropDownPicker>

                        <StyledIconPanel>
                          {
                            isEditable ?
                              <StyledAcceptIcon onClick={toggleEditable} />

                              :
                              <StyledEditIcon onClick={toggleEditable} />
                          }

                          <StyledDeleteIcon onClick={toggleVisibility} />
                        </StyledIconPanel>
                      </DevicesSubTable.TableItem>
                    ) : (
                      <DevicesSubTable.TableItem isSubscribe={device.isSubscribe} key={device.name} >
                        <DropDownPicker>
                          <StyledTooltip
                            autoAdjustOverflow
                            arrowPointAtCenter
                            placement= 'topLeft'
                            title={<FormattedMessage id="Tooltip.dateTopBlock" />}>
                            <p><span>{device.date}</span></p>
                          </StyledTooltip>
                        </DropDownPicker>

                        <StyledIconPanel>
                          <StyledEditIcon  />
                          <StyledDeleteIcon onClick={toggleVisibility} />
                        </StyledIconPanel>
                      </DevicesSubTable.TableItem>
                    )
                    }
                  </Fragment>
                ))
              }
            </DevicesSubTable.TableRight>
          </div>
        </DevicesSubTable.Table>
      </Styled.Content>

      <DeleteDeviceModal isVisible={isVisible} toggleVisibility={toggleVisibility}/>
      <AddDeviceModal  isVisible={isVisibleAdd} toggleVisibility={toggleVisibilityAdd}/>
    </Styled.TopDevicesSub>
  )
}
export default injectIntl(TopDevicesSub);

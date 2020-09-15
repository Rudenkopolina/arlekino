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
import StyledInput from './styled/StyledInput'
import axios from 'axios';

const devicesTest = [
  {
    name: "Телевизор на кухне",
    date: "купить",
    isSubscribe: false
  },
  {
    name: "Детская",
    date: "05.05.21",
    isSubscribe: true
  },
  {
    name: "Спальня",
    date: "05.06.20",
    isSubscribe: false
  }
]

axios.get('/api/billing/groups/')
    .then(res => {
    const people = res.data;
    this.setState(devicesTest);
})


const TopDevicesSub = () => {
  const [ isVisible, setVisibility ] = useState(false);
  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  const [ isEditable, setEditable ] = useState(false);
  const toggleEditable = () => {
    setEditable(!isEditable)
  };

  const EditDevice = () => {
    toggleEditable();
  }

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
          <DevicesSubTable.TableLeft>
            {
              devicesTest.map(device => (
                <StyledInput
                  key={device.date}
                  defaultValue={ device.name }
                  name="login"
                  readOnly={ !isEditable }
                />
                )
              )
            }
          </DevicesSubTable.TableLeft>

          <DevicesSubTable.TableRight>
            {
              devicesTest.map(device => (
                <Fragment key={device.name}>
                  {device.isSubscribe ? (
                    <div key={device.name} >
                      <StyledTooltip
                        autoAdjustOverflow
                        arrowPointAtCenter
                        placement= 'topLeft'
                        title={<FormattedMessage id="Tooltip.dateTopBlock" />}>
                        <p>{ device.date }</p>
                      </StyledTooltip>

                      <StyledIconPanel>
                        <StyledEditIcon />
                        <StyledDeleteIcon onClick={toggleVisibility} />
                      </StyledIconPanel>

                    </div>
                  ) : (
                    <div key={device.name} >
                      <p><span>{ device.date }</span></p>
                      <StyledIconPanel>
                        <StyledEditIcon />
                        <StyledDeleteIcon onClick={toggleVisibility} />
                      </StyledIconPanel>
                    </div>
                    )
                  }
                </Fragment>
              ))
            }
          </DevicesSubTable.TableRight>
        </DevicesSubTable.Table>
      </Styled.Content>

      <DeleteDeviceModal isVisible={isVisible} toggleVisibility={toggleVisibility}/>
      <AddDeviceModal  isVisible={isVisibleAdd} toggleVisibility={toggleVisibilityAdd}/>
    </Styled.TopDevicesSub>
  )
}
export default injectIntl(TopDevicesSub );

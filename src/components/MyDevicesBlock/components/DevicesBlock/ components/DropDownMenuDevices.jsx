import React, { useState, Fragment } from 'react'
import StyledDropdownList from './styled/StyledDropdownList'
import StyledDropdownItem from './styled/StyledDropdownItem'
import EditIcon from './styled/EditIcon'
import DeleteIcon from './styled/DeleteIcon'
import CheckIcon from './styled/CheckIcon'
import DeleteDeviceModal from '../../../../Modal/DeleteDeviceModal/DeleteDeviceModal'
import StyledPanelEdit from './styled/StyledPanelEdit'
import StyledInput from './styled/StyledInput'
import StyledAcceptIcon from './styled/StyledAcceptIcon'

const devicesTest = [
  {
    name: 'Устройство 1',
    active: true,
  }
]

const DropdownMenuDevices = () => {
  const [ isActive, setActiveItem ] = useState(true);
  const toggleActive = (e) => {
    if ( e.target.dataset.area && e.target.dataset.area === 'modal') {
      toggleVisibleDeleteModal();
    }
    else if ( e.target.dataset.area && e.target.dataset.area === 'edit') {
      EditDevice();
    }
    else {
      setActiveItem(!isActive)
    }
  };

  const [ isEditable, setEditable ] = useState(false);
  const toggleEditable = () => {
    setEditable(!isEditable)
  };

  const [ isVisibleDeleteModal, setVisibleDeleteModal ] = useState(false);
  const toggleVisibleDeleteModal = () => {
    setVisibleDeleteModal(!isVisibleDeleteModal)
  };

  const EditDevice = () => {
    toggleEditable();
    const device =  document.getElementById('deviceEdit')
    device.focus()
  }


  return (
    <StyledDropdownList>
      {
        devicesTest.map((device,index) => (
          <StyledDropdownItem
            key={device.name}
            onClick={(e)=> {(toggleActive(e))}}
            isActive={isActive}
            isEditable={isEditable}
          >
              { isActive && <CheckIcon/>}
              <StyledInput
                name="login"
                readOnly={ !isEditable }
                defaultValue={ device.name }
                id="deviceEdit"
              >
            </StyledInput>

            <StyledPanelEdit editable={true}>

                {(!isEditable)?
                  (
                    <>
                      <EditIcon onClick={((e) => EditDevice.bind(e)) } data-area="edit">
                        <svg data-area="edit" fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path data-area="edit" d="m.471312 11.863c-.123298 0-.243773-.049-.333187-.1374-.1110629-.1111-.1600057-.2711-.12894586-.4245l.66543286-3.3272c.018824-.09224.06212-.176.128945-.24095l7.320703-7.320702c.54967-.549664 1.44664-.549664 1.99634 0l1.3308 1.330872c.5506.5506.5506 1.44569 0 1.99629l-7.32068 7.32069c-.06494.0659-.14871.1101-.24095.129l-3.327161.6654c-.030119.0056-.061179.0085-.091297.0085zm1.099328-3.56626-.49884 2.49516 2.49514-.4989 7.21996-7.21996c.1836-.18354.1836-.4819 0-.66543l-1.33083-1.33087c-.18353-.183535-.4819-.183535-.66543 0zm2.22784 2.43016h.00941z" fill="#4859a4"/></svg>
                      </EditIcon>
                      <DeleteIcon onClick={((e) => toggleVisibleDeleteModal.bind(e)) } data-area="modal">
                          <svg data-area="modal" fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg"><path data-area="modal" d="m6.13798 5.26367 3.47098-3.47108c.22588-.22578.22588-.59084 0-.816615-.22578-.225779-.59083-.225779-.81661 0l-3.47109 3.471075-3.47097-3.471075c-.22589-.225779-.59084-.225779-.81662 0-.225884.225775-.225884.590835 0 .816615l3.47098 3.47108-3.47098 3.47107c-.225884.22578-.225884.59084 0 .81662.11252.11262.26047.1692.40831.1692s.29568-.05658.40831-.1692l3.47097-3.47108 3.47109 3.47108c.11262.11262.26046.1692.4083.1692s.29568-.05658.40831-.1692c.22588-.22578.22588-.59084 0-.81662z" fill="#ff1744"/></svg>
                      </DeleteIcon>
                    </>
                  )
                  :
                  (
                    <>
                      <StyledAcceptIcon onClick={toggleEditable}  data-area="edit"/>
                      <DeleteIcon onClick={toggleEditable} data-area="edit">
                        <svg data-area="edit" fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg"><path data-area="edit" d="m6.13798 5.26367 3.47098-3.47108c.22588-.22578.22588-.59084 0-.816615-.22578-.225779-.59083-.225779-.81661 0l-3.47109 3.471075-3.47097-3.471075c-.22589-.225779-.59084-.225779-.81662 0-.225884.225775-.225884.590835 0 .816615l3.47098 3.47108-3.47098 3.47107c-.225884.22578-.225884.59084 0 .81662.11252.11262.26047.1692.40831.1692s.29568-.05658.40831-.1692l3.47097-3.47108 3.47109 3.47108c.11262.11262.26046.1692.4083.1692s.29568-.05658.40831-.1692c.22588-.22578.22588-.59084 0-.81662z" fill="#ff1744"/></svg>
                      </DeleteIcon>
                    </>
                  )
                }
            </StyledPanelEdit>
          </StyledDropdownItem>
        ))
      }

      <DeleteDeviceModal isVisible={isVisibleDeleteModal} toggleVisibility={toggleVisibleDeleteModal} />

    </StyledDropdownList>
  )};


export default DropdownMenuDevices
